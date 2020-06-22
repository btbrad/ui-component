<!--
 * @Author: btbrad
 * @Date: 2020-06-15 21:16:33
 * @LastEditors: btbrad
 * @LastEditTime: 2020-06-16 22:00:06
 * @Description: 
--> 
<template>
  <div class="tabs-item"
       @click="xxx">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'GuruTabsItem',
  inject: ['eventBus'],
  props: {
    // active: {
    //   type: Boolean,
    //   default: false
    // },
    disabled: {
      type: Boolean,
      default: false
    },
    name: {
      type: String | Number,
      required: true
    }
  },
  data () {
    return {
      active: false
    }
  },
  created () {
    this.eventBus.$on('update:selected', (name) => {
      if (name === this.name) {
        console.log(`我${name}被选中了`)
      } else {
        console.log(`我${this.name}没被选中了`)
      }
    })
  },
  methods: {
    xxx () {
      // this.eventBus.$emit('update:selected', this.name)
    }
  }
}
</script>

<style scoped lang="scss">
.tabs-item {
  // flex-grow: 1;
  cursor: pointer;
  flex-shrink: 0;
  padding: 0 1em;
}
</style>
