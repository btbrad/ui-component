<template>
  <svg class="icon">
      <use :xlink:href="`#i-${name}`"></use>
  </svg>
</template>

<script>
export default {
  name: 'g-icon',
  props: {
    name: {
      type: String
    }
  }
}
</script>

<style lang="scss">
.icon {
    height: 1em;
    width: 1em;
}
</style>