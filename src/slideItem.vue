<template>
  <transition name="slide">
    <div class="g-slide-item" v-if="visible" ref="item">
      <slot></slot>
    </div>
  </transition>
</template>

<script>
  export default {
    name: 'GSlideItem',
    props: {
      name: {
        type: String,
        required: true
      }
    },
    data() {
      return {
        active: null
      }
    },
    computed: {
      visible: {
        get () {
          return this.active === this.name
        },
        set (val) {
          console.log(val)
        }
      }
    },
    mounted () {
      console.log(this.name, this.visible)
    }
  }
</script>

<style lang="scss" scoped>
.slide-enter-active, .slide-leave-active {
  transition: all 1s;
}
.slide-leave-active {
  position: absolute; // item离开时，绝对定位，为了不占位置
}
.slide-enter {
  transform: translateX(100%);
}
.slide-leave-to {
  transform: translateX(-100%);
}
</style>