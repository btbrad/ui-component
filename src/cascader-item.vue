<template>
  <div class="cascader-item" :style="`height: ${height}`">
    <div class="left">
      <div v-for="(item, index) in source" :key="index" @click="leftSelected = item">
        <span class="label">{{ item && item.name }}</span>
        <Icon class="icon" v-if="item.children" name="right"></Icon> 
      </div>  
    </div>
    <div class="right" v-if="rightItems">
      <guru-cascader-item :source="rightItems" :height="height" />
    </div>
  </div>
</template>

<script>
import Icon from './icon'

export default {
  name: 'GuruCascaderItem',
  components: {
    Icon
  },
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
@import 'var';
.cascader-item {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  height: 100px;
  .left {
    height: 100%;
    padding: .3em 1em; 
    .label {
      padding: .5em 0.1em; 
    }
  }
  .right {
    border-left: 1px solid $border-color;
    height: 100%;
  }
  .icon {
    transform: scale(0.8) translateY(3px);
  }
}
</style>
