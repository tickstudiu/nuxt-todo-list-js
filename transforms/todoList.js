/**
 * @param {Array} TodoList
 * @returns {[Item]}
 */
 export const transformTodoList = (TodoList = []) => {
	return TodoList.todos.map(transformtItem);
};

/**
 * @param {Object} item
 * @returns {Item}
 */
 export const transformtItem = (item = {}) => {
	return {
		uid: item.uid,
		slug: item.slug,
		name: item.name,
		details: item.details,
	};
};
