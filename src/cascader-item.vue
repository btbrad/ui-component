<template>
  <div>
    <p v-for="(item, index) in source" :key="index" style="padding-left: 20px;border: 1px solid #f40;">
      <span>{{ item && item.name }}</span>
      <guru-cascader-item v-if="item.children" :source="item.children" />
    </p>
  </div>
</template>

<script>
export default {
  name: 'GuruCascaderItem',
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