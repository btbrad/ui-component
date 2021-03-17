<template>
  <div class="cascader">
    <div class="trigger" @click="popVisible = !popVisible">
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
  }
}
</script>

<style lang="scss" scoped>
@import 'var';

.cascader {
  position: relative;
  .trigger {
    width: 120px;
    height: 32px;
    border: 1px solid #000;
  }
  .popover-wraper {
    position: absolute;
    top: 100%;
    left: 0;
    // height: 200px;
    background: #fff;
    @extend .box-shadow
  }
}
</style>
