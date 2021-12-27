export default ($axios) => ({
  /**
   * @returns {ItemList}
   */
	index() {
		// return $axios.$get(`/todo/path`);
    return {
      data: {
        todos: [
          {
            uid: '1',
            slug: 'todo-title',
            name: 'Todo Title',
            details: 'detail todo something like'
          },
        ],
      }
    }
	},
});

