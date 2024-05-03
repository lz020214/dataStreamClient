<template>
  <div id="app">
    <!-- 调用 -->
    <TableComponent></TableComponent>
  </div>
</template>

<script>
// 引入
import TableComponent from './components/TableComponent.vue'
export default {
  name: 'App',
  components: {
    // 挂载
    TableComponent
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
