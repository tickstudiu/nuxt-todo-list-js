export default ($axios) => ({
	user: {
		login(email, password) {
      return $axios.$post(`/user/login`, {
        email,
        password
      });
    },

    logout(token) {
      return $axios.$post(`/user/logout`, null, {
        headers: {
          Authorization: 'Bearer ' + token
        }
      });
    }
	},
});

