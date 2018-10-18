<template>
  <v-list>
    <template v-if="todoList.length">
      <todo-list-item
        v-for="item in todoList"
        :key="item.id"
        :todoItem="item"
      ></todo-list-item>
    </template>

    <v-list-tile v-else>
      <v-list-tile-content>
        <v-list-tile-title>
          There is no items yet :)
        </v-list-tile-title>
      </v-list-tile-content>
    </v-list-tile>
  </v-list>
</template>

<script>
import TodoListItem from './TodoListItem.vue'

export default {
  props: [ 'todoList' ],

  components: {
    TodoListItem
  }
}
</script>
