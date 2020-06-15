<!--
 * @Author: btbrad
 * @Date: 2020-06-15 21:16:33
 * @LastEditors: btbrad
 * @LastEditTime: 2020-06-15 21:47:38
 * @Description: 
--> 
<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'GuruTabsItem',
  props: {
    disabled: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped lang="scss">
</style>
