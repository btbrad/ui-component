<template>
  <div class="cascader">
    <div class="trigger" @click="popVisible = !popVisible">
      <slot></slot>
    </div>
    <div class="popover" v-show="popVisible">
      <g-cascader-item :source="source" />
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
.cascader {
  .trigger {
    width: 120px;
    height: 32px;
    border: 1px solid #f40;
  }
  .popover {
    height: 200px;
    border: 1px solid #f40;
  }
}
</style>
