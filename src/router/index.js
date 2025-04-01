import { createRouter, createWebHistory } from 'vue-router'
import AppCars from '../views/AppCars.vue'
import AppLandingPage from '@/views/AppLandingPage.vue'
import cars from '../components/CarDetail.vue'

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
      component: cars,
    }

  ],
})

export default router
