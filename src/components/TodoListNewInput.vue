<template>
    <v-text-field
      autofocus autocomplete="off"
      v-model="text"
      :append-outer-icon="'add'"
      label="What you need to do today?"
      @click:append-outer="createItem"
      @keyup.enter="createItem"
    ></v-text-field>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  data: () => ({
    text: ''
  }),

  methods: {
    createItem () {
      this.addTodoItem({ text: this.text })
      this.text = ''
    },
    ...mapMutations({
      addTodoItem: 'todo/addTodoItem'
    })
  }
}
</script>
