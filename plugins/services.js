import qs from 'qs';

const requireService = require.context(
	// The relative path of the components folder
	'~/services',
	// Whether or not to look in subfolders
	false,
	// The regular expression used to match base component filenames
	/\.js$/,
);

/**
 * Automatically import everything in ~/services/*.js
 * and inject the httpClient to use in all of them
 * The filename of service will act as service name
 * E.g. given service file `~/services/categories.js`
 * The service will named `categories`
 *
 * @param {*} httpClient HTTP Client to use. E.g. Axios
 * @param {Object} [nuxtContext] Optional Nuxt's context, in case some service needed (https://nuxtjs.org/api/context/)
 * @returns {Object} Services object
 */
const createServices = (httpClient, nuxtContext) => requireService.keys().reduce((obj, currentFilename) => {
	const serviceName = currentFilename
		.split('/')
		.pop()
		.replace(/\.\w+$/, '');
	return {
		...obj,
		[serviceName]: requireService(currentFilename).default(httpClient, nuxtContext),
	};
}, {});

export default (context, inject) => {
	const { store, $axios } = context;
	// Add the things needed for every request by Axios
	$axios.onRequest((config) => {
		// Set default paramsSerializer
		// Default array params as comma style
		config.paramsSerializer = (params) => qs.stringify(params, { arrayFormat: 'comma' });

		// Add Authentication: Bearer <access_token> to every requests
    const authState = store.state.auth;
    if (authState.token) {
      config.headers.Authorization = `Bearer ${authState.token}`;
    }

		return config;
	});

	// Auto import services and inject to Nuxt
	// The filename of service will act as service name
	// E.g. given service file `~/services/categories.js`
	// The service can be use with `context.$services.categories.method()`
	inject('services', createServices($axios, context));
};
