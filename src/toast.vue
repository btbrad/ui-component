<!--
 * @Author: btbrad
 * @Date: 2020-06-03 21:15:50
 * @LastEditors: btbrad
 * @LastEditTime: 2020-06-03 22:47:07
 * @Description: 
-->
<template>
  <div class="toast">
    <slot></slot>
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
      this.$destory()
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
}
</style>
