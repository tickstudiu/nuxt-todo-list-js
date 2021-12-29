import { transformProfile } from '@/transforms/auth';

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
				const res = await this.$services.me.profile.index()
        const profile = transformProfile(res)

				commit('FETCH_PROFILE_SUCCESS', profile)
			} catch (error) {
				commit('FETCH_PROFILE_ERROR', error)
			}
		},
	},
};
