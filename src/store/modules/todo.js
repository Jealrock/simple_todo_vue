const state = {
  items: [
  ],
  current_id: 1
}

const mutations = {
  addTodoItem (state, { text }) {
    state.items.push({
      id: state.current_id++,
      text: text,
      completed: false
    })
  },

  setCompleteness (state, { id, completeness }) {
    const item = state.items.find(item => item.id === id)
    item.completed = completeness
  },

  removeTodoItem (state, { id }) {
    const index = state.items.findIndex(item => item.id === id)
    state.items.splice(index, 1)
  }
}

export default {
  namespaced: true,
  state,
  mutations
}
