<template>
  <v-layout column>
    <v-flex>
      <v-card :elevation="2" height="300" width = "600">
        <v-toolbar flat dense dark>
          <v-toolbar-title>Register</v-toolbar-title>
        </v-toolbar>
          <form
            name="fit-tracker-form"
            autocomplete="off">
            <v-text-field
              v-model="email"
              class="styled-input"
              label="Email"
            ></v-text-field>
            <br>
            <v-text-field
              v-model="password"
              class="styled-input"
              :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
              :rules="[rules.required, rules.min]"
              :type="show1 ? 'text' : 'password'"
              name="input-10-1"
              label="Password"
              hint="At least 8 characters, letters and numbers only."
            @click:append="show1 = !show1"
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
  </v-layout>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  data () {
    return {
      email: '',
      password: '',
      error: null,
      show1: false,
      rules: {
        required: value => !!value || 'Required',
        min: v => v.length >= 8 || 'Must be at least 8 characters'
      }
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
  color: rgb(156, 10, 10);
}
.styled-input{
  padding-left: 20px;
  padding-right: 20px;
}
.v-card{
  margin: 0 auto;
  height: 300px;
  width : 600px;
}
</style>
