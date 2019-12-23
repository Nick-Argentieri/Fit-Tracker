<template>
<div class="home-page">
<v-app>
  <panel title="Posts">
        <v-btn
        slot="action"
        @click="navigateTo({name: 'posts-create'})"
        fab
        dark
        class="accent-2"
        small
        absolute
        right
        middle
        >
          <v-icon>add</v-icon>
        </v-btn>
    <form
      name="fit-tracker-form"
      autocomplete="off"
      v-for="post in posts"
      :key="post.id">
      <v-layout>
        <v-flex>
          <div class="contents">
            {{post.user}} -
            {{post.exercise}} -
            {{post.timereps}}
          </div>
        </v-flex>
      </v-layout>
    </form>
    </panel>
   </v-app>
  </div>
</template>

<script>
import PostServices from '@/services/PostsServices'
import Panel from '@/components/Panel'
export default {
  data () {
    return {
      posts: null
    }
  },
  async mounted () {
    this.posts = (await PostServices.index()).data
  },
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    }
  },
  components: {
    Panel
  }
}
</script>

<style scoped>
.contents{
  font-size: 20px
}
</style>
