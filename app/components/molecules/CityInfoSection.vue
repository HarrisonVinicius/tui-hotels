<template>
  <section class="city-info">
    <div class="city-info__image">
      <img class="city-info__image__settings" :src="image" alt="city" />
    </div>
    <div class="city-info__resume">
      <h1>{{ cityName }}</h1>
      <h2>{{ weatherData }}</h2>
      <br />
      <h4>
        {{ cityResume }}
      </h4>
    </div>
  </section>
</template>

<script>
export default {
  name: 'CityInfoSection',

  props: {
    image: {
      type: String,
      default: '',
    },

    cityName: {
      type: String,
      default: '',
    },

    weatherData: {
      type: String,
      default: '',
    },

    cityResume: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="sass" scoped>
.city-info
  display: flex
  flex-direction: column

  @media (max-width: 768px)
    &__resume
      width: 100% !important

    &__image
      width: 100% !important

  &__resume
    position: relative
    margin-top: 15px
    width: 80%

    h1
      font-size: 28px
      font-weight: 600
      color: $dark-blue

    h2
      font-size: 26px
      font-weight: 600
      color: $dark-blue

    h4
      font-size: 22px
      font-weight: 500
      color: $dark-blue

  &__image
    height: 12em
    width: 80%
    background-color: red
    position: relative
    z-index: 0

    &__settings
      height: 100%
      width: 100%
</style>
