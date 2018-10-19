<template>
  <v-app>
    <v-container>
      <v-layout row wrap>
        <v-flex xs12 md6 offset-md3>
          <todo-list-new-input></todo-list-new-input>
        </v-flex>

        <v-flex xs12 md6 offset-md3>

          <v-card>
            <v-toolbar color="indigo" dark>
              <v-toolbar-title>Todo Items</v-toolbar-title>
            </v-toolbar>

            <v-tabs
              color="indigo"
              slider-color="white"
              dark
              grow
            >
              <v-tab to="/" > All </v-tab>
              <v-tab to="/active" > Active </v-tab>
              <v-tab to="/done" > Done </v-tab>
            </v-tabs>
            <router-view></router-view>
          </v-card>

        </v-flex>
      </v-layout>
    </v-container>
  </v-app>
</template>

<script>
import TodoListNewInput from './components/TodoListNewInput.vue'

export default {
  components: {
    TodoListNewInput
  }
}

</script>
