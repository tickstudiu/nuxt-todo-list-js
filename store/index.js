import AUTH_COOKIE_NAME from '@/enums/authCookieName';

export default {
	actions: {
		async nuxtServerInit({ dispatch }, { app, redirect }) {
			try {
				// Check for accessToken store in cookie
				if (app.$cookies.get(AUTH_COOKIE_NAME.TOKEN)) {
					// If found, load token from cookie
					await dispatch('auth/loadTokensFromCookie');
				}
			} catch (err) {
				redirect('/');
			}
		},
	},
};
