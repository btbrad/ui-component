<!--
 * @Author: btbrad
 * @Date: 2020-06-15 21:16:33
 * @LastEditors: btbrad
 * @LastEditTime: 2020-06-15 22:15:59
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
    disabled: {
      type: Boolean,
      default: false
    },
    name: {
      type: String | Number,
      required: true
    }
  },
  created () {
    this.eventBus.$on('update:selected', (name) => {
      console.log(name)
    })
  },
  methods: {
    xxx () {
      this.eventBus.$emit('update:selected', this.name)
    }
  }
}
</script>

<style scoped lang="scss">
</style>
