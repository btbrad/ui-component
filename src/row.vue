<template>
  <div class="row" :style="rowStyle" :class="rowClass">
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
    },
    align: {
      tyhpe: String,
      validator: (value) => {
        return ['left', 'center', 'right'].includes(value)
      }
    }
  },
  data() {
    return {
      rowStyle: { 
        marginLeft: -this.gutter/2+'px', 
        marginRight: -this.gutter/2+'px'
      },
      rowClass: [this.align ? `align-${this.align}` : '']
    }
  }
}
</script>

<style scoped lang="scss">
  .row {
    display: flex;
    &.align-left {
      justify-content: flex-start;
    }
    &.align-right {
      justify-content: flex-end;
    }
    &.align-center {
      justify-content: center;
    }
  }
</style>