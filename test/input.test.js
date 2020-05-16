const expect = chai.expect;
 import Vue from 'vue'
 import Input from '../src/input'

 Vue.config.productionTip = false
 Vue.config.devtools = false

 describe('Input', () => {

     it('存在.', () => {
         expect(Input).to.exist
     })

     it('可以接受value.', () => {
         const Constructor = Vue.extend(Input)
         const vm = new Constructor({
         propsData: {
             value: 'test'
         }
         }).$mount()
         const element = vm.$el.querySelector('input')
         expect(element.value).to.equal('test')
         vm.$destroy()
     })

    it('可以接受disabled.', () => {
      const Constructor = Vue.extend(Input)
      const vm = new Constructor({
      propsData: {
          disabled: true
      }
      }).$mount()
      const element = vm.$el.querySelector('input')
      expect(element.disabled).to.equal(true)
      vm.$destroy()
    })

    it('可以接受readonly.', () => {
      const Constructor = Vue.extend(Input)
      const vm = new Constructor({
      propsData: {
          readonly: true
      }
      }).$mount()
      const element = vm.$el.querySelector('input')
      expect(element.readOnly).to.equal(true)
      vm.$destroy()
    })

 })