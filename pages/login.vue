<template>
  <div>
    <section class="mb-2">
      <BaseInput v-model="loginForm.email" label="email" type="email"/>
      <div v-if="!$v.loginForm.email.required" class="error">Field is required</div>
      <BaseInput v-model="loginForm.password" label="pwd" type="password"/>
      <div v-if="!$v.loginForm.password.required" class="error">Field is required</div>
    </section>
    <BaseButton :disabled="isLoading" @click="handleLogin">
      <span v-if="!isLoading" class="text-white uppercase">submit</span>
      <span v-else class="text-gray-200 uppercase">loading</span>
    </BaseButton>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import FormValidation from '~/mixins/FormValidation'

export default {
  name: 'LoginPage',

  mixins: [FormValidation],

  middleware: 'loggedIn',

  computed: {
    ...mapState('auth', {
      isLoading: 'isLoading',
    }),
  },

  methods: {
    async handleLogin() {
      // validation login form
      this.$v.loginForm.$touch()

      if(!this.$v.loginForm.$error){
        await this.$store.dispatch('auth/login', this.loginForm)
      }
    }
  }
}
</script>
