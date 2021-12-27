/**
 * @param {Object} item
 * @returns {DateItem}
 */
 export const transformtDate = (item = {}) => {
	return {
		createdAt: item.createdAt,
		updatedAt: item.updatedAt,
	};
};
