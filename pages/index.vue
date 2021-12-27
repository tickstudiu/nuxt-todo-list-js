<template>
  <div>
    <h5>todo list</h5>
    <ul class="grid grid-cols-3 gap-4">
      <li v-for="todo in todoList" :key="todo.slug" class="border rounded">
        <main class="p-4">
          <h6 class="mb-2 text-xl">{{ todo.description }}</h6>
          <div class="flex justify-between items-start">
            <p class="text-sm">{{ todo.owner }}</p>
            <p class="text-sm">completed: {{ todo.completed }}</p>
          </div>
        </main>
        <div class="border-t"></div>
        <footer class="px-4 py-2 flex justify-between items-center">
          <a href="#"><small class="text-xs">link to >></small></a>
          <small class="text-xs">{{ todo.date.createdAt }}</small>
        </footer>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'IndexPage',

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
