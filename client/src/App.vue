<template>
  <div id="app">
    <v-app>
      <v-container fluid>
      </v-container>
    </v-app>
   <router-view/>
  </div>
</template>

<script>
import PageHeader from '@/components/Header.vue'
export default {
  name: 'App',
  components: {
    PageHeader
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
