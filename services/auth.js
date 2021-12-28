export default ($axios) => ({
	user: {
		login(email, password) {
      return $axios.$post(`/user/login`, {
        email,
        password
      });
    }
	},
});

