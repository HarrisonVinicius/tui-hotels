const setFactory = (key) => (state, data) => {
  state[key] = data
}

export default {
  SET_HOTELS: setFactory('hotels'),
}
