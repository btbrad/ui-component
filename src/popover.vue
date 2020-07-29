<!--
 * @Author: btbrad
 * @Date: 2020-07-27 22:09:07
 * @LastEditors: btbrad
 * @LastEditTime: 2020-07-27 22:17:27
 * @Description: 
--> 
<template>
  <div class="popover" ref="popover">
    <div v-if="visible" ref="content" class="content">
      <div class="content-wrapper">
        <slot name="content"></slot>
        <div class="arrow-down"></div>
      </div>
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
  computed: {
    position() {
      return this.$refs.trigger.getBoundingClientRect()
    }
  },
  methods: {
    show() {
      this.visible = true
      // this.$nextTick(() => {
      //   let { x: left } = this.position
      //   console.log(this.position)
      //   this.$refs.content.style.left = left + 'px'
      // })
    },
    hide() {
      this.visible = false
    },
    bind() {
      if (this.trigger === 'hover') {
        this.$refs.trigger.addEventListener('mouseenter', (e) => {
          this.show()
          e.stopPropagation()
          if (this.visible) {
            this.$nextTick(() => {
              this.$refs.content.addEventListener('mouseenter', (e) => {
                this.show()
                e.stopPropagation()
              })
              this.$refs.content.addEventListener('mouseleave', (e) => {
                this.hide()
                e.stopPropagation()
              })
              // console.log(this.position)
            })
          }
        })
        this.$refs.trigger.addEventListener('mouseleave', () => {
          this.hide()
        })
        document.addEventListener('mouseover', (event) => {
          let dom = event.target
          event.stopPropagation()
          if (this.$refs.popover && this.$refs.popover.contains(dom)) {
            return
          }
          this.hide()
        })
      }
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
    bottom: 100%;
    min-width: 100px;
    // border: 1px solid #f40;
    padding-bottom: 10px;
    .content-wrapper {
      border: 1px solid #999;
      padding: 10px;
      position: relative;
      .arrow-down {
        display: block;
        position: absolute;
        border: 1px solid #999;
        width: 0;
        height: 0;
        bottom: -12px;
        left: 50%;
        transform: translateX(-50%);
        border-top: 10px solid #999;
        border-left: 10px solid transparent;
        border-right: 10px solid transparent;
        &::after {
          content: '';
          display: block;
          position: absolute;
          width: 0;
          height: 0;
          top: -11px;
          left: 50%;
          transform: translateX(-50%);
          border-top: 9px solid #fff;
          border-left: 9px solid transparent;
          border-right: 9px solid transparent;
        }
      }
    }
  }
}
</style>

