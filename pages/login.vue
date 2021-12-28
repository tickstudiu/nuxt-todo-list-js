<template>
  <div>
    <h5>login</h5>
    <BaseInput v-model="from.email" label="label"/>
    <BaseInput v-model="from.password" label="label"/>
    <button @click="handleLogin">submit</button>
  </div>
</template>

<script>

export default {
  name: 'LoginPage',

  data() {
    return {
      from: {
        email: 'te',
        password: 'tes',
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
