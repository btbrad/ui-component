<template>
  <div class="collapse-item">
    <div class="title">
      {{ title }}
    </div>
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GuruCollapseItem',
  props: {
    title: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped lang="scss">
  .collapse-item {
    width: 100%;
    border-top: 1px solid #ccc;
    .title {
      // border-bottom: 1px solid #ccc;
      height: 40px;
      display: flex;
      align-items: center;
      padding-left: 10px;
      &:first-of-type {
        border-top: none;
      }
      background: #fff;
    } 
    .content {
      min-height: 40px;
      display: flex;
      align-items: center;
      padding-left: 10px;
      &:first-of-type {
        border-top: none;
      }
      background: #eee;
    }
  }    
</style>
