<!--
 * @Author: btbrad
 * @Date: 2020-06-15 21:15:00
 * @LastEditors: btbrad
 * @LastEditTime: 2020-06-16 21:47:42
 * @Description: 
--> 
<template>
  <div class="tabs-nav">
    <slot></slot>
    <div class="actions-wrapper">
      <slot name="actions"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GuruTabsNav',
  inject: ['eventBus']
}
</script>

<style scoped lang="scss">
$tab-height: 40px;
.tabs-nav {
  display: flex;
  // min-height: $tab-height;
  height: $tab-height;
  justify-content: flex-start;
  align-items: center;
  border: 1px solid red;
  > .actions-wrapper {
    margin-left: auto; //牛批
  }
}
</style>
