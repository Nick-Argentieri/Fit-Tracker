<template>
<div class="Registration">
<v-app>
  <v-layout column height=100px>
    <v-flex offset-xs3>
      <v-flex xs8>
      <v-card :elevation="2" height="600" width = "600">
        <v-toolbar flat dense dark>
          <v-toolbar-title>Login</v-toolbar-title>
        </v-toolbar>
          <form
            name="fit-tracker-form">
            <v-text-field
              label="Email"
              v-model="email"
              class="styled-input"
            ></v-text-field>
            <br>
            <v-text-field
              v-model="password"
              class="styled-input"
              type="password"
              label="Password"
              hint="At least 8 characters, letters and numbers only."
          ></v-text-field>
          </form>
          <br>
          <div class="error" v-html="error" />
          <br>
          <v-btn
            dark
            @click="login">
            Login
          </v-btn>
      </v-card>
      </v-flex>
    </v-flex>
  </v-layout>
</v-app>
</div>
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
    async login () {
      try {
        const response = await AuthenticationService.login({
          email: this.email,
          password: this.password
        })
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  }
}
</script>

<style scoped>
.error {
  color: rgb(156, 10, 10);
}
.styled-input{
  padding-left: 20px;
  padding-right: 30px;
}
.input-group--text-field{
    margin-left: 10px;
}
.Registration{
  margin-top: -75px;
  margin-bottom: -100px;
}
</style>
