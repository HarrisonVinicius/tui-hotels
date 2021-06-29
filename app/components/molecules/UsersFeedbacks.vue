<template>
  <div class="users-feedbacks">
    <div class="users-feedbacks__title">
      <h4>Users ratings</h4>
    </div>
    <br />
    <div class="users-feedbacks__empty">
      <span> there are no feedbacks </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UsersFeedbacks',

  data() {
    return {
      feedbacksItems: [],
      hasFeedbacks: false,
      usersFeedbacks: null,
    }
  },

  mounted() {
    const res = JSON.parse(sessionStorage.getItem('hotelSelected'))
    this.usersFeedbacks = res.feedbacks
    this.usersFeedbacks.forEach((element) => {
      this.feedbacksItems.push(element)
    })
    this.feedbacksCheck()
  },

  methods: {
    feedbacksCheck() {
      this.feedbacksItems.length !== 0
        ? (this.hasFeedbacks = true)
        : (this.hasFeedbacks = false)
    },
  },
}
</script>

<style lang="sass" scoped>
.users-feedbacks
  margin-top: 30px

  &__empty
    background-color: $light-gray
    padding: 20px
    display: flex
    justify-content: center
    align-items: center

  &__title
    h4
      font-size: 24px
      font-weight: 600
      color: $dark-blue
</style>
