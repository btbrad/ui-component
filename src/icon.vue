<template>
  <svg class="icon">
    <use :xlink:href="`#i-${name}`"></use>
  </svg>
</template>

<script>
import './svg.js'

export default {
  name: 'GuruIcon',
  props: {
    name: {
      type: String
    }
  }
};
</script>

<style lang="scss" scoped>
.icon {
  height: 1em;
  width: 1em;
}
</style>
