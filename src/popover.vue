<!--
 * @Author: btbrad
 * @Date: 2020-07-27 22:09:07
 * @LastEditors: btbrad
 * @LastEditTime: 2020-07-27 22:17:27
 * @Description: 
--> 
<template>
  <div class="popover">
    <slot name="content"></slot>
    <slot name="trigger"></slot>
  </div>
</template>

<script>
export default {
  name: 'GuruPopover'
}
</script>

<style scoped lang="scss">
.popover {
  display: inline-block;
  vertical-align: top;
}
</style>

