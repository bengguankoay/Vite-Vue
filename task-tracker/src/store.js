import { createStore } from 'vuex';
import axios from 'axios';

export default createStore({
  state: {
    tasks: []
  },
  mutations: {
    setTasks(state, tasks) {
      state.tasks = tasks;
    },
    addTask(state, task) {
      state.tasks.push(task);
    },
    toggleTask(state, id) {
      console.log('toggleTask', id);
      const task = state.tasks.find((task) => task.id === id);
      if (task) {
        task.completed = !task.completed;
      }
    },
    updateTask(state, updatedTask) {
      const index = state.tasks.findIndex((task) => task.id === updatedTask.id);
      if (index !== -1) {
        state.tasks.splice(index, 1, updatedTask);
      }
    },
    deleteTask(state, id) {
      console.log('deleteTask', id);
      state.tasks = state.tasks.filter((task) => task.id !== id);
    }
  },
  actions: {
    async fetchTasks({ commit }) {
      const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
      commit('setTasks', response.data.slice(0, 10)); // Limit to 10 tasks for simplicity
    },
    async addTask({ commit }, task) {
      const response = await axios.post('https://jsonplaceholder.typicode.com/todos', task);
      commit('addTask', response.data);
    },
    async updateTask({ commit }, task) {
      const response = await axios.put(
        `https://jsonplaceholder.typicode.com/todos/${task.id}`,
        task
      );
      commit('updateTask', response.data);
    },
    async deleteTask({ commit }, id) {
      await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);
      commit('deleteTask', id);
    },
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
