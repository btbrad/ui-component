<template>
  <div class="collapse-item">
    <div class="title" @click="handleClick">
      {{ title }}
    </div>
    <div class="content" v-if="visible">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GuruCollapseItem',
  inject: ['eventBus'],
  props: {
    title: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      visible: false,
      // type: 'single'
    }
  },
  methods: {
    handleClick() {
      if (this.visible) {
        if (this.type === 'single') {
          this.eventBus.$emit('change-select', {
            type: 'single',
            selected: ''
          })
        }
      } else {
        if (this.type === 'single') {
          this.eventBus.$emit('change-select', {
            type: 'single',
            selected: this.name
          })
        }
      }
    }
  },
  mounted() {
    this.eventBus.$on('change-select', ({ type, selected }) => {
      this.type = type
      if (type === 'single') {
        this.visible = this.name === selected
      }
    })
  }
}
</script>

<style scoped lang="scss">
  .collapse-item {
    width: 100%;
    border-top: 1px solid #ccc;
    &:first-of-type {
      border-top: none;
    }
    .title {
      height: 40px;
      display: flex;
      align-items: center;
      padding-left: 10px;
      &:first-of-type {
        border-top: none;
      }
      background: #fff;
      cursor: pointer;
    } 
    .content {
      min-height: 40px;
      display: flex;
      align-items: center;
      padding-left: 10px;
      &:first-of-type {
        border-top: none;
      }
      background: #eee;
    }
  }    
</style>
