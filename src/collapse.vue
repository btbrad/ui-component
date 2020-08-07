<template>
  <div class="collapse">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'GuruCollapse',
  provide() {
    return {
      eventBus: this.eventBus
    }
  },
  props: {
    type: {
      type: String,
      default: 'single',
      validator: (val) => ['single', 'multiple'].indexOf(val) !== -1
    },
    selected: {
      type: [String, Array],
      default: ''
    }
  },
  data() {
    return {
      eventBus: this
    }
  },
  mounted() {
    let config = {
      type: this.type,
      selected: this.selected
    }
    this.eventBus.$emit('change-select', config)
  }
}
</script>

<style scoped lang="scss">
  .collapse {
    width: 100%;
    height: auto;
    border: 1px solid #ccc;
    border-radius: 5px;
    overflow: hidden;
  }
</style>