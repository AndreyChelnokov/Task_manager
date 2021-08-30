import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tasksList: JSON.parse(localStorage.getItem('stor')) || []
  },
  mutations: {
    addTask(state, data) {
      state.tasksList.push(data);
      localStorage.setItem('stor', JSON.stringify(state.tasksList))
    },
    removeTask(state, id) {
      state.tasksList.forEach( (item, i) => {
        if (item.id === id) {
          state.tasksList.splice(i, 1);
        }
      });
      localStorage.setItem('stor', JSON.stringify(state.tasksList))
    },
    completedTask(state, id) {
      state.tasksList.forEach(item => {
        if (item.id === id) {
          item.completed = true;
        }
      });
      localStorage.setItem('stor', JSON.stringify(state.tasksList))
    }
  },
  actions: {
  },
  modules: {
  }
})
