import { required, maxLength } from 'vuelidate/lib/validators'

export default {
  data() {
    return {
      loginForm: {
        email: 'muh.nurali43@gmail.com',
        password: '12345678',
        redirectPage: '/'
      },

      registerForm: {
        name: 'Muhammad Nur Ali',
        email: 'muh.nurali43@gmail.com',
        password: '12345678',
        age: "20",
      },

      createTodoForm: {
        description: 'reading book',
      }
    }
  },

  validations() {
    return {
      loginForm: {
        email: {
          required,
        },
        password: {
          required,
        },
        redirectPage: {
          required,
        }
      },

      registerForm: {
        name: {
          required,
        },
        email: {
          required,
        },
        password: {
          required,
        },
        age: {
          required,
        },
      },

      createTodoForm: {
        description: {
          required,
          maxLength: maxLength(255),
        },
      }
    }
  },
}
