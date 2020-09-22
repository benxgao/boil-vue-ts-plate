import { createRouter, createWebHashHistory } from 'vue-router';
import Cart from './pages/Schedule.vue';
import Checkout from './pages/WorkoutPlan.vue';

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/', name: 'cart', component: Cart },
    { path: '/checkout', name: 'checkout', component: Checkout },
  ],
});
