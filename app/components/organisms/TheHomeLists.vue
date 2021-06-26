<template>
  <section class="search-form">
    <article>
      <div class="search-form__title">
        <h1>Travels</h1>
      </div>
      <div class="search-form__content">
        <div v-if="!showCitiesList">
          <h2 class="search-form__content__label">
            Choose your destination country
          </h2>
          <div class="search-form__content__cards">
            <CountryCard
              v-for="(country, index) in countryOptions"
              :key="index"
              :country-id="country.id"
              class="search-form__content__cards__card"
              @click="showCitiesHandler(country)"
            >
              {{ country.name }}
            </CountryCard>
          </div>
        </div>
        <div v-else class="search-form__content__cities">
          <CitiesList
            :country-name="countrySelected"
            :cities-list="citiesList"
            @return="showCitiesHandler"
          />
        </div>
      </div>
    </article>
  </section>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'SearchForm',

  data() {
    return {
      showCitiesList: false,
      citiesList: [],
      countrySelected: null,
      countryOptions: null,
    }
  },

  computed: {
    ...mapState({
      countriesOptions: (state) => state.countries.countryOptions,
    }),
  },

  mounted() {
    this.countryOptions = this.countriesOptions
  },

  methods: {
    showCitiesHandler(payload) {
      if (payload) {
        this.citiesList = payload.cities
        this.countrySelected = payload.name
      }
      this.showCitiesList = !this.showCitiesList
    },
  },
}
</script>

<style lang="sass" scoped>
.search-form
  @media (max-width: 1024px)
    &__content
      &__cards
        flex-direction: column

        &__card
          width: 100% !important
          margin-bottom: 15px

  &__title
    display: flex
    justify-content: center
    font-size: 26px
    font-weight: 400
    letter-spacing: 5px

    h1
      color: $base-blue

  &__content
    &__cities
      width: 100%

    &__cards
      display: flex
      justify-content: space-between
      margin-top: 15px

      &__card
        height: 20vh !important
        width: 23%
        cursor: pointer

        &:hover
          opacity: 0.7

    &__label
      color: $dark-blue !important
      font-size: 20px
      font-weight: 600

    &__error
      font-size: 18px
      font-weight: 500
      color: $base-red
      margin-top: 5px

    &__buttons
      display: flex
      justify-content: space-between
      margin-top: 25px
      height: 55px
</style>
