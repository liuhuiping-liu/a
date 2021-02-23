import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Classify from '../views/Classify.vue'
import Me from '../views/Me.vue'
import Index from '../views/Index.vue'
import Detail from '../views/Detail.vue'
import Register from '../views/Register.vue'
import Login from '../views/Login.vue'
import Collection from '../views/Collection.vue'
import Search from '../views/Search.vue'
import test from '../views/test.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/test',
    component: test
  },
  {
    path: '/search',
    component: Search
  },
  {
    path: '/index/:id',
    component: Index
  },
  
  {
    path: '/detail',
    component: Detail
  },
  {
    path: '/register',
    component: Register
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/collection',
    component: Collection
  },
  {
    path: '/classify',
    component: Classify
  },
  {
    path: '/me',
    component: Me
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
