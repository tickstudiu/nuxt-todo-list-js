import { transformTodoList } from '~/transforms/todoList'

export default {
	state: () => ({
    list: [],
  }),
	mutations: {
		FETCH_TODO_SUCCESS(state, newList) {
			state.list = newList;
		},
		FETCH_TODO_ERROR(state, error) {
			console.error('Error while fetch todo list: ', error);
		},
	},
	actions: {
		async fetchTodoList({ commit }) {
			try {
				const res = await this.$services.todo.index();
				commit('FETCH_TODO_SUCCESS', transformTodoList(res.data));
			} catch (error) {
				commit('FETCH_TODO_ERROR');
			}
		},
	},
};
