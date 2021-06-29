<template>
  <div class="rooms-list">
    <h4>Choose your Room</h4>
    <br />
    <RoomsListItem
      v-for="(room, index) in rooms"
      :key="index"
      :title="room.type"
      :info="room.offers"
      :price="room.price"
    />
  </div>
</template>

<script>
export default {
  name: 'RoomsList',

  data() {
    return {
      rooms: [],
      roomsData: null,
    }
  },

  mounted() {
    const res = JSON.parse(sessionStorage.getItem('hotelSelected'))
    this.roomsData = res.roomsAvailable
    this.roomsData ? (this.rooms = { ...this.roomsData }) : (this.rooms = {})
  },
}
</script>

<style lang="sass" scoped>
.rooms-list
    h4
      font-size: 24px
      font-weight: 600
      color: $dark-blue
</style>
