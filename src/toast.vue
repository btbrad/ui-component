<!--
 * @Author: btbrad
 * @Date: 2020-06-03 21:15:50
 * @LastEditors: btbrad
 * @LastEditTime: 2020-06-04 22:31:43
 * @Description: 
-->
<template>
  <div class="wrapper"
       :class="toastClasses">
    <div class="toast">
      <slot v-if="!enableHtml"></slot>
      <div v-else
           v-html="$slots.default[0]"></div>
      <span class="closeButton"
            v-if="closeButton"
            @click="handleClose">
        {{ closeButton.text }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GuruToast',
  props: {
    autoClose: {
      type: Boolean,
      default: true
    },
    duration: {
      type: [Number, String],
      default: 3000
    },
    closeButton: {
      type: Object,
      default: () => ({
        text: '关闭',
        callback: () => { }
      })
    },
    enableHtml: {
      type: Boolean,
      default: false
    },
    position: {
      type: String,
      default: 'top',
      validator (value) {
        return ['top', 'bottom', 'middle'].includes(value)
      }
    }
  },
  mounted () {
    if (this.autoClose) {
      setTimeout(() => {
        this.close()
      }, Number(this.duration));
    }
  },
  computed: {
    toastClasses () {
      return [`position-${this.position}`]
    }
  },
  methods: {
    close () {
      this.$el.remove()
      // document.body.removeChild(this.$el)
      this.$destroy()
      this.$emit('close')
    },
    handleClose () {
      this.close()
      this.closeButton.callback()
    }
  }
}
</script>

<style scoped lang="scss">
$font-size: 14px;
$toast-height: 40px;
$toast-bg: rgba(0, 0, 0, 0.75);
@keyframes fade-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@keyframes slide-up {
  0% {
    opacity: 0;
    transform: translateY(100%);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
@keyframes slide-down {
  0% {
    opacity: 0;
    transform: translateY(-100%);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
.wrapper {
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  &.position-top {
    top: 0;
    .toast {
      border-top-left-radius: 0;
      border-top-right-radius: 0;
      animation: slide-down 1s;
    }
  }
  &.position-bottom {
    bottom: 0 !important;
    .toast {
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
      animation: slide-up 1s;
    }
  }
  &.position-middle {
    top: 50%;
    left: 50%;
    animation: fade-in 1s;
    transform: translate(-50%, -50%);
  }
}
.toast {
  animation: slide-in 1s;
  height: $toast-height;
  // border: 1px solid red;
  font-size: $font-size;
  line-height: 1.8em;
  display: flex;
  align-items: center;
  box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.5);
  background-color: $toast-bg;
  color: #fff;
  padding: 0 16px;
  border-radius: 4px;
  .closeButton {
    display: inline-block;
    top: 0;
    right: 0;
    height: 100%;
    padding-left: 16px;
    border-left: 1px solid #fff;
    margin-left: 16px;
    line-height: 100%;
    display: flex;
    align-items: center;
    cursor: pointer;
  }
}
</style>
