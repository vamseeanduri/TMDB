<template>
  <div v-if="movie">
    <h1>{{ movie.title }}</h1>
    <p>{{ movie.overview }}</p>
    <img :src="'https://image.tmdb.org/t/p/w500' + movie.poster_path" alt="Movie Poster" />
    <button @click="addToWatchlist">Add to Watchlist</button>
    <button @click="addToFavorites">Add to Favorites</button>
  </div>
</template>

<script>
import api from '../services/api';
import { mapMutations } from 'vuex';

export default {
  data() {
    return {
      movie: null,
    };
  },
  async created() {
    const movieId = this.$route.params.id;
    const response = await api.get(`/movie/${movieId}`);
    this.movie = response.data;
  },
  methods: {
    ...mapMutations(['ADD_TO_WATCHLIST', 'ADD_TO_FAVORITES']),
    addToWatchlist() {
      this.ADD_TO_WATCHLIST(this.movie);
    },
    addToFavorites() {
      this.ADD_TO_FAVORITES(this.movie);
    },
  },
};
</script>
