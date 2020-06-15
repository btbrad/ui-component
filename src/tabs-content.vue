<!--
 * @Author: btbrad
 * @Date: 2020-06-15 21:17:24
 * @LastEditors: btbrad
 * @LastEditTime: 2020-06-15 22:19:12
 * @Description: 
--> 
<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'GuruTabsContent',
  inject: ['eventBus']
}
</script>

<style scoped lang="scss">
</style>
