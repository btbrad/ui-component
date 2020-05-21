<template>
  <div class="row" :style="rowStyle">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'GuruRow',
  provide() {
    return {
      gutter: this.gutter
    }
  },
  props: {
    gutter: {
      type: [Number, String]
    }
  },
  data() {
    return {
      rowStyle: { 
        marginLeft: -this.gutter/2+'px', 
        marginRight: -this.gutter/2+'px'
      }
    }
  }
}
</script>

<style scoped lang="scss">
  .row {
    display: flex;
  }
</style>