<template>
  <div>
    <input v-model="query" placeholder="Search for movies..." @keyup.enter="searchMovies" />
    <button @click="searchMovies">Search</button>
    <div v-if="movies.length">
      <ul>
        <li v-for="movie in movies" :key="movie.id">
          <router-link :to="'/movie/' + movie.id">
            {{ movie.title }} ({{ movie.release_date }})
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>


<script>
import api from '../services/api';

export default {
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
