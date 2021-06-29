<template>
  <div
    ref="filterItem"
    class="filter-item"
    :class="{ selected: isSelected }"
    @click="clickHandler"
  >
    <slot />
  </div>
</template>

<script>
export default {
  name: 'FilterItem',

  props: {
    isSelected: {
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
.filter-item
    margin-left: 15px
    cursor: pointer
    font-size: 16px

    &:hover
      color: $dark-blue
      border-bottom: 1px solid $dark-blue

    &.selected
      color: $dark-blue
      border-bottom: 1px solid $dark-blue
</style>
