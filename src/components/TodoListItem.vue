<template>
  <v-list-tile @click="toggle">
    <v-list-tile-action>
      <v-checkbox v-model="todoItem.completed"></v-checkbox>
    </v-list-tile-action>

    <v-list-tile-content>
      <v-list-tile-title>
        {{ todoItem.text }}
      </v-list-tile-title>
    </v-list-tile-content>

    <v-list-tile-action>
      <v-btn icon ripple @click.stop="remove">
        <v-icon color="grey lighten-1">delete</v-icon>
      </v-btn>
    </v-list-tile-action>
  </v-list-tile>
</template>

<script>
import { mapMutations } from 'vuex'

export default {

  props: {
    todoItem: {
      type: Object,
      required: true
    }
  },

  methods: {
    toggle () {
      this.setCompleteness({ id: this.todoItem.id,
        completeness: !this.todoItem.completed })
    },
    remove () {
      this.removeTodoItem({ id: this.todoItem.id })
    },
    ...mapMutations({
      setCompleteness: 'todo/setCompleteness',
      removeTodoItem: 'todo/removeTodoItem'
    })
  }
}
</script>
