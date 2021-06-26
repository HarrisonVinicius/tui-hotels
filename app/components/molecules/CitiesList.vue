<template>
  <div class="cities-list">
    <header>
      <div class="cities-list__header">
        <div class="cities-list__header__title">
          <h2 v-if="!isLoading">
            Which city are you going to in {{ countryName }}?
          </h2>
        </div>
        <div class="cities-list__header__link">
          <BaseButton v-if="!isLoading" link @click="clickHandler">
            Choose other country
          </BaseButton>
        </div>
      </div>
    </header>
    <div v-if="!isLoading" class="cities-list__body">
      <div
        v-for="(city, index) in citiesList"
        :key="index"
        class="cities-list__body__card"
      >
        <CityCard
          :city-name="city.name"
          :city-intro="city.intro"
          :city-image="city.img"
          :city-code="city.code"
          :city-data="city"
          @click="chooseCityHandler"
        />
      </div>
    </div>
    <div class="cities-list__loading" v-else>
      <Loading />
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'CitiesList',

  data() {
    return {
      isLoading: false,
    }
  },

  props: {
    countryName: {
      type: String,
      default: 'country selected',
    },

    citiesList: {
      type: Array,
      default: () => [],
    },
  },

  methods: {
    ...mapActions({
      getHotels: 'city/getHotels',
      setSelectedCity: 'city/setSelectedCity',
    }),

    clickHandler() {
      this.$emit('return')
    },

    async chooseCityHandler(payload) {
      this.isLoading = true
      try {
        await Promise.all([
          // this.getHotels(payload.code),
          this.setSelectedCity(payload.cityData),
        ])
        this.$router.push('/hotels/hotels-list')
      } catch (error) {
        console.log(error)
      }
      this.isLoading = false
    },
  },
}
</script>

<style lang="sass" scoped>
.cities-list
  width: 100%

  @media (max-width: 1024px)
    &__header
      flex-direction: column
      margin-bottom: 100px !important

      &__link
        margin-top: 10px

    &__body
      flex-direction: column

      &__card
        width: 100% !important
        margin-bottom: 15px

  &__loading
    display: flex
    justify-content: center

  &__body
    width: 100%
    display: flex
    justify-content: space-between
    animation: slide .5s ease-out forwards

    &__card
      width: 30%
      min-height: 42vh

  &__header
    display: flex
    justify-content: space-between
    align-items: center
    max-height: 20px
    margin-bottom: 20px

    &__link
      font-size: 18px
      font-weight: 500
      color: $dark-blue
      cursor: pointer

    &__title

      h2
        font-weight: 600
        color: $dark-blue

@keyframes slide
  0%
    opacity: 0
    will-change: transform
    transform: translateY(100%)

  100%
    opacity: 1
    will-change: transform
    transform: translateY(0)
</style>
