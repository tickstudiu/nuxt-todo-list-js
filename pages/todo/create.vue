<template>
  <div>
    <section class="mb-2">
      <BaseInput v-model="createTodoForm.description" label="description" type="text"/>
      <div v-if="!$v.createTodoForm.description.required" class="error">Field is required</div>
    </section>
    <BaseButton :disabled="isLoading" @click="handleCreateTodo">
      <span v-if="!isLoading" class="text-white uppercase">submit</span>
      <span v-else class="text-gray-200 uppercase">loading</span>
    </BaseButton>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import FormValidation from '~/mixins/FormValidation'

export default {
  name: 'TodoCreatePage',

  mixins: [FormValidation],

  middleware: 'notLoggedIn',

  computed: {
    ...mapState('todo', {
      isLoading: 'isLoading',
    }),
  },

  methods: {
    async handleCreateTodo() {
       this.$v.createTodoForm.$touch()

      if(!this.$v.createTodoForm.$error){
        await this.$store.dispatch('todo/createTodo', this.createTodoForm)
      }
    }
  }
}
</script>
