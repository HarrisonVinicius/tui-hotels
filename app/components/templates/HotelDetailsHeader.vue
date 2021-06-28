<template>
  <div class="hotel-details-header">
    <div class="hotel-details-header__img">
      <img
        class="hotel-details-header__img__settings"
        :src="hotel.image"
        alt="hotel-cover"
      />
    </div>
    <div class="hotel-details-header__description">
      <h1>{{ hotel.hotelName }}</h1>
      <h2>{{ hotel.location }}</h2>
      <br />
      <h3>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum
        architecto perspiciatis tempore fugiat dolor, atque adipisci odit
        laudantium nostrum tenetur, repudiandae iste corporis. Laborum
        voluptatem adipisci explicabo beatae reprehenderit sapiente.
      </h3>
      <br />
      <div class="hotel-details-header__description__flags">
        <HotelFlags :flags="hotel.hotelFeatures" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'HotelDetailsHeader',

  data() {
    return {
      hotel: {},
    }
  },

  computed: {
    ...mapState({
      hotelData: (state) => state.city.hotelSelected,
    }),
  },

  mounted() {
    this.hotelData ? (this.hotel = { ...this.hotelData }) : (this.hotel = {})
  },
}
</script>

<style lang="sass" scoped>
.hotel-details-header
    width: 100%
    display: flex

    @media (max-width: 1100px)
      flex-direction: column

      &__img
        width: 100% !important

        &__settings
          height: 15em !important

      &__description
        width: 100% !important
        padding: 0 !important

    &__img
      width: 50%

      &__settings
        width: 100%
        height: 25em

    &__description
      width: 50%
      padding-left: 30px

      h1
        font-size: 35px
        font-weight: 600
        color: $dark-blue

      h2
        font-size: 16px
        font-weight: 400
        color: $dark-blue
</style>
