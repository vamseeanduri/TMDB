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
    <div> 
      <movie-card :movies="movies.length > 0 ? movies : InitialRender" @hidePagination="hidePagination()" @showPagination="showPagination">
      </movie-card>
    </div>
    <!-- Pagination Controls -->
    <div v-if="!hidePaginationTab" class="pagination-controls">
      <button class="btn btn-primary" @click="prevPage" :disabled="currentPage === 1">Previous</button>
      <span>Page {{ currentPage }}</span>
      <button class="btn btn-primary" @click="nextPage">Next</button>
    </div>
  </div>
</template>

<script>
import api from '../services/api';
import MovieCard from './MovieCard.vue';

export default {
  components: {
    MovieCard
  },
  data() {
    return {
      query: '',
      movies: [],
      InitialRender: [],
      currentPage: 1,
      itemsPerPage: 10,
      hidePaginationTab: false
    };
  },
  created(){
      this.getMovies(1);
  },
  methods: {
    async getMovies(pagenumber){
        const response = await api.get(`/movie/popular?language=en-US&page=${pagenumber}`, {
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
    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
        this.getMovies(this.currentPage);
      }
    },
    nextPage() {
      this.currentPage++;
      this.getMovies(this.currentPage);
    },
    hidePagination(){
      this.hidePaginationTab = true;
    },
    showPagination(){
      this.hidePaginationTab = false;
    }
  },
  computed: {
    paginatedData() {
      const start = (this.currentPage - 1) * this.itemsPerPage;
      const end = start + this.itemsPerPage;
      return this.InitialRender.slice(start, end);
    },
  },
};
</script>

<style scoped>
.TMDBImage {
  margin-left: 20px;
  width: 200px;
}
.searchInput {
  width: 200px !important;
  border: 1px solid black;
  border-radius: 5px;
}
.pagination-controls {
  position: relative;
  display: flex;
  gap: 10px;
  justify-content: center;
}
</style>
