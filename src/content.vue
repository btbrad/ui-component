<!--
 * @Author: btbrad
 * @Date: 2020-06-01 22:14:29
 * @LastEditors: btbrad
 * @LastEditTime: 2020-06-01 22:37:45
 * @Description: 
--> 
<template>
  <div class="content">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'GuruContent'
}
</script>

<style scoped lang="scss">
.content {
  flex-grow: 1;
}
</style>