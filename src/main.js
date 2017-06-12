import 'babel-polyfill'
import Vue from 'vue'
import { sync } from 'vuex-router-sync'
import App from './App.vue'
import router from './routes'
import store from './store'

sync(store, router)
new Vue({ el: '#app', render: h => h(App), router, store })
