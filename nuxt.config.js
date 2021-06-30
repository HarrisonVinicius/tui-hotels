export default {
  ssr: true,

  srcDir: 'app',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'TUI - Travels',
    htmlAttrs: {
      lang: 'en-us',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Travel with us.',
      },
      { property: 'og:locale', content: 'en_US' },
      {
        property: 'og:url',
        // content: 'site url',
      },
      { property: 'og:title', content: 'TUI - travels' },
      { property: 'og:site_name', content: 'TUI travels' },
      {
        property: 'og:description',
        content: 'Travel with us.',
      },
      { property: 'og:type', content: 'website' },
      {
        property: 'og:image',
        // content:
        //   'img url',
      },
      { property: 'og:image:width', content: '1200' },
      { property: 'og:image:height', content: '630' },
      {
        property: 'og:image:alt',
        content: 'TUI - travels',
      },
      { name: 'twitter:title', content: 'TUI - travels' },
      {
        name: 'twitter:description',
        content: 'Travel with us.',
      },
      {
        name: 'twitter:image',
        // content:
        //   'URL image',
      },
      {
        name: 'twitter:image:alt',
        content: 'TUI - travels',
      },
      { name: 'twitter:card', content: 'summary_large_image' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/styles/variables/colors.sass',
    '@/assets/styles/fonts.sass',
    '@/assets/styles/global.sass',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/services/api',
    { src: '~/plugins/vue-scrollto', mode: 'client' },
    { src: '~/plugins/vue-money', mode: 'client' },
    { src: '~/plugins/vue-infinite-loading', mode: 'client' },
    { src: '~/plugins/vue-in-viewport-directive', mode: 'client' },
    { src: '~/plugins/vue-scroll-stop', mode: 'client' },
  ],

  env: {
    baseUrl: process.env.BASE_URL,
    Authorization: process.env.AUTHORIZATION,
  },

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://go.nuxtjs.dev/buefy
    'nuxt-buefy',
    '@nuxtjs/style-resources',
    // https://www.npmjs.com/package/vue-scrollto
    'vue-scrollto/nuxt',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL: process.env.BASE_URL,
    headers: {
      Authorization: `Bearer ${process.env.AUTHORIZATION}`,
    },
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en',
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  styleResources: {
    sass: ['./assets/styles/variables/*.sass'],
  },
}
