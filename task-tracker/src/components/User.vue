<template>
  <div>
    <h1>User {{ id }}</h1>
    <nav>
      <router-link :to="`/user/${id}/profile`">Profile</router-link>
      <router-link :to="`/user/${id}/posts`">Posts</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'User',
  props: ['id']
};
</script>
