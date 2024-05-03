<template>
    <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="id"
        label="id"
        width="180">
      </el-table-column>
      <el-table-column
        prop="username"
        label="username"
        width="180">
      </el-table-column>
      <el-table-column
        prop="username"
        label="password">
      </el-table-column>
    </el-table>
  </template>

  <script>
    export default {
      methods: {},
      created:function(){
      this.$http.get("http://localhost:8085/user").then((response)=>{
      console.log(response.data);
      this.tableData = response.data
    })
  },
      data() {
        return {
          tableData: []
        }
      },
      
    }
  </script>