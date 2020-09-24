import Vue from 'vue'
import App from './App'
import Ajax from "./utils/request.js"

Vue.config.productionTip = false

App.mpType = 'app'

Vue.prototype.$ajax = Ajax;

const app = new Vue({
    ...App
})
app.$mount()
