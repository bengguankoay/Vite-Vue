import { createStore } from 'vuex';
import axios from 'axios';
import { login, logout, isAuthenticated, getToken } from './services/auth';

export default createStore({
  state: {
    tasks: [],
    products: [],
    user: null,
    isAuthenticated: isAuthenticated(),
    totalProducts: 50,
    productsPerPage: 5
  },
  mutations: {
    setProducts(state, products) {
      state.products = products;
    },
    setTasks(state, tasks) {
      state.tasks = tasks;
    },
    addTask(state, task) {
      state.tasks.push(task);
    },
    toggleTask(state, id) {
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
      state.tasks = state.tasks.filter((task) => task.id !== id);
    },
    // Add setUser and clearUser mutations
    setUser(state, user) {
      state.user = user;
      state.isAuthenticated = true;
    },
    clearUser(state) {
      state.user = null;
      state.isAuthenticated = false;
    },
    setTotalProducts(state, total) {
      state.totalProducts = total;
    }
  },
  actions: {
    async fetchProducts({ commit }, { page, limit }) {
      const response = await axios.get(
        `https://api.escuelajs.co/api/v1/products?offset=${page}&limit=${limit}`
      );
      console.log('response', response);
      commit('setProducts', response.data);
      //   commit('setTotalProducts', parseInt(response.headers['x-total-count'], 10));
    },
    async fetchProduct({ commit }, id) {
      const response = await axios.get(`https://api.escuelajs.co/api/v1/products/${id}`);
      return response.data;
    },
    // Add fetchTasks, addTask, updateTask, and deleteTask actions
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
    },
    // Add login and logout actions
    async login({ commit }, credentials) {
      const user = await login(credentials);
      commit('setUser', user);
    },
    logout({ commit }) {
      logout();
      commit('clearUser');
    }
  },
  getters: {
    products: (state) => state.products,
    tasks: (state) => state.tasks,
    isAuthenticated: (state) => state.isAuthenticated,
    totalProducts: (state) => state.totalProducts,
    productsPerPage: (state) => state.productsPerPage
  }
});
