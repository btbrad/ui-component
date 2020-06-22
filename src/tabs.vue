<!--
 * @Author: btbrad
 * @Date: 2020-06-15 21:13:58
 * @LastEditors: btbrad
 * @LastEditTime: 2020-06-16 22:03:09
 * @Description: 
-->
<template>
  <div class="tabs">
    <slot></slot>
  </div>
</template>

<script>
import Vue from 'vue'

export default {
  name: 'GuruTabs',
  props: {
    selected: {
      type: String,
      required: true
    },
    direction: {
      type: String,
      default: 'horizontal',
      validator (value) {
        return ['horizontal', 'vertical'].indexOf(value) >= 0
      }
    }
  },
  data () {
    return {
      eventBus: new Vue()
    }
  },
  provide () {
    return {
      eventBus: this.eventBus
    }
  },
  mounted () {
    this.$children.forEach(vm => {
      if (vm.$options.name === 'GuruTabsNav') {
        vm.$children.forEach(item => {
          if (item.$options.name === 'GuruTabsItem' && item.name === this.selected) {
            this.eventBus.$emit('update:selected', this.selected, item)
          }
        })
      }
    })
  }
}
</script>

<style scoped lang="scss">
</style>
