function basicActionFactory(action) {
  return ({ commit }, data) => {
    commit(action, data)
  }
}

export default {
  setSelectedCountry: basicActionFactory('SET_COUNTRY_SELECTED'),

  // SSR request
  // async nuxtServerInit({ commit }) {
  //   const res = await "get request to api"
  //   commit('SET_COUNTRIES', res)
  // },
}
