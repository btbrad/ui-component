<template>
  <div class="cascader">
    <div class="trigger" @click="popVisible = !popVisible">
      <slot></slot>
    </div>
    <div class="popover-wraper" v-show="popVisible">
      <g-cascader-item :source="source" class="popover" :height="popoverHeight"/>
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
    }
  },
  data() {
    return {
      popVisible: false
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
