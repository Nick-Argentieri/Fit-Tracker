<template>
 <div>
  <v-card class ="app-bar">
      <v-app-bar
          dark
          fixed
          shrink-on-scroll
      >
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <v-toolbar-title>Fitness Tracker</v-toolbar-title>
      <v-spacer></v-spacer>
       <v-btn icon>
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </v-app-bar>
        <v-container style="height: 100px" flat>
        </v-container>
  </v-card>
 </div>
</template>
<script>
export default {
  data () {
  }
}
</script>
<style scoped>
.container__flat{
    opacity: 0.0;
}
</style>
