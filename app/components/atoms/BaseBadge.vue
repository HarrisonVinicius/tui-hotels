<template>
  <div class="base-badge">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'BaseBadge',
}
</script>

<style lang="sass" scoped>
.base-badge
    margin-right: 10px
    padding: 0 10px
    border: 1px solid $base-gray
    border-radius: 16px
    font-size: 12px
    font-weight: 500
    color: $dark-blue
    display: flex
    justify-content: center
    align-items: center
    text-transform: uppercase
    letter-spacing: 2px
</style>
