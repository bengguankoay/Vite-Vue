import { createRouter, createWebHistory } from 'vue-router';
import Home from './components/Home.vue';
import About from './components/About.vue';
import TaskTracker from './components/TaskTracker.vue';
import TaskDetail from './components/TaskDetail.vue';
import User from './components/User.vue';
import UserProfile from './components/UserProfile.vue';
import UserPosts from './components/UserPosts.vue';
import Login from './components/Login.vue';
import store from './store';

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/task-tracker', component: TaskTracker, meta: { requiresAuth: true } },
  { path: '/task/:id', component: TaskDetail, props: true, meta: { requiresAuth: true } }, // Dynamic route
  {
    path: '/user/:id',
    component: User,
    props: true,
    meta: { requiresAuth: true },
    children: [
      { path: 'profile', component: UserProfile, meta: { requiresAuth: true } }, // Nested route
      { path: 'posts', component: UserPosts, meta: { requiresAuth: true } } // Nested route
    ]
  },
  { path: '/login', component: Login }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (!store.getters.isAuthenticated) {
      next({ path: '/login' });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
