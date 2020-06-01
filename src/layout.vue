<!--
 * @Author: btbrad
 * @Date: 2020-06-01 22:14:00
 * @LastEditors: btbrad
 * @LastEditTime: 2020-06-01 22:46:14
 * @Description: 
--> 
<template>
  <div class="layout"
       :class="layoutClass">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'GuruLayout',
  data () {
    return {
      layoutClass: {
        hasSider: false
      }
    }
  },
  mounted () {
    this.$children.forEach(child => {
      if (child.$options.name === 'GuruSider') {
        this.layoutClass.hasSider = true
      }
    })
  }
}
</script>

<style scoped lang="scss">
.layout {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  border: 1px solid red;
  &.hasSider {
    flex-direction: row;
  }
}
</style>
