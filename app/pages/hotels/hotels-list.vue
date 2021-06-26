<template>
  <div class="hotels-list">
    <article>
      <SearchSection />
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
          <span> city hotels </span>
        </div>
      </article>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'HotelsList',

  computed: {
    ...mapState({
      cityData: (state) => state.city.citySelected,
    }),
  },

  mounted() {
    console.log(this.cityData)
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
</style>
