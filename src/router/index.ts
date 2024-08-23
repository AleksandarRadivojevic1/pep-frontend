import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AlbumView from '@/views/AlbumView.vue'
import ArtistView from '@/views/ArtistView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    //{
    //   path: '/albums',
    //   name: 'albums',
    //   component: AlbumView
    // },
    // {
    //   path: '/artists',
    //   name: 'artists',
    //   component: ArtistView
    // },
  ]
})

export default router
