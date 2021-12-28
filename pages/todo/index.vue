<template>
  <div>
    <h5 class="text-2xl mb-4">todo list</h5>
    <ul class="grid grid-cols-1 lg:grid-cols-3 gap-2 lg:gap-4">
      <li v-for="todo in todoList" :key="todo.slug" class="border rounded">
        <main class="p-4">
          <h6 class="mb-2 text-xl">{{ todo.description }}</h6>
          <div class="flex justify-between items-start">
            <p class="text-sm">completed: {{ todo.completed }}</p>
            <p class="text-sm">{{ todo.date.createdAt | dateDisplay }}</p>
          </div>
        </main>
        <div class="border-t"></div>
        <footer class="px-4 py-2">
          <a href="#"><small class="text-xs">view</small></a>
        </footer>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'TodoPage',

  middleware: 'notLoggedIn',

  async fetch({ store }) {
    await store.dispatch('todo/fetchTodoList')
  },

  computed: {
    ...mapState('todo', {
      todoList: 'list',
    }),
  },
}
</script>
