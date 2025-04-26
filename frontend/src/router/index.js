import { createRouter, createWebHistory } from 'vue-router'
import AppCars from '../views/AppCars.vue'
import AppLandingPage from '@/views/AppLandingPage.vue'
import carDetails from '../components/CarDetail.vue'
import account from '../views/AccountPage.vue'
import signin from '../components/Signin.vue'
import login from '../components/Login.vue'
import carform from '../components/CreateCarForm.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: AppLandingPage, 
    },
    {
      path: '/cars',
      component: AppCars,
    },
    {
      path: '/cars/:id',
      component: carDetails,
    },
    {
      path: '/cars/account',
      component: account,
      meta: {
        requiresAuth: true // need authentication
      }
    },
    {
      path: '/signin',
      component: signin,
      meta: {
        requiresGuest: true // only for guests
      }
    },
    {
      path: '/add-car',
      component: carform,
    },
    {
      path: '/login',
      component: login,
      meta: {
        requiresGuest: true // only for guests
      },
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 }
  }
})

export default router