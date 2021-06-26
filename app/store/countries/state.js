export default () => ({
  countrySelected: null,
  countryOptions: [
    {
      name: 'Portugal',
      id: 0,
      img: '@/static/images/logo.png',
      cities: [
        {
          name: 'Lisbon',
          intro:
            'Lisbon is, among other things, known for its amazing old city, the nice buildings with cute colourful tiles and amazing food.',
          code: 'LIS',
          id: 0,
          img: '/images/lisbon.png',
        },
        {
          name: 'Porto',
          intro:
            'Porto is a fascinating and vibrant city that has so much to offer you for your holiday or city break',
          code: 'OPO',
          id: 1,
          img: '/images/porto.jpg',
        },
        {
          name: 'Coimbra',
          intro:
            'On the banks of the river Mondego, Coimbra is famous for its University, the oldest in Portugal and one of the oldest in Europe. ',
          code: 'CBP',
          id: 2,
          img: '/images/coimbra.jpg',
        },
      ],
    },
    {
      name: 'Spain',
      id: 1,
      img: '@/static/images/logo.png',
      cities: [
        {
          name: 'Madrid',
          intro:
            'Bustling, energetic, vibrant... Madrid churns with energy as only a capital city could. From Puerta del Sol to Plaza de España, its not sheer multitude that makes the city stir.',
          code: 'MAD',
          id: 0,
          img: '/images/madrid.png',
        },
        {
          name: 'Barcelona',
          intro:
            'jaw-dropping architecture, mouth-watering tapas or that cool, Mediterranean atmosphere... well thats just the beginning',
          code: 'BLA',
          id: 1,
          img: '/images/barcelona2.jpg',
        },
        {
          name: 'Valencia',
          intro:
            'European centre for science and culture with the Hemispheric IMAX cinema and the Oceanographic aquarium, exhibitions and workshops ',
          code: 'VLN',
          id: 2,
          img: '/images/valencia.jpg',
        },
      ],
    },
    {
      name: 'Italy',
      id: 2,
      img: '@/static/images/logo.png',
      cities: [
        {
          name: 'Rome',
          intro:
            'With its breathtaking buildings and monuments, incredible works of art, small-town charm, leisurely pace of life and world-renowned cuisine, the Eternal City is worth a visit at least once',
          code: 'ROM',
          id: 0,
          img: '/images/rome.png',
        },
        {
          name: 'Milan',
          intro:
            'Milan is a city for all, and its elegant vibe and hidden corners make it one great city to explore. ',
          code: 'MIL',
          id: 1,
          img: '/images/milan.jpg',
        },
        {
          name: 'Venice',
          intro:
            'Venice is an ancient town built on a lagoon, a collection of domes and spires rising out of the Adriatic Sea like a dreamscape. It is also a city full of life.',
          code: 'VCE',
          id: 2,
          img: '/images/venice.jpg',
        },
      ],
    },
    {
      name: 'Brazil',
      id: 3,
      img: '@/static/images/logo.png',
      cities: [
        {
          name: 'Rio de Janeiro',
          intro:
            'Incredible Views. For wide, open viewpoints that offer views of lakes, tropical forests, golden coastlines, and a sprawling city... the marvelous city',
          code: 'RIO',
          id: 0,
          img: '/images/rio.jpg',
        },
        {
          name: 'São Paulo',
          intro:
            'Sao Paulo is Brazils pulsing and vibrant city to say at least. It is the most populous city in Brazil and South America and one of the largest cities in the world',
          code: 'SAO',
          id: 1,
          img: '/images/sp.jpg',
        },
        {
          name: 'Brasilia',
          intro:
            'Brasilia is a utopia city, a city where every angle, every street, every building, and even the number of people which should have been living in the city was carefully planned. ',
          code: 'BSB',
          id: 2,
          img: '/images/brasilia.jpg',
        },
      ],
    },
  ],
})
