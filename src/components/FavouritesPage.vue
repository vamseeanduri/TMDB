<template>
  <div>
    <h1>Favorites</h1>
    <ul>
      <li v-for="movie in favorites" :key="movie.id">
        <router-link :to="'/movie/' + movie.id">
          {{ movie.title }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState(['favorites']),
  },
};
</script>
