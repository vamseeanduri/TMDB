<template>
  <div class="hello">
    <table class="table table-striped table-hover table-bordered table-responsive">
      <thead class="table-success">
        <tr>
          <th v-for="(heading, index) in Object.keys(tableData[0])" :key="index">{{heading}}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(rowData, rowIndex) in tableData" :key="rowIndex" @click="selectedRow(rowData)">
          <td v-for="(value, key) in rowData" :key="key">{{ value }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    tableData: Array
  },
  data(){
    return{

    }
  },
  methods:{
    selectedRow(data){
      this.$emit('selectedRow', data)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
