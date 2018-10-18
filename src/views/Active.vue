<template>
  <todo-list
    v-bind:todoList="todoList"
  ></todo-list>
</template>

<script>
import TodoList from '../components/TodoList.vue'
import { mapState } from 'vuex'

export default {

  components: {
    TodoList
  },

  computed: {
    ...mapState({
      todoList: state => state.todo.items.filter(item => !item.completed)
    })
  }

}
</script>
