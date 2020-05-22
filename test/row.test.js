const expect = chai.expect;
 import Vue from 'vue'
 import Row from '../src/row'
 import Col from '../src/col'

 Vue.config.productionTip = false
 Vue.config.devtools = false

 describe('Row', () => {
     it('存在.', () => {
         expect(Row).to.exist
     })
    //  it('接受gutter', () => {
    //      const div = document.createElement('div')
    //      document.body.appendChild(div)
    //      const RowConstructor = Vue.extend(Row)
    //      const vm = new RowConstructor({
    //      propsData: {
    //          gutter: '20'
    //      }
    //      }).$mount(div)
    //      const ColConstructor = Vue.extend(Col)
    //      const col = new ColConstructor()
    //      Row.$children[0] = col
    //      console.log(row.$el.outerHTML)
    //      expect(1).to.eq(1)
    //      vm.$destroy()
    //  })
 })