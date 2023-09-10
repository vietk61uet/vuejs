// main.js
import { createApp, h } from 'vue';
import * as VueRouter from 'vue-router';
import '@fortawesome/fontawesome-free/css/all.css';
import App from './App.vue';
import Login from './Login.vue';
import Dashboard from './DashboardPage.vue';
import Register from './RegisterPage.vue';

const routes = [
  { path: '/', redirect: '/login' },
  { path: '/login', component: Login },
  { path: '/dashboard', component: Dashboard },
  { path: '/register', component: Register }
];

const router = VueRouter.createRouter({
  history: VueRouter.createWebHistory(),
  routes
});

const app = createApp({
  render:() => h(App)
});

app.use(router);
app.mount('#app');