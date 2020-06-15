<!--
 * @Author: btbrad
 * @Date: 2020-06-15 21:13:58
 * @LastEditors: btbrad
 * @LastEditTime: 2020-06-15 22:13:36
 * @Description: 
-->
<template>
  <div>
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
  created () {
    // this.$emit('update:selected', 'xxxxx')
  }
}
</script>

<style scoped lang="scss">
</style>
