<template>
  <div class="stars-status">
    <b-icon
      v-for="(star, index) in starsArray"
      :key="index"
      class="stars-status__star"
      icon="star"
      size="is-small"
    >
    </b-icon>
  </div>
</template>

<script>
export default {
  name: 'StarsStatus',

  data() {
    return {
      starsArray: [],
    }
  },

  props: {
    stars: {
      type: Number,
      default: 0,
    },
  },

  watch: {
    stars: {
      handler() {
        this.generateStars()
      },
    },
  },

  created() {
    this.generateStars()
  },

  methods: {
    generateStars() {
      this.starsArray = []
      for (let index = 0; index < this.stars; index++) {
        const element = { star: '1' }
        this.starsArray.push(element)
      }
    },
  },
}
</script>

<style lang="sass" scoped>
.stars-status
    &__star
        color: $dark-blue
</style>
