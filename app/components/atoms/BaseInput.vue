<template>
  <div class="base-input">
    <slot class="base-input__icon" />
    <input v-model="value" type="text" :placeholder="placeholder" />
  </div>
</template>

<script>
export default {
  name: 'BaseInput',

  props: {
    placeholder: {
      type: String,
      required: false,
      default: 'Buscar...',
    },
  },

  data() {
    return {
      value: null,
    }
  },

  watch: {
    value: {
      handler() {
        this.$emit('input', this.value)
      },
    },
  },
}
</script>

<style lang="sass" scoped>
.base-input
  height: 100%
  width: 100%
  display: flex
  position: relative
  z-index: 0

  input
    border: 1px solid $mid-gray
    border-radius: 5px
    overflow: none
    width: 100%
    height: 100%
    padding: 15px 25px 15px 50px
    font-size: 20px
    outline: 0
    color: $dark-blue
    font-weight: 600

    &:hover
      border: 1px solid $base-blue

  \::placeholder
    color: $input-gray
    opacity: 1
    font-style: italic
    font-weight: 400

    /* Firefox

  \:-ms-input-placeholder
    /* Internet Explorer 10-11
    color: $input-gray
    font-style: italic
    font-weight: 400

  \::-ms-input-placeholder
    /* Microsoft Edge
    color: $input-gray
    font-style: italic
    font-weight: 400
</style>
