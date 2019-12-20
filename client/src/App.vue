<template>
  <div id="app">
   <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.input-group-text-field input {
  border-bottom: 1px solid black;
}
.toolbar__title{
  color: #FFFFFF;
  font-weight: 300;
}
.v-btn__content{
  color: #FFFFFF;
  font-weight: 300;
}
</style>
