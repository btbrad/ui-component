<!--
 * @Author: btbrad
 * @Date: 2020-06-15 21:17:24
 * @LastEditors: btbrad
 * @LastEditTime: 2020-06-16 22:02:56
 * @Description: 
--> 
<template>
  <div class="tabs-content">
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
