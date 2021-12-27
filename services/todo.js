export default ($axios) => ({
  /**
   * @returns {ItemList}
   */
	index() {
		return $axios.$get(`/todos`);
	},
});

