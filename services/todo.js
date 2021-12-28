export default ($axios) => ({
  /**
   * @returns {ItemList}
   */
	index(token) {
		return $axios.$get(`/task`, {
      headers: {
        Authorization: 'Bearer ' + token
      }
    });
	},
});

