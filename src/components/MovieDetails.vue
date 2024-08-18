<template>
  <div v-if="movie">
    <button class="btn btn-danger mb-4" @click="goBack()">Go Back</button>
    <h1>{{ movie.title }}</h1>
    <p>{{ movie.overview }}</p>
    <img class="movie-poster" :src="'https://image.tmdb.org/t/p/w300' + movie.poster_path" alt="Movie Poster" />
    <p><b>Collection : </b>{{ movie.belongs_to_collection?.name }}</p>
    <p><b>Budget : </b>{{ movie.budget }}</p>
    <p><b>Genres : </b>{{ movie.genres.map(genre => genre.name).join(', ') }}</p>
    <p><b>Homepage : </b><a :href="movie.homepage" target="_blank">{{ movie.homepage }}</a></p>
    <button class="btn btn-primary mb-2" @click="addToWatchlist">Add to Watchlist <i class="fa-solid fa-plus"></i></button>
    <button class="btn btn-success ml-2 mb-2" @click="addToFavorites">Add to Favorites <i class="fa-solid fa-plus"></i></button>
  </div>
</template>

<script>
import api from '../services/api';
import { mapMutations } from 'vuex';

export default {
  props:{
    selectedMovie: Object
  },
  data() {
    return {
      movie: null,
    };
  },
  async created() {
    const response = await api.get(`/movie/${this.selectedMovie.id}`);
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
    goBack(){
      this.movie = null;
      this.$emit("closeDetailsTab");
    }
  },
};
</script>

<style scoped>
  .movie-poster {
    margin-bottom: 1%;
    border-radius: 0.5rem;
    height: auto;
    max-height: 350px;
    object-fit: cover;
  }
</style>
