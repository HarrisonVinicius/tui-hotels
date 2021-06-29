<template>
  <section class="hotel-details">
    <div class="hotel-details__container">
      <article>
        <header>
          <HotelDetailsHeader v-in-viewport.once class="transform" />
        </header>
        <div class="hotel-details__container__tabs">
          <Tabs @click="scrollHandler" />
        </div>
        <div id="rooms-list" class="hotel-details__container__rooms">
          <RoomsList v-in-viewport.once class="transform" />
        </div>
        <div id="users-feedback" class="hotel-details__container__feedbacks">
          <UsersFeedbacks v-in-viewport.once class="transform" />
        </div>
      </article>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HotelDetails',

  scrollToTop: true,

  methods: {
    scrollHandler(payload) {
      let id = ''
      payload === 0 ? (id = '#rooms-list') : (id = '#users-feedback')
      this.$scrollTo(id, 500, {
        offset: -110,
      })
    },
  },
}
</script>

<style lang="sass" scoped>
.hotel-details
  @media (max-width: 1024px)
    &__container
      padding: 2em 2em !important

  &__container
    padding: 2em 10em

    &__rooms
      margin-top: 30px

    &__tabs
      margin-top: 30px
      display: flex
      justify-content: flex-start

    article
      width: 100%

.transform
  opacity: 0
  transform: translateY(100%)
  transition: transform 1.2s , opacity 1.2s

  &.in-viewport
    opacity: 1
    transform: translateY(0)
    transition: transform 1.2s , opacity 1.2s
</style>
