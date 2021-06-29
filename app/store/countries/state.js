export default () => ({
  countrySelected: null,
  // the state below is a simulation of a get request data return
  // to increase performance this endpoint would be called using nuxt server init
  // this state would be set through a mutation called by the nuxtServerInit action
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
          climate:
            'In Lisbon, summer is warm, dry and with an almost cloudless sky; winter is cold, with precipitation, strong winds and partially overcast skies',
          weather: '17°C / 62°F',
        },
        {
          name: 'Porto',
          intro:
            'Porto is a fascinating and vibrant city that has so much to offer you for your holiday or city break',
          code: 'OPO',
          id: 1,
          img: '/images/porto.jpg',
          climate:
            'In Porto, the summer is pleasant, dry and with an almost cloudless sky; winter is cold, with precipitation and partially overcast',
          weather: '15°C / 59°F',
        },
        {
          name: 'Coimbra',
          intro:
            'On the banks of the river Mondego, Coimbra is famous for its University, the oldest in Portugal and one of the oldest in Europe. ',
          code: 'CBP',
          id: 2,
          img: '/images/coimbra.jpg',
          climate:
            'In Coimbra, summer is warm, dry and with an almost cloudless sky; winter is cold, with precipitation and partially overcast.',
          weather: '18°C / 64°F',
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
          climate:
            'In Madrid, summer is short, hot, dry and with an almost cloudless sky; winter is very cold and partially overcast.',
          weather: '16°C / 60°F',
        },
        {
          name: 'Barcelona',
          intro:
            'jaw-dropping architecture, mouth-watering tapas or that cool, Mediterranean atmosphere... well thats just the beginning',
          code: 'BLA',
          id: 1,
          img: '/images/barcelona2.jpg',
          climate:
            'In Barcelona, ​​summer is short, warm, humid and with an almost cloudless sky; winter is long, cold and partially overcast',
          weather: '19°C / 66°F',
        },
        {
          name: 'Valencia',
          intro:
            'European centre for science and culture with the Hemispheric IMAX cinema and the Oceanographic aquarium, exhibitions and workshops ',
          code: 'VLN',
          id: 2,
          img: '/images/valencia.jpg',
          climate:
            'In Valencia, summer is warm, muggy and the skies are almost cloudless; the winter is long, cold, with strong winds and partially overcast',
          weather: '19°C / 66°F',
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
          climate:
            'In Rome, summer is short, hot, humid, dry and with an almost cloudless sky; winter is long, cold, with precipitation and partially overcast.',
          weather: '15°C / 59°F',
        },
        {
          name: 'Milan',
          intro:
            'Milan is a city for all, and its elegant vibe and hidden corners make it one great city to explore. ',
          code: 'MIL',
          id: 1,
          img: '/images/milan.jpg',
          climate:
            'In Milan, summer is hot and humid; winter is very cold. During the whole year, the weather is partially overcast.',
          weather: '14°C / 57°F',
        },
        {
          name: 'Venice',
          intro:
            'Venice is an ancient town built on a lagoon, a collection of domes and spires rising out of the Adriatic Sea like a dreamscape. It is also a city full of life.',
          code: 'VCE',
          id: 2,
          img: '/images/venice.jpg',
          climate:
            'In Venice, summer is warm and humid; winter is very cold. During the whole year, the weather is partially overcast.',
          weather: '14°C / 57°F',
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
          climate:
            'In Rio de Janeiro, summer is short, hot, oppressive, with precipitation and an almost overcast sky; the winter is long, pleasant, humid and with an almost cloudless sky',
          weather: '28°C / 82°F',
        },
        {
          name: 'São Paulo',
          intro:
            'Sao Paulo is Brazils pulsing and vibrant city to say at least. It is the most populous city in Brazil and South America and one of the largest cities in the world',
          code: 'SAO',
          id: 1,
          img: '/images/sp.jpg',
          climate:
            'In São Paulo, summer is warm, muggy, with precipitation and an almost overcast sky; winter is short, mild and partially overcast',
          weather: '25°C / 77°F',
        },
        {
          name: 'Brasilia',
          intro:
            'Brasilia is a utopia city, a city where every angle, every street, every building, and even the number of people which should have been living in the city was carefully planned. ',
          code: 'BSB',
          id: 2,
          img: '/images/brasilia.jpg',
          climate:
            'In Brasília, the rainy season is overcast; the dry season is almost cloudless. All year long, the weather is warm',
          weather: '27°C / 80°F',
        },
      ],
    },
  ],
})
