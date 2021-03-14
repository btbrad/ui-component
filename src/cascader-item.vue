<template>
  <div class="cascader-item">
    <div v-for="(item, index) in source" :key="index">
      <p>{{ item && item.name }}</p>
      <guru-cascader-item v-if="item.children" :source="item.children" />
    </div>
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
.cascader-item {
  width: 120px;
}
</style>
