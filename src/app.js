import Vue from 'vue'
import Button from './button'
import Icon from './icon.vue'

Vue.component('g-button', Button)
Vue.component('g-icon', Icon)

let vm = new Vue({
    el: '#app',
    data() {
      return {
        loading1: false,
        loading2: true,
        loading3: false
      }
    }
})