import { transformtDate } from '@/transforms/date'

/**
 *
 * @param {Object} data
 * @returns
 */
export const transformUser = (data = {}) => {
	return {
		profile: transformProfile(data.user),
    token: data.token,
	};
};


/**
 *
 * @param {Object} user
 * @returns {Profile}
 */
export const transformProfile = (user = {}) => {
	return {
		age: user.age,
    id: user._id,
    name: user.name,
    email: user.email,
    date: transformtDate(user),
	};
};
