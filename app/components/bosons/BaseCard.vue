<template>
  <div ref="card" class="base-card" @click="clickHandler">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'BaseCard',

  props: {
    countryId: {
      type: Number,
      default: '',
      required: false,
    },
  },

  mounted() {
    this.setCountryBackgroundHandler()
  },

  methods: {
    setCountryBackgroundHandler() {
      var element = this.$refs.card
      if (this.countryId === 0) element.classList.add('portugal-background')
      if (this.countryId === 1) element.classList.add('spain-background')
      if (this.countryId === 2) element.classList.add('italy-background')
      if (this.countryId === 3) element.classList.add('brazil-background')
    },

    clickHandler() {
      this.$emit('click')
    },
  },
}
</script>

<style lang="sass" scoped>
.base-card
  background-color: #fff
  height: 100%
  width: 100%
  border-radius: 5px
  border: 1px solid $mid-gray
  display: flex
  justify-content: center
  align-items: center
  background-position: center
  background-size: cover
  background-repeat: no-repeat
  font-size: 40px
  color: #fff
  font-weight: 600
  -webkit-box-shadow: 1px 2px 14px -2px #000000
  box-shadow: 1px 2px 14px -2px #000000

.portugal-background
  background-image: url('@/static/images/lisboa.png')

.spain-background
  background-image: url('@/static/images/barcelona.jpg')

.italy-background
  background-image: url('@/static/images/rome.png')

.brazil-background
  background-image: url('@/static/images/rio.png')
</style>
