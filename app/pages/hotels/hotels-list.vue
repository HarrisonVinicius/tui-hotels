<template>
  <client-only>
    <div class="hotels-list">
      <article>
        <SearchSection
          v-in-viewport.once
          class="hotels-list__search-section"
          v-model="inputValue"
        />
      </article>
      <div class="hotels-list__container">
        <div class="hotels-list__container__filters">
          <Filters @click="listSortHandler" />
        </div>
        <article class="hotels-list__container__content">
          <aside class="hotels-list__container__content__city-info">
            <CityInfoSection
              v-in-viewport.once
              class="transform"
              :image="cityInfo.img"
              :city-name="cityInfo.name"
              :weather-data="cityInfo.weather"
              :city-resume="cityInfo.climate"
            />
          </aside>
          <div class="hotels-list__container__content__city-hotels">
            <TheHotelsList :hotels="list" :location="cityInfo.name" />
          </div>
        </article>
      </div>
    </div>
  </client-only>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'HotelsList',

  scrollToTop: true,

  data() {
    return {
      list: [],
      inputValue: null,
      cityInfo: {
        img: '',
        name: '',
        weather: '',
        climate: '',
      },
      loading: false,
    }
  },

  computed: {
    ...mapState({
      cityData: (state) => state.city.citySelected,
      cityHotels: (state) => state.city.hotelsList,
    }),
  },

  mounted() {
    this.cityInfo = JSON.parse(sessionStorage.getItem('citySelected'))
    this.generateListHandler()
  },

  watch: {
    inputValue: {
      handler() {
        this.list = []
        this.generateListHandler()
        this.filterHandler()
      },
    },
  },

  methods: {
    generateListHandler() {
      this.cityHotels.forEach((element) => {
        this.list.push(element)
      })
    },

    // in a real situation this function would be called after a request for the api to return the hotels that were searched
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

    // the sort capacity can be easily improved
    listSortHandler() {
      this.list.reverse()
    },
  },
}
</script>

<style lang="sass" scoped>
.hotels-list
  min-height: 100vh

  @media (max-width: 1200px)
    &__container
      padding: 2em 2em !important

  @media (max-width: 970px)
    &__container
      &__filters
        position: inherit !important
        left: 0 !important

      &__content
        flex-direction: column !important

        &__city-info
          display: none

        &__city-hotels
          width: 100% !important
          border: 0 !important

  &__search-section
    opacity: 0
    transform: translateX(100%)
    transition: transform 1.2s , opacity 1.2s

    &.in-viewport
      opacity: 1
      transform: translateX(0)
      transition: transform 1.2s , opacity 1.2s

  &__container
    padding: 5em 10em

    &__filters
      position: relative
      left: 43.5%
      margin-bottom: 15px

    &__content
      display: flex

      &__city-info
        width: 40%

      &__city-hotels
        width: 60%
        border-left: 1px solid $base-gray

.transform
  opacity: 0
  transform: translateY(100%)
  transition: transform 1.2s , opacity 1.2s

  &.in-viewport
    opacity: 1
    transform: translateY(0)
    transition: transform 1.2s , opacity 1.2s
</style>
