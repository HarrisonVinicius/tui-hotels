<template>
  <div class="city-card" @click="clickHandler">
    <article>
      <header>
        <div class="city-card__header-img">
          <img class="city-card__header-img__img" :src="cityImage" alt="city" />
        </div>
        <h1 class="city-card__header-title">Discover {{ cityName }}</h1>
      </header>
      <div class="city-card__body">
        <div class="city-card__body__title">
          <h2>{{ cityIntro }}</h2>
        </div>
      </div>
    </article>
  </div>
</template>

<script>
export default {
  name: 'CityCard',

  props: {
    cityName: {
      type: String,
      default: 'city name',
    },

    cityIntro: {
      type: String,
      default: 'city intro',
    },

    cityImage: {
      type: String,
      default: '',
    },

    cityCode: {
      type: String,
      default: '',
    },

    cityData: {
      type: Object,
      default: () => {},
    },
  },

  methods: {
    clickHandler() {
      this.$emit('click', this.createObj())
    },

    createObj() {
      const obj = {
        code: this.cityCode,
        cityData: this.cityData,
      }
      return obj
    },
  },
}
</script>

<style lang="sass" scoped>
.city-card
  width: 100%
  height: 100%
  border-radius: 5px
  border: 1px solid $base-gray
  padding: 20px
  cursor: pointer

  &__header-img
    height: 165px
    width: 100%
    background-color: red

    &__img
      height: 100%
      width: 100%

  h1
    color: $dark-blue
    font-size: 24px
    font-weight: 600

  h2
    color: $dark-blue
    font-size: 20px
    font-weight: 500

  &:hover
    opacity: 0.7
    -webkit-box-shadow: 1px 2px 14px -2px #000000
    box-shadow: 1px 2px 14px -2px #000000
</style>
