<template>
  <div class="g-slide">
    <div class="g-slide-window" ref="window">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'GSlide',
    props: {
      active: {
        type: String,
        default: null
      },
    },
    data() {
      return {
        activeSlide: null
      }
    },
    mounted () {
      if (!this.active) {
        this.activeSlide = this.$children && this.$children[0] && this.$children[0].name
      } else {
        this.activeSlide = this.active
      }
      this.updateChildren(this.activeSlide)
    },
    methods: {
      updateChildren (active) {
        this.$children.forEach(child => {
          this.$nextTick(() => {
            child.active = active
          })
        })
      }
    },
    updated () {
      console.log('updated', this.active)
      this.updateChildren(this.active)
    }
  }
</script>

<style lang="scss" scoped>
.g-slide {
  display: inline-block;
  box-sizing: border-box;
  overflow: hidden;
  &-window {
    border: 5px solid green;
    display: flex;
    overflow: hidden;
  }
}
</style>
