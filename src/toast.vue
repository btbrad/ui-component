<!--
 * @Author: btbrad
 * @Date: 2020-06-03 21:15:50
 * @LastEditors: btbrad
 * @LastEditTime: 2020-06-03 22:33:16
 * @Description: 
-->
<template>
  <div class="toast">
    <slot></slot>
  </div>
</template>

<script>
// import Vue from 'vue'

// Vue.prototype.$toast = function () {
//   alert('This is a toast !')
// }  侵入性太强

export default {
  name: 'GuruToast'
}
</script>

<style scoped lang="scss">
$font-size: 14px;
$toast-height: 40px;
$toast-bg: rgba(0, 0, 0, 0.75);
.toast {
  height: $toast-height;
  // border: 1px solid red;
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  font-size: $font-size;
  line-height: 1.8em;
  display: flex;
  align-items: center;
  box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.5);
  background-color: $toast-bg;
  color: #fff;
  padding: 0 16px;
  border-radius: 4px;
}
</style>
