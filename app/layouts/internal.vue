<template>
  <div class="internal">
    <TheHeader class="internal__header"></TheHeader>
    <nuxt class="internal__content"></nuxt>
  </div>
</template>

<style lang="sass" scoped>
.internal
  overflow: hidden

  &__content
    padding-top: 120px
    margin: 0 !important

  &__header
    width: 100%
    background-color: #fff
    position: fixed
    z-index: 1
</style>
