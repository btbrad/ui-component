import Vue from 'vue'
// import 'core-js/shim'
// import '@babel/polyfill'

import Demo from './demo.vue'

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
Vue.component('g-cascader', Cascader)
Vue.component('g-cascader-item', CascaderItem)

Vue.config.productionTip = false

new Vue({
  render: (h) => h(Demo)
}).$mount('#app')
