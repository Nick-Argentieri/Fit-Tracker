import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/HomePage'
import HelloWorld from '@/components/HelloWorld'
import Register from '@/components/Register'
import Login from '@/components/Login'
import CreatePost from '@/components/CreatePost'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/posts',
      name: 'posts',
      component: HomePage
    },
    {
      path: '/posts/create',
      name: 'posts-create',
      component: CreatePost
    }
  ]
})
