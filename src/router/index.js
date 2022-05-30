import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/waiting',
        name: 'Waiting',
        component: () => import(/* webpackChunkName: "about" */ '../views/Waiting.vue')
    },
    {
        path: '/game',
        name: 'Game',
        component: () => import(/* webpackChunkName: "about" */ '../views/Game.vue')
    },
    {
        path: '/ended',
        name: 'Ended',
        component: () => import(/* webpackChunkName: "about" */ '../views/Ended.vue')
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
