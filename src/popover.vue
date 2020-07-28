<!--
 * @Author: btbrad
 * @Date: 2020-07-27 22:09:07
 * @LastEditors: btbrad
 * @LastEditTime: 2020-07-27 22:17:27
 * @Description: 
--> 
<template>
  <div class="popover">
    <div class="content">
      <slot v-if="visible" name="content"></slot>
    </div>
    <div class="trigger" ref="trigger">
      <slot name="trigger"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GuruPopover',
  props: {
    // 内容是否可见
    // visible: {
    //   type: Boolean,
    //   default: false
    // },
    // 触发方式
    trigger: {
      type: String,
      default: 'hover'
    }
  },
  data() {
    return {
      visible: false
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.bind()
    })
  },
  methods: {
    show() {
      this.visible = true
    },
    hide() {
      this.visible = false
    },
    bind() {
      this.trigger === 'hover' && this.$refs.trigger.addEventListener('mouseenter', () => {
        this.show()
      })
      this.trigger === 'hover' && this.$refs.trigger.addEventListener('mouseleave', () => {
        this.hide()
      })
    },
  }
}
</script>

<style scoped lang="scss">
.popover {
  display: inline-block;
  vertical-align: top;
  position: relative;
  .content {
    position: absolute;
    top: -100%;
    border: 1px solid #ccc;
  }
}
</style>

