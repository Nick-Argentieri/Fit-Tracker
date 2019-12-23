<template>
<div class="home-page">
<v-app>
  <panel title="Home">
    <form
      name="fit-tracker-form"
      autocomplete="off"
      v-for="post in posts"
      :key="post.user">
      {{post.user}}
      {{post.exercise}}
      {{post.timereps}}
    </form>
    </panel>
   </v-app>
  </div>
</template>

<script>
import PostServices from '@/services/PostServices'
import Panel from '@/components/Panel'
export default {
  data () {
    return {
      posts: null
    }
  },
  async mounted () {
    this.posts = await PostServices.index()
  },
  components: {
    Panel
  }
}
</script>

<style scoped>
</style>
