// const expect = chai.expect;
// import Vue from 'vue'
// import Tabs from '../src/tabs'
// import TabsNav from '../src/tabs-nav'
// import TabsContent from '../src/tabs-content'
// import TabsItem from '../src/tabs-item'
// import TabsPane from '../src/tabs-pane'

// Vue.component('g-tabs', Tabs)
// Vue.component('g-tabs-nav', TabsNav)
// Vue.component('g-tabs-content', TabsContent)
// Vue.component('g-tabs-item', TabsItem)
// Vue.component('g-tabs-pane', TabsPane)

// Vue.config.productionTip = false
// Vue.config.devtools = false

// describe('Tabs', () => {

//   it('存在.', () => {
//     expect(Tabs).to.exist
//   })

//   it('接受 selected 属性', (done) => {

//     const div = document.createElement('div')
//     document.body.appendChild(div)
//     div.innerHTML = `
//       <g-tabs selected="finance">
//         <g-tabs-nav>
//           <g-tabs-item name="woman"> 美女 </g-tabs-item>
//           <g-tabs-item name="finance"> 财经 </g-tabs-item>
//           <g-tabs-item name="sports"> 体育 </g-tabs-item>
//         </g-tabs-nav>
//         <g-tabs-content>
//           <g-tabs-pane name="woman"> 美女相关资讯 </g-tabs-pane>
//           <g-tabs-pane name="finance"> 财经相关资讯 </g-tabs-pane>
//           <g-tabs-pane name="sports"> 体育相关资讯 </g-tabs-pane>
//         </g-tabs-content>
//       </g-tabs>
//     `
//     let vm = new Vue({
//       el: div
//     })
//     // vm.$nextTick(() => {
//     //   let x = vm.$el.querySelector(`.tabs-item[data-name="finance"]`)
//     //   console.log(11111, x)
//     //   expect(x.classList.contains('active')).to.be.true
//     //   done()
//     // })
//   })

//   // it('可以接受 direction prop', () => {

//   // })

// })