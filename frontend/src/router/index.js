import { createRouter, createWebHistory } from 'vue-router'
import AppCars from '../views/AppCars.vue'
import AppLandingPage from '@/views/AppLandingPage.vue'
import carDetails from '../components/CarDetail.vue'

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
    }

  ],
})

export default router
