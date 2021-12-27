import { transformtDate } from '@/transforms/date'

/**
 * @param {Array} TodoList
 * @returns {[Item]}
 */
 export const transformTodoList = (TodoList = []) => {
	return TodoList.map(transformtItem);
};

/**
 * @param {Object} item
 * @returns {Item}
 */
 export const transformtItem = (item = {}) => {
	return {
		id: item._id,
		completed: item.completed,
		owner: item.owner,
		description: item.description,
    date: transformtDate(item),
	};
};
