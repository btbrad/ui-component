<template>
  <div class="wrapper" :class="{error}">
    <input type="text" :value="value" :disabled="disabled" :readonly="readonly" 
      @change="$emit('change', $event.target.value)"
      @input="$emit('input', $event.target.value)"
      @focus="$emit('focus', $event.target.value)"
      @blur="$emit('blur', $event.target.value)"
    >
    <template v-if="error">
      <g-icon name="error" class="icon-error"></g-icon>
      <span class="error-message">{{error}}</span>
    </template>
  </div>
</template>

<script>
import Icon from './icon'
export default {
  name: 'GuruInput',
  components: {
    GIcon: Icon
  },
  props: {
    value: {
      type: String
    },
    disabled: {
      type: Boolean,
      default: false
    },
    readonly: {
      type: Boolean,
      default: false
    },
    error: {
      type: String
    }
  }
}
</script>

<style lang='scss' scoped>
  @import './var';
  .wrapper {
    font-size: $font-size;
    display: inline-flex;
    align-items: center;
    > :not(:last-child) {
      margin-right: 0.5em;
    }
    &.error {
      > input {
        border-color: $red;
      }
    }
    > input {
      height: $input-height;
      border: 1px solid $border-color;
      border-radius: $border-radius;
      padding: 0 8px;
      font-size: inherit;
      &:hover {
        border-color: $border-color-hover;
      }
      &:focus {
        box-shadow:inset  0 1px 3px $box-shadow-color;
        outline: none;
      }
      &[disabled] {
        border-color: #ccc;
        color: #ccc;
        cursor: not-allowed;
      }
      &[readonly] {
        border-color: #ccc;
        color: #ccc;
        cursor: not-allowed;
      }
    }
  }
  .icon-error {
    fill: $red;
    vertical-align: middle;
  }
  .error-message {
    color: $red;
    vertical-align: middle;
  }
</style>