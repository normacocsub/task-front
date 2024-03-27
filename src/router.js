import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    component: () => import('./views/Home.vue')
  },
  {
    path: '/userRegister',
    component: () => import('./views/UserRegister.vue')
  },
  {
    path: '/login',
    component: () => import('./views/Login.vue')
  }
];

const router = new createRouter({
  history: createWebHistory(),
  routes,
})

export default router;
