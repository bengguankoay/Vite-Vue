<template>
  <div>
    <h1>Login</h1>
    <form @submit.prevent="handleLogin">
      <input v-model="username" placeholder="Username" required />
      <input v-model="password" type="password" placeholder="Password" required />
      <br />
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'Login',
  data() {
    return {
      username: '',
      password: ''
    };
  },
  methods: {
    ...mapActions(['login']),
    async handleLogin() {
      try {
        await this.login({ email: this.username, password: this.password });
        this.$router.push('/');
      } catch (error) {
        console.error('Login failed:', error);
      }
    }
  }
};
</script>

<style scoped>
input {
  width: 50%;
  padding: 10px;
  margin: 10px;
  border-radius: 12px;
  background-color: #f4f5f6;
  border: none;
}

button {
  padding: 10px 20px;
  margin: 10px;
  border-radius: 12px;
  background-color: #4caf50;
  color: white;
  border: none;
  cursor: pointer;
}
</style>
