const setFactory = (key) => (state, data) => {
  state[key] = data
}

export default {
  SET_COUNTRY_SELECTED: setFactory('countrySelected'),
}
