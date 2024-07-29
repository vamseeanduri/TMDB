import { createRouter, createWebHistory } from 'vue-router'
import Search from '../components/CustomSearch.vue';
import MovieDetails from '../components/MovieDetails.vue';
import WatchList from '../components/WatchList.vue';
import FavouritesPage from '../components/FavouritesPage.vue';



const routes = [
  { path: '/', component: Search },
  { path: '/movie/:id', component: MovieDetails },
  { path: '/watchlist', component: WatchList },
  { path: '/favorites', component: FavouritesPage },
];


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
