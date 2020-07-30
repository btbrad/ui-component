<!--
 * @Author: btbrad
 * @Date: 2020-07-27 22:09:07
 * @LastEditors: btbrad
 * @LastEditTime: 2020-07-27 22:17:27
 * @Description: 
--> 
<template>
  <div class="popover" ref="popover">
    <div v-if="visible" ref="content" :class="['content', `position-${position}`]">
      <div ref="content-wrapper" class="content-wrapper">
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
      default: 'hover',
      validator: (val) => ['click', 'hover'].indexOf(val) !== -1 
    },
    position: {
      type: String,
      default: 'top',
      validator: val => ['top', 'right', 'left', 'bottom'].indexOf(val) !== -1
    }
  },
  data() {
    return {
      visible: false
    }
  },
  mounted() {
    // this.show()
    this.$nextTick(() => {
      this.bindEvent()
    })
  },
  methods: {
    show() {
      this.visible = true
      this.$nextTick(() => {
        this.placeContent()
      })
    },
    hide() {
      this.visible = false
    },
    bindEvent() {
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
          if (this.$refs.popover &&
            (this.$refs.popover === event.target || this.$refs.popover.contains(event.target))
          ) { return }
          if (this.$refs.content &&
            (this.$refs.content === event.target || this.$refs.content.contains(event.target))
          ) { return }
          this.hide()
        })
      }
    },
    placeContent() {
      document.body.appendChild(this.$refs.content)
      let {width, height, top, left} = this.$refs.trigger.getBoundingClientRect()
      let {height: contentHeight} = this.$refs.content.getBoundingClientRect()
      let positions = {
        top: {top: top + window.scrollY, left: left + window.scrollX + width / 2 },
        bottom: {top: top + height + window.scrollY, left: left + window.scrollX + width / 2},
        left: {
          top: top + window.scrollY + height / 2,
          left: left + window.scrollX
        },
        right: {
          top: top + window.scrollY + (height - contentHeight) / 2,
          left: left + window.scrollX + width
        },
      }
      this.$refs.content.style.left = positions[this.position].left + 'px'
      this.$refs.content.style.top = positions[this.position].top + 'px'
      let { width: width1, height: height1 } = this.$refs['content-wrapper'].getBoundingClientRect()
      this.$refs.content.style.width = width1 + 'px'
      this.$refs.content.style.height = height1 + 'px'

    }
  }
}
</script>

<style scoped lang="scss">
$border-color: #333;
$border-radius: 4px;
.popover {
  display: inline-block;
  vertical-align: top;
  position: relative;
}
.trigger {
  display: inline-block;
}
.content {
  position: absolute;
  bottom: 100%;
  min-width: 100px;
  // border: 1px solid #f40;
  padding-bottom: 10px;
  border-radius: $border-radius;
  filter: drop-shadow(0 1px 1px rgba(0, 0, 0, 0.5));
  max-width: 20em;
  word-break: break-all;
  height: auto;
  background: #fff;
  &.position-top {
      transform: translate(-50%, -100%);
      margin-top: -10px;
      &::before, &::after {
        left: 10px;
      }
      &::before {
        border-top-color: black;
        border-bottom: none;
        top: 100%;
      }
      &::after {
        border-top-color: white;
        border-bottom: none;
        top: calc(100% - 1px);
      }
    }
    &.position-bottom {
      margin-top: 10px;
      transform: translateX(-50%);
      &::before, &::after {
        left: 10px;
      }
      &::before {
        border-top: none;
        border-bottom-color: black;
        bottom: 100%;
      }
      &::after {
        border-top: none;
        border-bottom-color: white;
        bottom: calc(100% - 1px);
      }
      .arrow-down {
        top: 0;
        transform: translate(-50%, -100%) rotate(180deg) !important;
        &::after {
          top: 0;
          transform: translateX(-100%);
        }
      }
    }
    &.position-left {
      transform: translate(-100%, -50%);
      margin-left: -10px;
      &::before, &::after {
        transform: translateY(-50%);
        top: 50%;
      }
      &::before {
        border-left-color: black;
        border-right: none;
        left: 100%;
      }
      &::after {
        border-left-color: white;
        border-right: none;
        left: calc(100% - 1px);
      }
      .arrow-down {
        top: 50%;
        right: 0 !important;
        left: calc(100% - 24px) !important;
        transform: translate(100%, -50%) rotate(-90deg) !important;
        &::after {
          top: 0;
          right: 0;
          transform: translateX(-100%);
        }
      }
    }
    &.position-right {
      margin-left: 10px;
      &::before, &::after {
        transform: translateY(-50%);
        top: 50%;
      }
      &::before {
        border-right-color: black;
        border-left: none;
        right: 100%;
      }
      &::after {
        border-right-color: white;
        border-left: none;
        right: calc(100% - 1px);
      }
    }
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
</style>

