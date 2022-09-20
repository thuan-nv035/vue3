import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/home/index.vue')
    },
    {
      path: '/login',
      name: 'login',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/login/index.vue')
    },
    {
      path: '/comment',
      name: 'comment',
      component: () => import('../views/comments/index.vue')
    },
    {
      path: '/music',
      name: 'music',
      component: () => import('../components/Song/SongList.vue')
    },
    {
      path: '/form',
      name: 'form',
      component: () => import('../views/form/index.vue')
    }
  ]
})

export default router
