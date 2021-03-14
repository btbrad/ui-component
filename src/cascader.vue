<template>
  <div class="cascader">
    <div class="trigger">
      <slot></slot>
    </div>
    <div class="popover">
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
  }
}
</script>

<style lang="scss" scoped>

</style>
