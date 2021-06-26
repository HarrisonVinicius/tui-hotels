function basicActionFactory(action) {
  return ({ commit }, data) => {
    commit(action, data)
  }
}

export default {
  async getHotels({ commit }, payload) {
    const res = await this.$api.get(
      `/shopping/hotel-offers?cityCode=${payload}`
    )
    commit('SET_HOTELS', res.data.data)
  },
}
