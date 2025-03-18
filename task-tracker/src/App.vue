<template>
  <div id="app">
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
      <RouterLink to="/task-tracker">Task Tracker</RouterLink>
      <RouterLink to="/task/1">Task 1</RouterLink>
      <RouterLink to="/user/1/profile">User 1 Profile</RouterLink>
      <RouterLink to="/user/1/posts">User 1 Posts</RouterLink>
      <RouterLink v-if="!isAuthenticated" to="/login">Login</RouterLink>
      <button v-if="isAuthenticated" @click="logout">Logout</button>
    </nav>
    <RouterView></RouterView>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'App',
  computed: {
    ...mapGetters(['isAuthenticated'])
  },
  methods: {
    ...mapActions(['logout'])
  }
};
</script>

<style scoped>
nav {
  margin-bottom: 20px;
}
router-link {
  margin-right: 10px;
}
button {
  margin-left: 10px;
}
</style>
