import jquery from 'jquery'
import tether from 'tether'
import bootstrap from 'bootstrap'
import './scss/base.scss';
import ga from 'vue-ga'
import VueRouter from 'vue-router'
import routes from './routes.js'
// var VueScrollTo = require('vue-scrollto')
// Vue.use(VueScrollTo)
Vue.use(VueRouter)
import Meta from 'vue-meta'
Vue.use(Meta)

import Vue from 'vue'
import App from './App'

const router = new VueRouter({
    mode: 'history',
    scrollBehavior(to, from, savedPosition) {
        return { x: 0, y: 0 }
    },
    linkActiveClass: 'active',
    base: __dirname,
    routes: routes
})

ga(router, 'UA-10798495-19')




var vue = new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: { App }
}).$mount('#app')
