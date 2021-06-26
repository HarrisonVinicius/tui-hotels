<template>
  <div class="hotels">
    <div class="hotels__container">
      <nuxt-child></nuxt-child>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Hotels',

  layout: 'internal',
}
</script>

<style lang="sass" scoped>
.hotels
  min-height: 100vh
</style>
