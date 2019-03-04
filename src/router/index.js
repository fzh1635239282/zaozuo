import VueRouter from 'vue-router'
import Vue from 'vue'

import Index from 'components/pages/Index'
import Home from 'components/pages/Indexs/Home'
import Classify from 'components/pages/Indexs/Classify'
import Found from 'components/pages/Indexs/Found'
import Cart from 'components/pages/Indexs/Cart'
import Mine from 'components/pages/Indexs/Mine'
import Login from 'components/pages/Login'
import Register from 'components/pages/Register'

Vue.use(VueRouter)

export default new VueRouter({
    routes: [
        {
            path: "/",
            redirect: "/index/home"
        },
        {
            path: "/index",
            component: Index,
            children: [
                {
                    path: "home",
                    component: Home
                },
                {
                    path: "classify",
                    component: Classify
                },
                {
                    path: "found",
                    component: Found
                },
                {
                    path: "cart",
                    component: Cart
                },
                {
                    path: "mine",
                    component: Mine
                },
            ]
        },
        {
            path: "/login",
            component: Login
        },
        {
            path: "/register",
            component: Register
        }
  ],
    mode: "history"
})