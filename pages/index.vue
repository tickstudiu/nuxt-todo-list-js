<template>
  <div>
    <h5>todo list</h5>
    <ul>
      <li v-for="todo in todoList" :key="todo.slug">
        {{ todo.name }}
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'IndexPage',

  async fetch({ store }) {
		await store.dispatch('todo/fetchTodoList');
	},

  computed: {
		...mapState('todo', {
      todoList: 'list',
    }),
  }
}
</script>
