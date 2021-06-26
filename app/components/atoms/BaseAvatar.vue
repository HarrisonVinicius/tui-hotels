<template>
  <div class="base-avatar">
    <img :src="imgPath" alt="avatar" class="base-avatar__image" />
  </div>
</template>

<script>
export default {
  name: 'BaseAvatar',

  props: {
    imgPath: {
      type: String,
      default: '/icons/avatar-icon.png',
    },
  },
}
</script>

<style lang="sass" scoped>
.base-avatar
  height: 100%
  width: 100%

  &__image
    height: 100%
    width: 100%
    border-radius: 55%
</style>
