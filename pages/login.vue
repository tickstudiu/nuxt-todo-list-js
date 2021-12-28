<template>
  <div>
    <section class="mb-2">
      <BaseInput v-model="from.email" label="email" type="email"/>
      <BaseInput v-model="from.password" label="pwd" type="password"/>
    </section>
    <BaseButton @click="handleLogin">
      <span class="text-white uppercase">submit</span>
    </BaseButton>
  </div>
</template>

<script>

export default {
  name: 'LoginPage',

  data() {
    return {
      from: {
        email: '',
        password: '',
      }
    }
  },

  methods: {
    handleLogin() {
      console.log(this.from)
    }
  }
}
</script>
