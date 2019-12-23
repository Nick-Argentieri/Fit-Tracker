<template>
  <v-layout>
    <v-flex>
    <panel title="Create Post">
        <v-text-field
          label="User"
          required
          :rules="[rules.required]"
          v-model="post.user"
          hint="Your Name">
        </v-text-field>
        <v-text-field
          label="Exercise"
           required
          :rules="[rules.required]"
          v-model="post.exercise"
          hint="What did you do?">
        </v-text-field>
        <v-text-field
          label="Time/Reps"
           required
          :rules="[rules.required]"
          v-model="post.timereps"
          hint="How long/many times did you do it for?">
        </v-text-field>
        <div class="danger-alert" v-if="error">
          {{error}}
        </div>
        <v-btn
          dark
          @click="create">
          Post
        </v-btn>
    </panel>
    </v-flex>
  </v-layout>
</template>

<script>
import Panel from '@/components/Panel'
import PostsServices from '@/services/PostsServices'
export default {
    data () {
        return {   
            post: {
                user: null,
                exercise: null,
                timereps: null
            },
            error: null,
            rules: {
              required: (value) => !!value || 'Required'
            }
        }
    },
    methods: {
        async create () {
          this.error = null
          const allFieldsEntered = Object.keys(this.post).every(key => !!this.post[key])
          if(!allFieldsEntered) {
            this.error = 'Please fill out all required fields'
          } else {
            try {
                await PostsServices.post(this.post)
                this.$router.push({
                    name: 'posts'
                })
            } catch (err) {
                console.log(err)
            }
          }
        }    
    },
    components: {
        Panel
    }
}
</script>

<style scoped>
</style>
