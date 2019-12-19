<template>
  <v-layout column>
    <v-flex offset-xs3>
      <v-flex xs8>
      <v-card :elevation="2" height="300" width = "600">
        <v-toolbar flat dense dark>
          <v-toolbar-title>Register</v-toolbar-title>
        </v-toolbar>
          <form
            name="fit-tracker-form"
            autocomplete="off">
            <v-text-field
              label="Email"
              v-model="email"
              class="styled-input"
            ></v-text-field>
            <br>
            <v-text-field
              label="Password"
              v-model="password"
              class="styled-input"
            ></v-text-field>
          </form>
          <br>
          <div class="error" v-html="error" />
          <br>
          <v-btn
            dark
            @click="register">
            Register
          </v-btn>
      </v-card>
      </v-flex>
    </v-flex>
  </v-layout>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    async register () {
      try {
        await AuthenticationService.register({
          email: this.email,
          password: this.password
        })
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  }
}
</script>

<style scoped>
.error {
  color: darkred;
}
.styled-input{
  padding-left: 20px;
  padding-right: 20px;
}
</style>
