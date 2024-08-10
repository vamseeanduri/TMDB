<template>
  <div>
    <div class="input-group input-group-sm mt-3 ml-3 mr-3">
      <img class="TMDBImage" src="../images/TMDB.svg" alt="TMDB">
      <div class="form-group mx-sm-6 mb-2 d-flex">
        <input class="form-control" v-model="query" placeholder=" Search for movies..." @keyup.enter="searchMovies" />
        <button class="btn btn-primary ml-1" @click="searchMovies"><i class="fa-solid fa-paper-plane"></i></button>
      </div>
    </div>
    <hr /> 
    <div > 
      <movie-card :movies="movies.length > 0 ? movies : InitialRender">
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
      InitialRender: []
    };
  },
  created(){
      this.getMovies();
  },
  methods: {
    async getMovies(){
        const response = await api.get('/movie/popular?language=en-US&page=1', {
            params: { query: this.query },
        });
        this.InitialRender = response.data.results;
    },
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
.TMDBImage{
  margin-left: 20px;
  width: 200px;
}
.searchInput{
  width: 200px !important;
  border: 1px solid black;
  border-radius: 5px;
}
</style>