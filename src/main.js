import Vue from 'vue'
import App from './App.vue'
import router from '@/route'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'typicons.font'

Vue.config.productionTip = false

new Vue({
    render: h => h(App),
    router
}).$mount('#app')
