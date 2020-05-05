import Vue from 'vue'
import Button from './button.vue'
import Icon from './icon.vue'
import GButtonGroup from './button-group.vue'

Vue.component('g-button', Button)
Vue.component('g-icon', Icon)
Vue.component('g-button-group', GButtonGroup)

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