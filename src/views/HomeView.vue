<template>
  <div class="home">
    <p>count : {{ count }}</p>
    <button class='btn btn-success mr-1' @click="increment">Increment</button>
    <button class='btn btn-danger mr-1' @click="decrement">Decrement</button>
    <button class='btn btn-danger' @click="reset">Reset</button>
    <!-- <div v-if="apiData.length > 0">
      <main-table :tableData="apiData" @selectedRow="selectedMainRow"></main-table>
    </div> -->
    <!-- <div v-if="UsersData.length > 0">
      <main-table :tableData="UsersData"></main-table>
    </div> -->
  </div>
</template>

<script>
import {mapState, mapActions, mapGetters} from 'vuex';
//import axios from 'axios';

export default {
  name: 'HomeView',
  data(){
    return{
      apiData: [],
      UsersData: [],
    }
  },
  created(){
    //this.getApiData();
  },
  methods:{
    ...mapActions([
      'increment',
      'decrement',
      'reset'
    ]),
    // getApiData(){
    //   axios.get('https://64b40abf0efb99d86268b31e.mockapi.io/Users').then(data => {
    //     this.apiData = data.data;
    //   })
    // },
    // getUsersData(emitData){
    //   axios.get(`https://64b40abf0efb99d86268b31e.mockapi.io/UsersData`).then(data => {
    //     this.UsersData = data.data.filter(X => X.UserId == emitData.id);
    //   })
    // },
    selectedMainRow(emitData){
      this.getUsersData(emitData);
    }
  },
  computed:{
    ...mapState({
      count : state => state.count
    }),
    ...mapGetters([
      'getCount'
    ])
  }
}
</script>
