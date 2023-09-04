// main.js
import { createApp, h } from 'vue';
import * as VueRouter from 'vue-router';
import App from './App.vue';
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

const app = createApp({
  render: () => h(App)
});

app.use(router);
app.mount("#app");