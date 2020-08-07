<template>
  <div class="collapse">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'GuruCollapse'
}
</script>

<style scoped lang="scss">
  .collapse {
    width: 100%;
    height: auto;
    border: 1px solid #ccc;
    border-radius: 5px;
    overflow: hidden;
  }
</style>