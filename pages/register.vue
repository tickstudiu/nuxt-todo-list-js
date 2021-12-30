<template>
  <div>
    <section class="mb-2">
      <BaseInput v-model="registerForm.name" label="name" type="text"/>
      <div v-if="!$v.registerForm.name.required" class="error">Field is required</div>
      <BaseInput v-model="registerForm.age" label="age" type="number"/>
      <div v-if="!$v.registerForm.age.required" class="error">Field is required</div>
      <BaseInput v-model="registerForm.email" label="email" type="email"/>
      <div v-if="!$v.registerForm.email.required" class="error">Field is required</div>
      <BaseInput v-model="registerForm.password" label="pwd" type="password"/>
      <div v-if="!$v.registerForm.password.required" class="error">Field is required</div>
    </section>
    <BaseButton :disabled="isLoading" @click="handleCreateUser">
      <span v-if="!isLoading" class="text-white uppercase">submit</span>
      <span v-else class="text-gray-200 uppercase">loading</span>
    </BaseButton>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import FormValidation from '~/mixins/FormValidation'

export default {
  name: 'RegisterPage',

  mixins: [FormValidation],

  middleware: 'loggedIn',

  computed: {
    ...mapState('auth', {
      isLoading: 'isLoading',
    }),
  },

  methods: {
    async handleCreateUser() {
      // validation register form
      this.$v.registerForm.$touch()

      if(!this.$v.registerForm.$error){
        await this.$store.dispatch('auth/register', this.registerForm)
      }
    }
  }
}
</script>
