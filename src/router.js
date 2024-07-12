import { createRouter, createWebHistory } from 'vue-router';
import Login from './pages/Login.vue';
import Signup from './pages/Signup.vue';
import Taskform from './pages/Taskform.vue';

const routes = [
   { path: '/login', component: Login},
   { path:'/signup', component: Signup},
   { path:'/taskform', component: Taskform}
];

const router = createRouter({
   history: createWebHistory(),
   routes,
});

export default router;