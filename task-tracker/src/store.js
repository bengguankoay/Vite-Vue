import { createStore } from 'vuex';

export default createStore({
  state: {
    tasks: []
  },
  mutations: {
    addTask(state, task) {
      console.log('addTask', task);
      state.tasks.push(task);
    },
    toggleTask(state, id) {
      console.log('toggleTask', id);
      const task = state.tasks.find((task) => task.id === id);
      if (task) {
        task.completed = !task.completed;
      }
    },
    deleteTask(state, id) {
      console.log('deleteTask', id);
      state.tasks = state.tasks.filter((task) => task.id !== id);
    }
  },
  actions: {
    addTask({ commit }, task) {
      commit('addTask', task);
    },
    toggleTask({ commit }, id) {
      commit('toggleTask', id);
    },
    deleteTask({ commit }, id) {
      commit('deleteTask', id);
    }
  },
  getters: {
    tasks: (state) => state.tasks
  }
});
