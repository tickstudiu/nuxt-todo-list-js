import { transformUser } from '~/transforms/auth'
import AUTH_COOKIE_NAME from '@/enums/authCookieName';

const defaultCookieOptions = {
	path: '/',
	sameSite: 'lax',
	// secure: true, // TODO: Open this on production
};

export default {
	state: () => ({
    isLoading: false,
    isLoggedIn: false,
    token: null,
  }),

	mutations: {
    SET_LOADING(state, payload = false) {
      state.isLoading = payload
    },

    USER_LOGIN_SUCCESS(state, token = null) {
      state.token = token
      state.isLoggedIn = true
    },

    USER_LOGIN_FAILED(state) {
      state.isLoggedIn = false
    },

    USER_LOGOUT_SUCCESS(state) {
      state.token = null
      state.isLoggedIn = false
    },

    // Should always be the same with USER_LOGIN_SUCCESS
    REFRESH_TOKEN_SUCCESS(state, token = null) {
      state.token = token
      state.isLoggedIn = true
    },
  },

	actions: {
    _saveAuthStateToCookie({ state }) {
			if (state.token) {
				const cookieOptions = {
					...defaultCookieOptions,
					maxAge: 87600, // 1 day
				};
				this.$cookies.set(AUTH_COOKIE_NAME.IS_LOGGED_IN, state.isLoggedIn, cookieOptions);
				this.$cookies.set(AUTH_COOKIE_NAME.TOKEN, state.token, cookieOptions);
			}
		},

    /**
		 * @param {String} token
		 */
		_saveTokenToCookie(context, token) {
			this.$cookies.set(AUTH_COOKIE_NAME.TOKEN, token, {
				...defaultCookieOptions,
				maxAge: 31536000, // 1 year
			});
		},

    _removeAuthTokenFromCookie() {
			Object.values(AUTH_COOKIE_NAME).forEach((cookieName) => {
				this.$cookies.remove(cookieName);
			});
		},

    /**
     * Login with email / password
     */
     async login(
      { commit, dispatch },
      { email, password, redirectPage = '/' }
    ) {
      try {
        commit('SET_LOADING', true)

        // Login with email / password
        const res = await this.$services.auth.user.login(email, password)
        const user = transformUser(res)

        dispatch('_saveTokenToCookie', user.token);
				commit('USER_LOGIN_SUCCESS', user.token);

				// Exchange CRM's token with access_token
				dispatch('_saveAuthStateToCookie');

				// Force reload and bring user to specific page
				if (redirectPage) {
					window.location.href = redirectPage;
				} else {
					// Reload current page after logged in successfully
					window.location.reload();
				}

        commit('SET_LOADING', false)
      } catch (error) {
        commit('USER_LOGIN_FAILED')
        commit('SET_LOADING', false)

        throw error
      }
    },

    async loadTokensFromCookie({ commit, dispatch }) {
			const isLoggedIn = this.$cookies.get(AUTH_COOKIE_NAME.IS_LOGGED_IN);
			const token = this.$cookies.get(AUTH_COOKIE_NAME.TOKEN);

      if (isLoggedIn) {
        commit('USER_LOGIN_SUCCESS', token);
			  await dispatch('fetchUserData');
      }
		},

    // eslint-disable-next-line require-await
    async fetchUserData({ state, dispatch }) {
			return Promise.all([
				state.isLoggedIn
					? dispatch('me/fetchProfile', null, { root: true })
					: null,
			]);
		},

    async logout({ commit, dispatch }) {
			commit('SET_LOADING', true);
			try {
				await this.$services.auth.user.logout();

        await dispatch('_removeAuthTokenFromCookie');
				commit('USER_LOGOUT_SUCCESS');

				window.location.href = '/';
			}  catch (error) {
        commit('SET_LOADING', false)

        throw error
      }
		},
  },
};
