import { transformUser } from '~/transforms/auth'


export default {
	state: () => ({
    isLoading: false,
    isLoggedIn: false,
    accessToken: null,
  }),

	mutations: {
    SET_LOADING(state, payload = false) {
      state.isLoading = payload
    },

    USER_LOGIN_SUCCESS(state, accessToken = null) {
      state.accessToken = accessToken
      state.isLoggedIn = true
    },

    USER_LOGIN_FAILED(state) {
      state.isLoggedIn = false
    },

    USER_LOGOUT_SUCCESS(state) {
      state.accessToken = null
      state.isLoggedIn = false
    },

    // Should always be the same with USER_LOGIN_SUCCESS
    REFRESH_TOKEN_SUCCESS(state, accessToken = null) {
      state.accessToken = accessToken
      state.isLoggedIn = true
    },
  },

	actions: {
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
        console.log(user)

        commit('SET_LOADING', false)
      } catch (error) {
        commit('USER_LOGIN_FAILED')
        commit('SET_LOADING', false)

        throw error
      }
    },
  },
};
