<template>
  <section class="hotels-list">
    <HotelCard v-for="(hotel, index) in hotels" :key="index">
      <template #image>
        <img class="hotels-list__image" :src="hotel.image" alt="hotel-image" />
      </template>
      <template #info>
        <div class="hotels-list__title">
          <h1>{{ hotel.hotelName }}</h1>
        </div>
        <div class="hotels-list__stars">
          <StarsStatus :stars="hotel.hotelStatus" />
        </div>
        <div class="hotels-list__subtitle">
          <BaseBadge> {{ hotel.hotelType }} </BaseBadge>
          <h2>{{ location }}</h2>
        </div>
        <div class="hotels-list__footer">
          <span> {{ hotel.price }} / night </span>
          <BaseButton red class="hotels-list__footer__button">
            details
          </BaseButton>
        </div>
      </template>
    </HotelCard>
  </section>
</template>

<script>
export default {
  name: 'TheHotelsList',

  props: {
    hotels: {
      type: Array,
      default: () => [],
    },

    location: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="sass" scoped>
.hotels-list
  width: 100%
  padding: 0 0 0 6%

  &__footer
    border-top: 1px solid $base-gray
    padding: 15px 0
    display: flex
    align-items: center
    justify-content: space-between
    color: $dark-blue
    font-size: 18px

    &__button
        width: 5em
        height: 1em

  &__stars
    margin-bottom: 10px

  &__subtitle
    display: flex
    margin-bottom: 15px

    h2
      color: $dark-blue
      font-size: 18px

  &__title
    margin-bottom: 10px

    h1
      font-size: 24px
      font-weight: 600
      color: $dark-blue

  &__image
    width: 100%
    height: 100%
</style>
