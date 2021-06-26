<template>
  <section class="search-section">
    <div class="search-section__input">
      <BaseInput v-model="hotel" placeholder="Search by hotel...">
        <b-icon
          class="search-section__input__icon"
          icon="magnify"
          size="is-medium"
        >
        </b-icon>
      </BaseInput>
      <BaseButton class="search-section__input__button" red>
        Search
        <template #icon>
          <b-icon
            class="search-section__input__button__icon"
            icon="arrow-bottom-right"
            size="is-small"
          >
          </b-icon>
        </template>
      </BaseButton>
    </div>
  </section>
</template>

<script>
export default {
  name: 'SearchSection',

  data() {
    return {
      hotel: null,
    }
  },
}
</script>

<style lang="sass" scoped>
.search-section
  min-height: 15vh
  display: flex
  justify-content: center
  align-items: center
  background-color: $light-blue

  &__input
    width: 60%
    display: flex

    &__button
      width: 30% !important
      height: 6.5vh !important

      &__icon
        transform: rotate(-45deg)
        position: relative
        left: 10px

    &__icon
      position: relative
      left: 45px
      top: 12px
      color: $dark-blue
</style>
