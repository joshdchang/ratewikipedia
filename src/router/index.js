import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: 'Rate Wikipedia',
      metaTags: [
        {
          name: 'description',
          content: 'Rate anything with a Wikipedia entry out of 5 stars.'
        },
        {
          property: 'og:description',
          content: 'Rate anything with a Wikipedia entry out of 5 stars.'
        }
      ]
    }
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    meta: {
      title: 'About | Rate Wikipedia',
      metaTags: [
        {
          name: 'description',
          content: 'The about page of our example app.'
        },
        {
          property: 'og:description',
          content: 'The about page of our example app.'
        }
      ]
    },
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
