function basicActionFactory(action) {
  return ({ commit }, data) => {
    commit(action, data)
  }
}

export default {
  setSelectedCountry: basicActionFactory('SET_COUNTRY_SELECTED'),
}
