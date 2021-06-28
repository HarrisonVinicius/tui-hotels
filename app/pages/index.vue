<template>
  <div class="general center">
    <div v-in-viewport.once class="general__content center">
      <div class="general__content__logo">
        <Logo />
      </div>
      <div class="general__content__form">
        <TheHomeLists
          v-on="$listeners"
          v-bind="$attrs"
          @request="eventHandler"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'Default',

  scrollToTop: true,

  methods: {
    ...mapActions({
      getUsersList: 'getUsersList',
      setSearchedUserName: 'setUserNameSearched',
    }),

    async eventHandler(payload) {
      const obj = {
        userName: payload.userName,
        page: 1,
      }
      await Promise.all([
        this.getUsersList(obj),
        this.setSearchedUserName(obj.userName),
      ])
      this.$router.push('/users/users-list')
    },
  },
}
</script>

<style lang="sass" scoped>
.general
  height: 100vh
  flex-direction: column

  @media (max-width: 1024px)
    &__content
      top: -35vh !important

  &__fade
    position: relative
    top: -7vh
    height: 50px
    width: 100%
    background: rgb(244,244,244)
    background: linear-gradient(0deg, rgba(244,244,244,1) 0%, rgba(255,255,255,1) 57%)

  &__footer
    position: fixed
    bottom: 0
    width: 100%
    height: 29vh

    img
      width: 100%
      height: 100%

  &__content
    margin: 0 !important
    width: 80%
    flex-direction: column
    position: relative
    top: -130px
    opacity: 0
    transform: translateY(100%) scale(0.5)
    transition: transform 1.8s , opacity 1.8s

    &.in-viewport
      opacity: 1
      transform: translateY(0) scale(1)
      transition: transform 1.8s , opacity 1.8s

    @media (max-width: 480px)
      justify-content: flex-start !important
      padding: 0

    &__logo
      height: 100px
      width: 200px

    &__form
      width: 100%
      height: 45px

.center
  display: flex
  justify-content: center
  align-items: center
</style>
