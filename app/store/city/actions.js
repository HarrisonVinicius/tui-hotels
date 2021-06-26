function basicActionFactory(action) {
  return ({ commit }, data) => {
    commit(action, data)
  }
}

export default {
  setSelectedCity: basicActionFactory('SET_CITY_SELECTED'),

  async getHotels({ commit }, payload) {
    const res = await this.$api.get(
      `/shopping/hotel-offers?cityCode=${payload}`
    )
    commit('SET_HOTELS', res.data.data)
  },
}
