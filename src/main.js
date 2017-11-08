import Vue from 'vue'
import axios from 'axios'
import App from './App.vue'

Vue.use(axios)

new Vue({
  el: '#app',
  render: h => h(App)
})
