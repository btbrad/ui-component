<template>
  <div class="cascader-item" :style="`height: ${height}`">
    <div class="left">
      <div v-for="(item, index) in source" :key="index" @click="leftSelected = item">
        <p>{{ item && item.name }}</p>
      </div>  
    </div>
    <div class="right" v-if="rightItems">
      <guru-cascader-item :source="rightItems" :height="height" />
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
    },
    height: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      leftSelected: null
    }
  },
  computed: {
    rightItems () {
      if (this.leftSelected && this.leftSelected.children) {
        return this.leftSelected.children
      } else {
        return null
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.cascader-item {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  height: 100px;
  .left {
    height: 100%;
  }
  .right {
    height: 100%;
  }
}
</style>
