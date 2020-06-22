<!--
 * @Author: btbrad
 * @Date: 2020-06-15 21:16:33
 * @LastEditors: btbrad
 * @LastEditTime: 2020-06-16 22:00:06
 * @Description: 
--> 
<template>
  <div class="tabs-item"
       @click="switchTab" :class="classes">
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
  computed: {
    classes () {
      return {
        'active': this.active
      }
    }
  },
  data () {
    return {
      active: false
    }
  },
  created () {
    this.eventBus.$on('update:selected', (name) => {
      this.active = name === this.name
    })
  },
  methods: {
    switchTab () {
      this.eventBus.$emit('update:selected', this.name, this)
    }
  }
}
</script>

<style scoped lang="scss">
$blue: blue;
.tabs-item {
  // flex-grow: 1;
  cursor: pointer;
  flex-shrink: 0;
  padding: 0 1em;
  height: 100%;
  display: flex;
  align-items: center;
  &.active {
    color: $blue;
    font-weight: bold;
  }
}
</style>
