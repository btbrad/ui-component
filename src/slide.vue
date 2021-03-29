<template>
  <div class="g-slide">
    <div class="g-slide-window">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'GSlide'
  }
</script>

<style lang="scss" scoped>
.g-slide {
  display: inline-block;
  box-sizing: border-box;
  display: flex;
  &-window {
    border: 5px solid green;
    display: flex;
  }
}
</style>