import { createStore } from 'vuex'


export default createStore({
  state: {
    watchlist: [],
    favorites: [],
  },
  mutations: {
    ADD_TO_WATCHLIST(state, movie) {
      state.watchlist.push(movie);
    },
    REMOVE_FROM_WATCHLIST(state, movieId) {
      state.watchlist = state.watchlist.filter(movie => movie.id !== movieId);
    },
    ADD_TO_FAVORITES(state, movie) {
      state.favorites.push(movie);
    },
    REMOVE_FROM_FAVORITES(state, movieId) {
      state.favorites = state.favorites.filter(movie => movie.id !== movieId);
    },
  },
});

