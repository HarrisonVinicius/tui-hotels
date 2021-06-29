<template>
  <div
    ref="baseButton"
    class="base-button base"
    :class="{
      red: red,
      dark: !red && !link,
      link: link,
    }"
    @click="clickHandler"
  >
    <slot />
    <slot name="icon" />
  </div>
</template>

<script>
export default {
  name: 'BaseButton',

  props: {
    red: {
      type: Boolean,
      default: false,
    },

    Dark: {
      type: Boolean,
      default: true,
    },

    link: {
      type: Boolean,
      default: false,
    },
  },

  methods: {
    clickHandler() {
      this.$emit('click')
    },
  },
}
</script>

<style lang="sass" scoped>
.base-button
    display: flex
    justify-content: center
    align-items: center
    width: 100%
    height: 100%
    padding: 25px 10px
    border-radius: 3px
    color: #fff
    font-size: 20px
    font-weight: 500
    cursor: pointer

    &:hover
      opacity: 0.7

    &:focus
      border: 3px solid $light-blue


.red
  background-color: $base-red !important

.dark
  background-color: $base-blue

.link
  background-color: #ffffff
  padding: 0
  color: $dark-blue

  &:hover
    border-bottom: 2px solid $base-blue
</style>
