<!--
 * @Author: btbrad
 * @Date: 2020-06-15 21:18:14
 * @LastEditors: btbrad
 * @LastEditTime: 2020-06-15 22:17:01
 * @Description: 
--> 
<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'GuruTabsPane',
  inject: ['eventBus'],
  created () {
    this.eventBus.$on('update:selected', (name) => {
      console.log(name)
    })
  }
}
</script>

<style scoped lang="scss">
</style>
