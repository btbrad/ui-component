<template>
  <div class="collapse-item">
    <div class="title" @click="handleClick">
      {{ title }}
    </div>
    <div class="content" v-if="visible">
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
  },
  data() {
    return {
      visible: false
    }
  },
  methods: {
    handleClick() {
      this.visible = !this.visible
    }
  }
}
</script>

<style scoped lang="scss">
  .collapse-item {
    width: 100%;
    border-top: 1px solid #ccc;
    &:first-of-type {
      border-top: none;
    }
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
      cursor: pointer;
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
