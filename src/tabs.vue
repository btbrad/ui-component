<!--
 * @Author: btbrad
 * @Date: 2020-06-15 21:13:58
 * @LastEditors: btbrad
 * @LastEditTime: 2020-06-15 21:46:10
 * @Description: 
-->
<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
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
  created () {
    // this.$emit('update:selected', 'xxxxx')
  }
}
</script>

<style scoped lang="scss">
</style>
