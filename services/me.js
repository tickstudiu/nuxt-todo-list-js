export default ($axios) => ({
	profile: {
		index(token) {
      return $axios.$get(`/user/me`, {
        headers: {
          Authorization: 'Bearer ' + token
        }
      });
    }
	},
});

