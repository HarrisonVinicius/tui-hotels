<template>
  <div class="room-item">
    <div class="room-item__title">
      <span> {{ title }} </span>
    </div>
    <div class="room-item__info">
      <span> {{ info }}</span>
    </div>
    <div class="room-item__price">
      <span> {{ price }} / night </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RoomsListItem',

  props: {
    title: {
      type: String,
      default: 'title',
    },

    info: {
      type: String,
      default: 'info',
    },

    price: {
      type: String,
      default: 'price',
    },
  },
}
</script>

<style lang="sass" scoped>
.room-item
    padding: 20px
    border-bottom: 1px solid $base-gray
    display: flex
    justify-content: space-between
    background-color: $light-gray

    @media (max-width: 786px)
      flex-direction: column

      &__title
        width: 100% !important
        justify-content: center !important

      &__info
        width: 100% !important

      &__price
        width: 100% !important

    &__title
        width: 33%
        display: flex
        justify-content: flex-start
        font-size: 20px
        font-weight: 500
        color: $dark-blue

    &__info
        width: 33%
        display: flex
        justify-content: center
        font-size: 18px
        font-weight: 500
        color: $dark-blue

    &__price
        width: 33%
        display: flex
        justify-content: center
        font-size: 22px
        font-weight: 600
        color: $dark-blue
</style>
