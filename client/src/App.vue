<template>
  <div id="app">
    <v-app>
      <main>
        <v-container fluid height="50px">
          <Header />
          <router-view></router-view>
        </v-container>
      </main>
    </v-app>
  </div>
</template>

<script>
import Header from './components/Header'
export default {
  name: 'App',
  components: {
    Header
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
  height: auto;
}
.input-group-text-field input {
  border-bottom: 1px solid black;
}
.v-btn__content{
  color: #FFFFFF;
  font-weight: 300;
}
.toolbar-text{
  color:#FFFFFF;
  justify: center;
  margin-left: 5%;
}
.danger-alert{
  color: red;
}
</style>
