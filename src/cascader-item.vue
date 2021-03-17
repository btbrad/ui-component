<template>
  <div class="cascader-item" :style="`height: ${height}`">
    <div class="left">
      <div v-for="(item, index) in source" :key="index" @click="handleSelected(item)">
        <span class="label">{{ item && item.name }}</span>
        <Icon class="icon" v-if="item.children" name="right"></Icon> 
      </div>  
    </div>
    <div class="right" v-if="rightItems">
      <guru-cascader-item :source="rightItems" :height="height" :selected="selected" :level="level + 1" @update:selected="onSelectedChange"/>
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
    },
    selected: {
      type: Array,
      default: () => []
    },
    level: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      
    }
  },
  computed: {
    rightItems () {
      const currentSelected = this.selected && this.selected[this.level]
      if (currentSelected && currentSelected.children) {
        return currentSelected.children
      } else {
        return null
      }
    }
  },
  methods: {
    handleSelected (item) {
      // this.$set(this.selected, this.level, item)
      const copy = JSON.parse(JSON.stringify(this.selected))
      copy[this.level] = item
      copy.splice(this.level + 1)
      this.$emit('update:selected', copy)
    },
    onSelectedChange (newSelected) {
      this.$emit('update:selected', newSelected)
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
    overflow: auto;
    .label {
      padding: .5em 0.1em;
      cursor: pointer; 
    }
  }
  .right {
    border-left: 1px solid #eee;
    height: 100%;
  }
  .icon {
    transform: scale(0.8) translateY(3px);
  }
}
</style>
