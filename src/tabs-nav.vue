<!--
 * @Author: btbrad
 * @Date: 2020-06-15 21:15:00
 * @LastEditors: btbrad
 * @LastEditTime: 2020-06-15 22:19:05
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
  name: 'GuruTabsNav',
  inject: ['eventBus']
}
</script>

<style scoped lang="scss">
</style>
