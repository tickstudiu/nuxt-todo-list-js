export default ($axios) => ({
	profile: {
		index() {
      return $axios.$get(`/user/me`);
    }
	},
});

