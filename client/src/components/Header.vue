<template>
   <v-app>
     <v-card>
      <v-toolbar fixed dark dense>
        <v-toolbar-title class="mr-4">
          <span
          class="home"
          @click="navigateTo({name: 'root'})">
            Fitness Tracker
          </span>
        </v-toolbar-title>
        <v-toolbar-items>
          <v-btn flat>
            Browse
          </v-btn>
        </v-toolbar-items>
        <v-spacer></v-spacer>
        <v-toolbar-items>
          <v-btn flat
          @click="navigateTo({name: 'register'})">
              Sign Up
          </v-btn>
        </v-toolbar-items>
      </v-toolbar>
     </v-card>
  </v-app>
</template>
<script>
export default {
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    }
  }
}
</script>
<style scoped>
.toolbar__content{
  color: #FFFFFF;
  margin-left: 10%;
}
.home {
  cursor: pointer;
}
</style>
