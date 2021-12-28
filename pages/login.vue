<template>
  <div>
    <section class="mb-2">
      <BaseInput v-model="form.email" label="email" type="email"/>
      <BaseInput v-model="form.password" label="pwd" type="password"/>
    </section>
    <BaseButton :disabled="isLoading" @click="handleLogin">
      <span v-if="!isLoading" class="text-white uppercase">submit</span>
      <span v-else class="text-gray-200 uppercase">loading</span>
    </BaseButton>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'LoginPage',

  middleware: 'loggedIn',

  data() {
    return {
      form: {
        email: 'muh.nurali43@gmail.com',
        password: '12345678',
        redirectPage: '/'
      }
    }
  },

  computed: {
    ...mapState('auth', {
      isLoading: 'isLoading',
    }),
  },

  methods: {
    async handleLogin() {
      await this.$store.dispatch('auth/login', this.form)
    }
  }
}
</script>
