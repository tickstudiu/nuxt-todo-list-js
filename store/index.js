import AUTH_COOKIE_NAME from '@/enums/authCookieName';

export default {
	actions: {
		async nuxtServerInit({ dispatch }, { app, redirect }) {
			try {
				// Check for accessToken store in cookie
				if (app.$cookies.get(AUTH_COOKIE_NAME.ACCESS_TOKEN)) {
					// If found, load token from cookie
					await dispatch('auth/loadTokensFromCookie');
				} else {
				  await dispatch('auth/login', {email: 'muh.nurali43@gmail.com', password: '12345678'});
        }
			} catch (err) {
				await dispatch('auth/login', {email: 'muh.nurali43@gmail.com', password: '12345678'});
				redirect('/');
			}
		},
	},
};
