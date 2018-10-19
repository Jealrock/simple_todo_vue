<template>
  <todo-list
    v-bind:todoList="todoList"
  ></todo-list>
</template>

<script>
import TodoList from '../components/TodoList.vue'
import { mapGetters } from 'vuex'

export default {

  components: {
    TodoList
  },

  computed: {
    todoList () {
      return this.todosFiltered({ completed: false })
    },
    ...mapGetters({
      todosFiltered: 'todo/todosFiltered'
    })
  }

}
</script>
