import Vue from 'vue'
import Button from './button.vue'
import Icon from './icon.vue'
import GButtonGroup from './button-group.vue'
import GInput from './input.vue'
import GRow from './row.vue'
import GCol from './col.vue'
import GLayout from './layout.vue'
import GHeader from './header.vue'
import GSider from './sider.vue'
import GContent from './content.vue'
import GFooter from './footer.vue'
import GToast from './toast.vue'
import plugin from './plugin'
import Tabs from './tabs.vue'
import TabsNav from './tabs-nav.vue'
import TabsContent from './tabs-content.vue'
import TabsPane from './tabs-pane.vue'
import TabsItem from './tabs-item.vue'
import Popover from './popover.vue'
import Collapse from './collapse.vue'
import CollapseItem from './collapseItem.vue'
import Cascader from './cascader.vue'
import CascaderItem from './cascader-item.vue'

import chai from 'chai'
// click mock 测试click事件
import spies from 'chai-spies'

Vue.component('g-button', Button)
Vue.component('g-icon', Icon)
Vue.component('g-button-group', GButtonGroup)
Vue.component('g-input', GInput)
Vue.component('g-row', GRow)
Vue.component('g-col', GCol)
Vue.component('g-layout', GLayout)
Vue.component('g-header', GHeader)
Vue.component('g-sider', GSider)
Vue.component('g-content', GContent)
Vue.component('g-footer', GFooter)
Vue.component('g-toast', GToast)
Vue.component('g-tabs', Tabs)
Vue.component('g-tabs-nav', TabsNav)
Vue.component('g-tabs-content', TabsContent)
Vue.component('g-tabs-pane', TabsPane)
Vue.component('g-tabs-item', TabsItem)
Vue.component('g-popover', Popover)
Vue.component('g-collapse', Collapse)
Vue.component('g-collapse-item', CollapseItem)

Vue.use(plugin)

const vm = new Vue({
  el: '#app',
  data () {
    return {
      loading1: false,
      loading2: true,
      loading3: false,
      name: '王五',
      selectedTab: 'sports',
      selectedCollapse: '2'
    }
  },
  mounted () {
    // this.$toast()
  },
  methods: {
    inputChange (e) {
      console.log('change', e.target.value)
    },
    showToast (pos) {
      this.$toast('我是Toast11111111111111111111', {
        autoClose: false,
        toastOptions: {
          text: 'ok',
          callback: () => {
            alert('toast关闭了!')
          }
        },
        position: pos
      })
    }
  }
})

const expect = chai.expect

// 单元测试
// 测试icon是否设置成功
// {
//   const Constructor = Vue.extend(Button)
//   const button = new Constructor({
//     propsData: {
//       icon: 'settings',
//     },
//   })
//   button.$mount('#test')

//   let useElement = button.$el.querySelector('use')
//   expect(useElement.getAttribute('xlink:href')).to.eq('#i-settings')
// }
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

  const useElement = button.$el.querySelector('use')
  const href = useElement.getAttribute('xlink:href')
  expect(href).to.eq('#i-loading')
}
// oder 测试icon的位置
{
  const div = document.createElement('div')
  document.body.appendChild(div)
  const Constructor = Vue.extend(Button)
  const button = new Constructor({
    propsData: {
      icon: 'settings',
      iconPosition: 'right'
    }
  })
  button.$mount(div)

  const svg = button.$el.querySelector('svg')
  const { order } = window.getComputedStyle(svg)
  expect(order).to.eq('2')
  button.$el.remove()
  button.$destroy()
}
{
  const div = document.createElement('div')
  document.body.appendChild(div)
  const Constructor = Vue.extend(Button)
  const button = new Constructor({
    propsData: {
      icon: 'settings'
    }
  })
  button.$mount(div)

  const svg = button.$el.querySelector('svg')
  const { order } = window.getComputedStyle(svg)
  expect(order).to.eq('1')
  button.$el.remove()
  button.$destroy()
}

chai.use(spies)
{
  const Constructor = Vue.extend(Button)
  const vm = new Constructor({
    propsData: {
      icon: 'settings'
    }
  })
  vm.$mount()
  const spy = chai.spy(() => {})
  vm.$on('click', spy)
  const button = vm.$el
  button.click()
  expect(spy).to.have.been.called()
}
