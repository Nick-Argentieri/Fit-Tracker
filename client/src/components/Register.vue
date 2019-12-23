<template>
<div class="Registration">
<v-app>
  <panel title="Register">
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
          @click="register">
          Register
          </v-btn>
    </panel>
   </v-app>
  </div>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
import Panel from '@/components/Panel'
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
  },
  components: {
    Panel
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
