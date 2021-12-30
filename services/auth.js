export default ($axios) => ({
	user: {
    register(name, age, email, password) {
      return $axios.$post(`/user/register`, {
        name,
        age,
        email,
        password
      })
    },

		login(email, password) {
      return $axios.$post(`/user/login`, {
        email,
        password
      });
    },

    logout() {
      return $axios.$post(`/user/logout`);
    }
	},
});

