const setFactory = (key) => (state, data) => {
  sessionStorage.setItem(key, JSON.stringify(data))
  state[key] = data
}

export default {
  SET_COUNTRY_SELECTED: setFactory('countrySelected'),
  SET_COUNTRIES: setFactory('countryOptions'),
}
