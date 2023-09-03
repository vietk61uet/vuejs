// main.js
import { createApp } from 'vue';
import * as VueRouter from 'vue-router';
import Login from './Login.vue';
import Dashboard from './DashboardPage.vue';

const routes = [
  { path: '/', redirect: '/login' },
  { path: '/login', component: Login },
  { path: '/dashboard', component: Dashboard }
];

const router = VueRouter.createRouter({
  history: VueRouter.createWebHistory(),
  routes
});

createApp()
  .use(router)
  .mount('#app');