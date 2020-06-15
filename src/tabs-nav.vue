<!--
 * @Author: btbrad
 * @Date: 2020-06-15 21:15:00
 * @LastEditors: btbrad
 * @LastEditTime: 2020-06-15 21:48:59
 * @Description: 
--> 
<template>
  <div>
    <slot></slot>
    <slot name="actions"></slot>
  </div>
</template>

<script>
export default {
  name: 'GuruTabsNav'
}
</script>

<style scoped lang="scss">
</style>
