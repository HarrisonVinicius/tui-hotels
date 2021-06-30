export default () => ({
  hotelSelected: null,
  hotels: null,
  // Below is a simulation of how an endpoint's data would come to list the hotels in the chosen city
  // this state would be set through a mutation that would be called by an action where a get request would be made. just like "hotels" above
  // for this Demo all the cities will have the same list of hotels
  hotelsList: [
    {
      hotelName: 'Belmond Grand Hotel',
      hotelStatus: 5,
      hotelType: 'resort',
      price: 'U$ 2.500,00',
      image: '/images/belmond-sm.jpg',
      intro:
        'Celebrating local tradition, community and cuisine across the globe, Belmond creates luxury experiences that are as authentic as they are unique.',
      location: '21st Street, 2nd District',
      hotelFeatures: [
        { feature: 'Internet' },
        { feature: 'Park' },
        { feature: 'Pool' },
        { feature: 'gym' },
        { feature: 'Reception' },
        { feature: 'Restaurant' },
      ],
      roomsAvailable: [
        {
          type: 'Standart suit Junior',
          price: 'U$ 2.500,00',
          offers: 'All inclusive',
        },
        {
          type: 'Premium suit Junior',
          price: 'U$ 2.750,00',
          offers: 'All inclusive',
        },
        { type: 'Deluxe suit', price: 'U$ 3.200,00', offers: 'All inclusive' },
      ],
      feedbacks: [],
    },
    {
      hotelName: 'Four Seasons',
      hotelStatus: 5,
      hotelType: 'hotel',
      price: 'U$ 2.000,00',
      image: '/images/fourseasons-sm.jpg',
      intro:
        'At Four Seasons, we believe in recognizing a familiar face, welcoming a new one and treating everyone we meet the way we would want to be treated ourselves. Whether you work with us, stay with us, live with us or discover with us, we believe our purpose is to create impressions that will stay with you for a lifetime.',
      location: '4st Street, 4nd District',
      hotelFeatures: [
        { feature: 'Internet' },
        { feature: 'Pool' },
        { feature: 'gym' },
        { feature: 'Restaurant' },
        { feature: 'air' },
        { feature: 'Allowed' },
      ],
      roomsAvailable: [
        {
          type: 'Standart suit master',
          price: 'U$ 2.000,00',
          offers: 'All inclusive',
        },
        {
          type: 'Double suit master',
          price: 'U$ 2.200,00',
          offers: 'All inclusive',
        },
        { type: 'Premium suit', price: 'U$ 2.500,00', offers: 'All inclusive' },
      ],
      feedbacks: [],
    },
    {
      hotelName: 'Fairmont Hotel & Resort',
      hotelStatus: 5,
      hotelType: 'Resort',
      price: 'U$ 1.800,00',
      image: '/images/fairmont-sm.jpg',
      intro:
        'The distinctive collection of unrivaled hotels under the Fairmont banner reflects our belief in providing world-class service to guests who appreciate unique locations.',
      location: '8st Street, 5nd District',
      hotelFeatures: [
        { feature: 'Internet' },
        { feature: 'Park' },
        { feature: 'Pool' },
        { feature: 'Reception' },
        { feature: 'Restaurant' },
        { feature: 'Allowed' },
      ],
      roomsAvailable: [
        {
          type: 'Standart double bed',
          price: 'U$ 1.800,00',
          offers: 'All inclusive',
        },
        {
          type: 'Standart suit',
          price: 'U$ 1.950,00',
          offers: 'All inclusive',
        },
        { type: 'Suit Master', price: 'U$ 2.200,00', offers: 'All inclusive' },
      ],
      feedbacks: [],
    },
    {
      hotelName: 'Mandarin Hotel',
      hotelStatus: 4,
      hotelType: 'hotel',
      price: 'U$ 850,00',
      image: '/images/mandarin-sm.jpg',
      intro:
        'We invite you to discover the unique cultures of two award-winning luxury hotel groups, Mandarin Oriental and Oberoi Hotels & Resorts through, THE O&MO ALLIANCE. ',
      location: '9st Street, 7nd District',
      hotelFeatures: [
        { feature: 'Internet' },
        { feature: 'Pool' },
        { feature: 'Restaurant' },
        { feature: 'bar' },
        { feature: 'air' },
        { feature: 'Allowed' },
      ],
      roomsAvailable: [
        {
          type: 'Single room',
          price: 'U$ 850,00',
          offers: 'breakfast inclusive',
        },
        { type: 'Standart suit', price: 'U$ 900,00', offers: 'All inclusive' },
        { type: 'Master suit', price: 'U$ 1.500,00', offers: 'All inclusive' },
      ],
      feedbacks: [],
    },
    {
      hotelName: 'Holiday inn Hotel',
      hotelStatus: 3,
      hotelType: 'hotel',
      price: 'U$ 150,00',
      image: '/images/holiday-sm.jpg',
      intro:
        'Allow us to open up your world with True Hospitality for Good. Our diverse set of global destinations exist to broaden your choices, invite you to save or splurge, and encourage you with welcoming experiences at every arrival.',
      location: '25st Street, 8nd District',
      hotelFeatures: [
        { feature: 'Internet' },
        { feature: 'Park' },
        { feature: 'Pool' },
        { feature: 'gym' },
        { feature: 'Reception' },
        { feature: 'Allowed' },
      ],
      roomsAvailable: [
        {
          type: 'Junior suit',
          price: 'U$ 150,00',
          offers: 'breakfast inclusive',
        },
        { type: 'Top suit', price: 'U$ 200,00', offers: 'breakfast inclusive' },
        {
          type: 'Junior double suit',
          price: 'U$ 350,00',
          offers: 'breakfast inclusive',
        },
      ],
      feedbacks: [],
    },
    {
      hotelName: 'Ibis Budget',
      hotelStatus: 2,
      hotelType: 'hotel',
      price: 'U$ 80,00',
      image: '/images/ibis-sm.jpg',
      intro:
        'Ibis is Europes leading budget hotel with more than 950 hotels in 55 countries; ibis offers its customers the highest level of service and ultimate comfort in its category at the best market prices.',
      location: '3st Street, 3nd District',
      hotelFeatures: [
        { feature: 'Internet' },
        { feature: 'Park' },
        { feature: 'Pool' },
        { feature: 'Restaurant' },
        { feature: 'air' },
        { feature: 'Allowed' },
      ],
      roomsAvailable: [
        {
          type: 'Standart suit front',
          price: 'U$ 80,00',
          offers: 'breakfast inclusive',
        },
        {
          type: 'Standart suit back',
          price: 'U$ 100,00',
          offers: 'breakfast inclusive',
        },
        {
          type: 'Standart suit middle',
          price: 'U$ 180,00',
          offers: 'breakfast inclusive',
        },
      ],
      feedbacks: [],
    },
  ],
  citySelected: null,
})
