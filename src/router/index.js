import { createRouter, createWebHashHistory } from 'vue-router';

import layout from '../components/layout.vue';
import Home from '../pages/home.vue';
import About from '../pages/about.vue';
import Login from '../pages/login.vue';

const routes = [
  {
    path: '/',
    name: 'layout',
    component: layout,
    children: [
      {
        path: '/home',
        name: 'Home',
        component: Home
      },
      {
        path: '/about',
        name: 'About',
        component: About
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
