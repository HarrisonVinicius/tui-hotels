<template>
  <div class="hotel-flags">
    <HotelFlag
      v-for="(flag, index) in flags"
      :key="index"
      :label="flag.feature"
    />
  </div>
</template>

<script>
export default {
  name: 'HotelFlags',

  props: {
    flags: {
      type: Array,
      default: () => {},
    },
  },
}
</script>

<style lang="sass" scoped>
.hotel-flags
  width: 100%
  display: flex
  display: grid

  @media (max-width: 480px)
    margin: 0

  @media (min-width: 600px)
    grid-template-columns: repeat(2, 1fr)

  @media (min-width: 900px)
    grid-template-columns: repeat(4, 1fr)

  @media (min-width: 1300px)
    grid-template-columns: repeat(5, 1fr)
</style>
