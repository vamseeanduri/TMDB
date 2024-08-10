<template>
    <div class="container">
        <div class="row" v-if="!selectedMovie">
            <div class="col-sm-6 col-md-4 col-lg-3" v-for="(movie, idx) in movies" :key="idx">
                <div class="card movie-card" @click="selectMovie(movie)">
                    <img :src="getFullImagePath(movie.backdrop_path ? movie.backdrop_path : movie.poster_path)" class="card-img-top movie-poster" :alt="movie.title">
                    <div class="card-body">
                        <h5 class="card-title movie-title">{{ movie.title }}</h5>
                        <p class="card-text movie-overview">{{ movie.overview }}</p>
                    </div>
                </div>
            </div>
        </div>
        <movie-detail v-if="selectedMovie" :selectedMovie="selectedMovie" @closeDetailsTab="closeDetailsTab"></movie-detail>
    </div>
</template>

<script>
import MovieDetail from './MovieDetails.vue';
export default {
    props: {
        movies: Array,
    },
    components:{
        MovieDetail
    },
    data() {
        return {
            selectedMovie: null
        }
    },
    methods: {
        getFullImagePath(posterPath) {
            const baseURL = "https://image.tmdb.org/t/p/w500";
            return `${baseURL}${posterPath}`;
        },
        selectMovie(movie){
            this.selectedMovie = movie;
        },
        closeDetailsTab(){
            this.selectedMovie = null;
        }
    }
}
</script>



<style scoped>
.movie-card {
    margin: 1rem 0.5rem;
    border: none;
    background-color: #f8f9fa;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease-in-out;
}

.movie-card:hover {
    transform: scale(1.05);
}

.movie-poster {
    border-radius: 0.5rem;
    height: auto;
    max-height: 350px;
    object-fit: cover;
}

.card-body {
    padding: 1rem;
    text-align: center;
}

.movie-title {
    font-size: 1.25rem;
    font-weight: 700;
    color: #333;
    margin: 0.5rem 0;
}

.movie-overview {
    font-size: 1rem;
    color: #666;
    height: 4.5rem;
    overflow: hidden;
    text-overflow: ellipsis;
}
</style>
