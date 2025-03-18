<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/task-tracker">Task Tracker</router-link>
      <router-link to="/task/1">Task 1</router-link>
      <router-link to="/user/1/profile">User 1 Profile</router-link>
      <router-link to="/user/1/posts">User 1 Posts</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
};
</script>

<style scoped>
nav {
  margin-bottom: 20px;
}
router-link {
  margin-right: 10px;
}
</style>
