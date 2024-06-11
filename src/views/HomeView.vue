<template>
  <div class="home">
    <div v-if="apiData.length > 0">
      <main-table :tableData="apiData" @selectedRow="selectedMainRow"></main-table>
    </div>
    <div v-if="UsersData.length > 0">
      <main-table :tableData="UsersData"></main-table>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'HomeView',
  data(){
    return{
      apiData: [],
      UsersData: [],
    }
  },
  created(){
    this.getApiData();
  },
  methods:{
    getApiData(){
      axios.get('https://64b40abf0efb99d86268b31e.mockapi.io/Users').then(data => {
        this.apiData = data.data;
      })
    },
    getUsersData(emitData){
      axios.get(`https://64b40abf0efb99d86268b31e.mockapi.io/UsersData`).then(data => {
        this.UsersData = data.data.filter(X => X.UserId == emitData.id);
      })
    },
    selectedMainRow(emitData){
      this.getUsersData(emitData);
    }
  }
}
</script>
