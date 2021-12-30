export default ($axios) => ({
	index() {
		return $axios.$get(`/task`);
	},

  create(description) {
    return $axios.$post(`/task`, {
      description
    });
  },
});

