<template>
  <div class="cascader">
    <div class="trigger" @click="popVisible = !popVisible">
      {{ result || '&nbsp;' }}
      <slot></slot>
    </div>
    <div class="popover-wraper" v-show="popVisible">
      <g-cascader-item :source="source" class="popover" :height="popoverHeight" :selected="selected" @update:selected="updateSelected"/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GuruCascader',
  props: {
    source: {
      type: Array,
      default: () => []
    },
    popoverHeight: {
      type: String,
      default: ''
    },
    // 选中的项
    selected: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      popVisible: false
    }
  },
  methods: {
    updateSelected (newSelected) {
      this.$emit('update:selected', newSelected)
    }
  },
  computed: {
    result () {
      return this.selected.map(item => item.name).join('/')
    }
  }
}
</script>

<style lang="scss" scoped>
@import 'var';

.cascader {
  position: relative;
  .trigger {
    min-width: 10em;
    height: $input-height;
    border: 1px solid $border-color;
    padding: 0 1em;
    display: inline-flex;
    align-items: center;
    border-radius: $border-radius;
  }
  .popover-wraper {
    position: absolute;
    top: 100%;
    left: 0;
    // height: 200px;
    background: #fff;
    @extend .box-shadow;
    margin-top: 8px;
  }
}
</style>
