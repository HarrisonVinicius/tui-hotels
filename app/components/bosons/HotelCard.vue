<template>
  <div class="hotel-card">
    <article>
      <header>
        <slot name="image" />
      </header>
      <div class="hotel-card__info">
        <slot name="info" />
      </div>
    </article>
  </div>
</template>

<script>
export default {
  name: 'HotelCard',
}
</script>

<style lang="sass" scoped>
.hotel-card
    height: 15em
    border: 1px solid $base-gray
    border-radius: 5px
    cursor: pointer
    margin-bottom: 20px

    article
        height: 100%
        display: flex

        header
            width: 35%
            height: 15em

    &__info
        width: 65%
        padding: 30px

    &:hover
      -webkit-box-shadow: 1px 2px 14px -2px #000000
      box-shadow: 1px 2px 14px -2px #000000
</style>
