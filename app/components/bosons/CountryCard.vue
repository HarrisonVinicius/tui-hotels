<template>
  <div class="country-card">
    <BaseCard v-on="$listeners" v-bind="$attrs">
      <slot />
    </BaseCard>
  </div>
</template>

<script>
export default {
  name: 'CountryCard',
}
</script>

<style lang="sass" scoped>
.country-card
    height: 100%
</style>
