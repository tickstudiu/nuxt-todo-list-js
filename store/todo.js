import { transformTodoList } from '~/transforms/todoList'

export default {
	state: () => ({
    list: [],

    isLoading: false,
  }),
	mutations: {
		FETCH_TODO_SUCCESS(state, newList) {
			state.list = newList;
		},
		FETCH_TODO_ERROR(state, error) {
			console.error('Error while fetch todo list: ', error);
		},
    SET_LOADING(state, payload = false) {
      state.isLoading = payload
    },
    CREATE_TODO_ERROR(state, error) {
      console.error('Error while create todo: ', error);
		},
	},
	actions: {
		async fetchTodoList({ commit }) {
      commit('SET_LOADING', true);

			try {
				const res = await this.$services.todo.index();
				commit('FETCH_TODO_SUCCESS', transformTodoList(res.data));
        commit('SET_LOADING', false);
			} catch (error) {
				commit('FETCH_TODO_ERROR', error);
        commit('SET_LOADING', false);
			}
		},

    async createTodo({ commit }, { description }) {
      commit('SET_LOADING', true);

      try {
        await this.$services.todo.create(description);
				commit('SET_LOADING', false);
      } catch(error) {
        commit('CREATE_TODO_ERROR', error);
        commit('SET_LOADING', false);
      }
    }
	},
};
