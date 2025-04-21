import { createRouter, createWebHistory } from 'vue-router'
import AppCars from '../views/AppCars.vue'
import AppLandingPage from '@/views/AppLandingPage.vue'
import carDetails from '../components/CarDetail.vue'
import account from '../views/AccountPage.vue'

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
      path: "/cars/:id",
      component: carDetails,
    },
    {
      path: '/cars/account',
      component: account
    }
  ],
})

export default router
