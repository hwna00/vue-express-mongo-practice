import Vue from 'vue';
import VueRouter from 'vue-router';
import Login from '../pages/login';
import SignUp from '../pages/signup';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Login,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/signup',
    name: 'SignUp',
    component: SignUp,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
