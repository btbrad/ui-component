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
    <div class="line" ref="line"></div>
    <div class="actions-wrapper">
      <slot name="actions"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GuruTabsNav',
  inject: ['eventBus'],
  created() {
    this.eventBus.$on('update:selected', (name, vm) => {
      let {width, height, top, left} = vm.$el.getBoundingClientRect()
      console.log(width, height, top, left)
      this.$refs.line.style.width = width+'px'
      this.$refs.line.style.left = `${left}px`
    })
  }
}
</script>

<style scoped lang="scss">
$tab-height: 40px;
$blue: blue;
$border-color: #ddd;
.tabs-nav {
  display: flex;
  // min-height: $tab-height;
  height: $tab-height;
  justify-content: flex-start;
  // align-items: center;
  // border: 1px solid red;
  position: relative;
  border-bottom: 1px solid $border-color;
  > .line {
    position: absolute;
    bottom: 0;
    border-bottom: 2px solid $blue;
    // width: 100px;
    transition: all 1s;
  }
  > .actions-wrapper {
    margin-left: auto; //牛批
    display: flex;
    align-items: center;
  }
}
</style>
