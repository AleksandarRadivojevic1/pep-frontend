import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AlbumView from '@/views/albums/AlbumView.vue'
import ArtistView from '@/views/ArtistView.vue'
import EditAlbum from '@/views/albums/EditAlbum.vue'
import SongView from '@/views/songs/SongView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/albums',
      name: 'albums',
      component: AlbumView
    },
    {
      path: '/albums/:id',
      name: 'edit-albums',
      component: EditAlbum
    },
    {
      path: '/artists',
      name: 'artists',
      component: ArtistView
    },
    {
      path: '/songs',
      name: 'Songs',
      component: SongView,
  },
  ]
})

export default router
