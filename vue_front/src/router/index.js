import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
   
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/admin',
    name: 'admin',
   
    component: () => import('../views/AdminView.vue')
  },
  {
    path: '/products',
    name: 'products',
   
    component: () => import('../views/ProductsView.vue')
  },
  {
    path: '/singleProduct',
    name: 'single product',
   
    component: () => import('../views/SingleProductView.vue')
  },
  {
    path: '/contact',
    name: 'contact us',
   
    component: () => import('../views/ContactView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
