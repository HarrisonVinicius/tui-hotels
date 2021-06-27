<template>
  <div class="hotels-list">
    <article>
      <SearchSection v-model="inputValue" />
    </article>
    <div class="hotels-list__container">
      <article class="hotels-list__container__content">
        <aside class="hotels-list__container__content__city-info">
          <CityInfoSection
            :image="cityData.img"
            :city-name="cityData.name"
            :weather-data="cityData.weather"
            :city-resume="cityData.climate"
          />
        </aside>
        <div class="hotels-list__container__content__city-hotels">
          <TheHotelsList :hotels="list" :location="cityData.name" />
        </div>
      </article>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'HotelsList',

  data() {
    return {
      list: [],
      inputValue: null,
    }
  },

  computed: {
    ...mapState({
      cityData: (state) => state.city.citySelected,
      cityHotels: (state) => state.city.hotelsList,
    }),
  },

  created() {
    this.list = this.cityHotels
  },

  watch: {
    inputValue: {
      handler() {
        this.list = this.cityHotels
        this.filterHandler()
      },
    },
  },

  methods: {
    filterHandler() {
      let filteredArray = []
      let upperCaseSearchInput = ''
      upperCaseSearchInput = this.inputValue.toUpperCase()
      filteredArray = this.list.filter((item) =>
        upperCaseSearchInput
          .split(' ')
          .every((term) => item.hotelName.toUpperCase().includes(term))
      )
      this.list = filteredArray
    },
  },
}
</script>

<style lang="sass" scoped>
.hotels-list
  min-height: 100vh

  @media (max-width: 1024px)
    &__container
      padding: 2em 2em !important

  @media (max-width: 768px)
    &__container
      &__content
        flex-direction: column !important

        &__city-info
          width: 100% !important

        &__city-hotels
          width: 100% !important

  &__container
    padding: 5em 10em

    &__content
      display: flex

      &__city-info
        width: 40%

      &__city-hotels
        width: 60%
        border-left: 1px solid $base-gray
</style>
