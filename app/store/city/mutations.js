const setFactory = (key) => (state, data) => {
  sessionStorage.setItem(key, JSON.stringify(data))
  state[key] = data
}

export default {
  SET_HOTELS: setFactory('hotels'),
  SET_CITY_SELECTED: setFactory('citySelected'),
  SET_HOTEL_SELECTED: setFactory('hotelSelected'),
}
