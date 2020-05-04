import Vue from 'vue'
import Button from './button'
import Icon from './icon.vue'

Vue.component('g-button', Button)
Vue.component('g-icon', Icon)

let vm = new Vue({
    el: '#app'
})