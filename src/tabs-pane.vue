<!--
 * @Author: btbrad
 * @Date: 2020-06-15 21:18:14
 * @LastEditors: btbrad
 * @LastEditTime: 2020-06-16 22:08:55
 * @Description: 
--> 
<template>
  <div class="tabs-pane" :class="classes" v-if="active">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'GuruTabsPane',
  inject: ['eventBus'],
  props: {
    name: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      active: false
    }
  },
  computed: {
    classes () {
      return {
        'active': this.active
      }
    }
  },
  created () {
    this.eventBus.$on('update:selected', (name) => {
      // if (name === this.name) {
      //   console.log(`pane---我${name}被选中了`)
      // } else {
      //   console.log(`pane---我${this.name}没被选中了`)
      // }
      this.active = name === this.name
    })
  }
}
</script>

<style scoped lang="scss">
.tabs-pane {
  &.active {
    // background: red;
  }
}
</style>
