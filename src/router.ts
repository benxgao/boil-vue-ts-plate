import { createRouter, createWebHashHistory } from 'vue-router';
import Schedule from './views/Schedule.vue';

export default createRouter({
  history: createWebHashHistory(),
  routes: [{ path: '/', name: 'schedule', component: Schedule }],
});
