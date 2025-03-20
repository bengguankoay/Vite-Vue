<template>
  <div id="app" class="landing-page">
    <header>
      <h1>Beng Guan Koay</h1>
      <p class="title">Software Engineer | Web Developer | Tech Enthusiast</p>
      <nav>
        <RouterLink to="/" class="nav-link">Home</RouterLink>
        <RouterLink to="/about" class="nav-link">About</RouterLink>
        <RouterLink to="/product" class="nav-link">Portfolio</RouterLink>
        <RouterLink to="/task-tracker" class="nav-link">Projects</RouterLink>
        <RouterLink to="/contact" class="nav-link">Contact</RouterLink>
        <RouterLink to="/login" v-if="!isAuthenticated" class="nav-link">Login</RouterLink>
      </nav>
      <RouterView></RouterView>
    </header>
    <main>
      <section class="cta">
        <RouterLink to="/about" class="btn primary-btn">Learn More About Me</RouterLink>
        <RouterLink to="/contact" class="btn secondary-btn">Contact Me</RouterLink>
      </section>
    </main>
    <footer>
      <p>&copy; 2025 Beng Guan Koay. All rights reserved.</p>
    </footer>
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
/* General Styles */
body {
  font-family: 'Roboto', sans-serif;
  margin: 0;
  padding: 0;
  background-color: #f4f4f9;
  color: #333;
}

.landing-page {
  height: 100%;
  width: 100%;
  text-align: center;
  padding: 40px 20px;
}

/* Header Styles */
header {
  background: linear-gradient(to right, #4caf50, #66bb6a);
  color: white;
  padding: 30px 0;
}

header h1 {
  margin: 0;
  font-size: 3rem;
}

header .title {
  margin: 10px 0;
  font-size: 1.5rem;
}

header nav {
  margin-top: 20px;
}

header nav .nav-link {
  color: white;
  text-decoration: none;
  margin: 0 15px;
  font-weight: bold;
  font-size: 1.1rem;
  transition: color 0.3s;
}

header nav .nav-link:hover {
  color: #f1f1f1;
}

/* Main Section Styles */
main {
  margin: 40px 0;
}

.intro {
  margin-bottom: 30px;
}

.intro h2 {
  font-size: 2.5rem;
  margin-bottom: 20px;
}

.intro p {
  font-size: 1.2rem;
  line-height: 1.6;
  color: #555;
}

.cta .btn {
  display: inline-block;
  margin: 15px;
  padding: 12px 25px;
  text-decoration: none;
  border-radius: 5px;
  font-weight: bold;
  transition: background-color 0.3s ease;
}

.cta .primary-btn {
  background-color: #4caf50;
  color: white;
}

.cta .primary-btn:hover {
  background-color: #45a049;
}

.cta .secondary-btn {
  background-color: #555;
  color: white;
}

.cta .secondary-btn:hover {
  background-color: #444;
}

/* Footer Styles */
footer {
  margin-top: 40px;
  padding: 20px 0;
  background-color: #333;
  color: white;
}

footer p {
  margin: 0;
  font-size: 1rem;
}

/* Responsive Styles */
@media (max-width: 768px) {
  header h1 {
    font-size: 2rem;
  }

  .intro h2 {
    font-size: 2rem;
  }

  .intro p {
    font-size: 1.1rem;
  }

  .cta .btn {
    font-size: 1rem;
    padding: 10px 20px;
  }
}
</style>
