import { createRouter, createWebHistory } from 'vue-router'
import { useAuth } from './composables/useAuth'

import LoginForm from './components/LoginForm.vue'
import RegisterForm from './components/RegisterForm.vue'
import Dashboard from './components/Dashboard.vue'

const routes = [
  { path: '/', redirect: '/login' },
  { path: '/login', component: LoginForm },
  { path: '/register', component: RegisterForm },
  { 
    path: '/dashboard', 
    component: Dashboard,
    meta: { requiresAuth: true }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  const { isLoggedIn, checkAuth } = useAuth()
  checkAuth()

  if (to.meta.requiresAuth && !isLoggedIn.value) {
    next('/login')
  } else {
    next()
  }
})

export default router