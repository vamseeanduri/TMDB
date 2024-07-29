<template>
  <div>
    <h1 class="ml-2">TMDB</h1>
    <div class="input-group input-group-sm mt-3 ml-3 mr-3">
      <input class="searchInput mr-1" v-model="query" placeholder=" Search for movies..." @keyup.enter="searchMovies" />
      <button class="btn btn-primary" @click="searchMovies">Search</button>
    </div>
    <div v-if="movies.length">
      <movie-card :movies="movies">
      </movie-card>
    </div>
  </div>
</template>


<script>
import api from '../services/api';
import MovieCard from './MovieCard.vue';


export default {
  components:{
    MovieCard
  },
  data() {
    return {
      query: '',
      movies: [],
    };
  },
  methods: {
    async searchMovies() {
      const response = await api.get('/search/movie', {
        params: { query: this.query },
      });
      this.movies = response.data.results;
    },
  },
};
</script>


<style scoped>
.searchInput{
  width: 200px !important;
  border: 1px solid black;
  border-radius: 5px;
}
</style>