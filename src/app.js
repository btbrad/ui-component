import Vue from 'vue'
import Button from './button.vue'
import Icon from './icon.vue'
import GButtonGroup from './button-group.vue'
import GInput from './input.vue'

Vue.component('g-button', Button)
Vue.component('g-icon', Icon)
Vue.component('g-button-group', GButtonGroup)
Vue.component('g-input', GInput)

let vm = new Vue({
    el: '#app',
    data() {
      return {
        loading1: false,
        loading2: true,
        loading3: false,
        name: '王五'
      }
    },
    methods: {
      inputChange(e) {
        console.log('change', e.target.value)
      }
    }
})

import chai from 'chai'

const expect = chai.expect

// 单元测试
// 测试icon是否设置成功
{
  const Constructor = Vue.extend(Button)
  const button = new Constructor({
    propsData: {
      icon: 'settings'
    }
  })
  button.$mount('#test')

  let useElement = button.$el.querySelector('use')
  expect(useElement.getAttribute('xlink:href')).to.eq('#i-settings')
}
// 测试loading  loading会覆盖其他icon
{
  const Constructor = Vue.extend(Button)
  const button = new Constructor({
    propsData: {
      icon: 'settings',
      loading: true
    }
  })
  button.$mount()

  let useElement = button.$el.querySelector('use')
  let href = useElement.getAttribute('xlink:href')
  expect(href).to.eq('#i-loading')
}
// oder 测试icon的位置
{
  let div = document.createElement('div')
  document.body.appendChild(div)
  const Constructor = Vue.extend(Button)
  const button = new Constructor({
    propsData: {
      icon: 'settings',
      iconPosition: 'right'
    }
  })
  button.$mount(div)

  let svg = button.$el.querySelector('svg')
  let {order} = window.getComputedStyle(svg)
  expect(order).to.eq('2')
  button.$el.remove()
  button.$destroy()
}
{
  let div = document.createElement('div')
  document.body.appendChild(div)
  const Constructor = Vue.extend(Button)
  const button = new Constructor({
    propsData: {
      icon: 'settings',
    }
  })
  button.$mount(div)

  let svg = button.$el.querySelector('svg')
  let {order} = window.getComputedStyle(svg)
  expect(order).to.eq('1')
  button.$el.remove()
  button.$destroy()
}
// click mock 测试click事件
import spies from 'chai-spies'

chai.use(spies)
{
  const Constructor = Vue.extend(Button)
  const vm = new Constructor({
    propsData: {
      icon: 'settings',
    }
  })
  vm.$mount()
  let spy = chai.spy(()=>{})
  vm.$on('click', spy)
  let button = vm.$el
  button.click()
  expect(spy).to.have.been.called()
}