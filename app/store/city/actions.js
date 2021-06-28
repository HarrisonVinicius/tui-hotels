function basicActionFactory(action) {
  return ({ commit }, data) => {
    commit(action, data)
  }
}

export default {
  setSelectedCity: basicActionFactory('SET_CITY_SELECTED'),
  setSelectedHotel: basicActionFactory('SET_HOTEL_SELECTED'),

  // This action is responsible for making the request to list the hotel offers in the chosen city. However, due to the degree of instability of the API for testing, this action will not be used in the final flow of this test application
  // In order to have access to the complete application flow, requests to the api https://developers.amadeus.com/self-service/category/hotel will not be called to not block the flow due to instabilities with endpoints
  async getHotels({ commit }, payload) {
    const res = await this.$api.get(
      `/shopping/hotel-offers?cityCode=${payload}`
    )
    commit('SET_HOTELS', res.data.data)
  },
}
