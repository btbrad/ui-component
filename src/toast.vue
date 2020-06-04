<!--
 * @Author: btbrad
 * @Date: 2020-06-03 21:15:50
 * @LastEditors: btbrad
 * @LastEditTime: 2020-06-04 20:44:49
 * @Description: 
-->
<template>
  <div class="toast">
    <slot></slot>
    <span class="closeButton"
          v-if="closeButton"
          @click="handleClose">
      {{ closeButton.text }}
    </span>
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
        callback: (toast) => {
          toast.close()
        }
      })
    }
  },
  mounted () {
    if (this.autoClose) {
      setTimeout(() => {
        this.close()
      }, Number(this.duration));
    }
  },
  methods: {
    close () {
      this.$el.remove()
      // document.body.removeChild(this.$el)
      this.$destroy()
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
.toast {
  height: $toast-height;
  // border: 1px solid red;
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
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
