import Vue from 'vue'
import App from './app.vue'
import router from './router'
import store from './store'
import axios from 'axios'

Vue.prototype.$ajax = axios;

new Vue({
    el:'#app',
    router,
    store,
    render:h => h(App)
})