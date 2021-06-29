<template>
  <div class="hotel-flag">
    <div class="hotel-flag__icon-wrapper">
      <b-icon
        class="hotel-flag__icon-wrapper__icon"
        :icon="icon"
        size="is-small"
      >
      </b-icon>
    </div>
    <span> {{ label }} </span>
  </div>
</template>

<script>
export default {
  name: 'Hotel-flag',

  data() {
    return {
      icon: '',
    }
  },

  props: {
    label: {
      type: String,
      default: 'label',
    },
  },

  mounted() {
    if (this.label === 'Internet') this.icon = 'wifi'
    if (this.label === 'Park') this.icon = 'parking'
    if (this.label === 'Outer Pool' || this.label === 'Pool') this.icon = 'pool'
    if (this.label === 'gym') this.icon = 'dumbbell'
    if (this.label === 'Reception') this.icon = 'hours-24'
    if (this.label === 'Restaurant') this.icon = 'silverware-fork-knife'
    if (this.label === 'air') this.icon = 'air-conditioner'
    if (this.label === 'Allowed') this.icon = 'dog-service'
    if (this.label === 'bar') this.icon = 'glass-cocktail'
  },
}
</script>

<style lang="sass" scoped>
.hotel-flag
    display: flex
    align-items: center
    font-size: 20px
    font-weight: 400
    color: $dark-blue
    margin-right: 10px
    margin-bottom: 10px

    &__icon-wrapper
      height: 2em
      width: 2em
      display: flex
      justify-content: center
      align-items: center
      background-color: $lighter-blue
      border-radius: 50%
      margin-right: 10px
</style>
