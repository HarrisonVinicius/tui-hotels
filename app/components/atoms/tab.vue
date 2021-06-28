<template>
  <div class="tab" @click="clickHandler">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'Tab',

  methods: {
    clickHandler() {
      this.$emit('click')
    },
  },
}
</script>

<style lang="sass" scoped>
.tab
    padding: 15px
    display: flex
    justify-content: center
    align-items: center
    cursor: pointer
    font-size: 20px
    font-weight: 500
    color: $dark-blue

    &:hover
        color: $light-blue
</style>
