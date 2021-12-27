require('dotenv').config();

const isProduction = (process.env.ENVIRONMENT === 'production');
const isPreProduction = (process.env.ENVIRONMENT === 'preproduction');

export default {

  /**
	 * Client-side env
	 */
	env: {
		ENVIRONMENT: process.env.ENVIRONMENT,
		APP_BASE_URL: process.env.APP_BASE_URL,
		API_BASE_URL: process.env.API_BASE_URL,
		API_PATH_PREFIX: process.env.API_PATH_PREFIX,
		IS_PRODUCTION: process.env.ENVIRONMENT === 'production',
		IS_PRE_PRODUCTION: process.env.ENVIRONMENT === 'preproduction',
	},

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: (isProduction || isPreProduction) ? `%s` : `(${process.env.ENVIRONMENT}) %s`,
    title: 'Todo List APP',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
		'~/plugins/services.js',
		'~/plugins/filters.js',
	],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
  ],

  /**
	 * Axios module configuration
	 * See https://axios.nuxtjs.org/options
	 */
	axios: {
		baseURL: process.env.API_BASE_URL,
	},

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en',
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
