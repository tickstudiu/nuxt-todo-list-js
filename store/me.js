import { transformProfile } from '@/transforms/auth';
import AUTH_COOKIE_NAME from '@/enums/authCookieName';

export default {
	state: () => ({
		/**
		 * @type {Profile}
		 */
		profile: {},
	}),

	mutations: {
		FETCH_PROFILE_SUCCESS(state, data) {
			state.profile = data
		},

		FETCH_PROFILE_ERROR(state, error) {
			console.error('Error while fetch profile: ', error)
		},
	},

	actions: {
		async fetchProfile({ commit }) {
			try {
        const token = this.$cookies.get(AUTH_COOKIE_NAME.TOKEN)
				const res = await this.$services.me.profile.index(token)
        const profile = transformProfile(res)

				commit('FETCH_PROFILE_SUCCESS', profile)
			} catch (error) {
				commit('FETCH_PROFILE_ERROR', error)
			}
		},
	},
};
