const expect = chai.expect;
 import Vue from 'vue'
 import Input from '../src/input'

 Vue.config.productionTip = false
 Vue.config.devtools = false

 describe('Input', () => {

     it('存在.', () => {
         expect(Input).to.exist
     })

     describe('props',() => {

      const Constructor = Vue.extend(Input)
      let vm
      afterEach(function(){
        vm.$destroy()
      })

      it('可以接受value.', () => {
          vm = new Constructor({
          propsData: {
              value: 'test'
          }
          }).$mount()
          const element = vm.$el.querySelector('input')
          expect(element.value).to.equal('test')
      })

      it('可以接受disabled.', () => {
        vm = new Constructor({
        propsData: {
            disabled: true
        }
        }).$mount()
        const element = vm.$el.querySelector('input')
        expect(element.disabled).to.equal(true)
      })

      it('可以接受readonly.', () => {
        vm = new Constructor({
        propsData: {
            readonly: true
        }
        }).$mount()
        const element = vm.$el.querySelector('input')
        expect(element.readOnly).to.equal(true)
      })

      it('接受error', () => {
        vm = new Constructor({
        propsData: {
            error: '密码不能为空'
        }
        }).$mount()
        const errorSpan = vm.$el.querySelector('span')
        const icon = vm.$el.querySelector('use')
        expect(errorSpan.innerHTML).to.equal('密码不能为空')
        expect(icon.getAttribute('xlink:href')).to.equal('#i-error')
      })

     })
     describe('事件', () => {

      const Constructor = Vue.extend(Input)
      let vm
      afterEach(function(){
        vm.$destroy()
      })

      it('触发 change|input|focus|blur 事件', () => {
        ['change', 'input', 'focus', 'blur'].forEach(item => {
          vm = new Constructor().$mount()
          const callback = sinon.fake();
          vm.$on(item, callback)
          let event = new Event(item)
          vm.$el.querySelector('input').dispatchEvent(event)
          expect(callback).to.have.been.calledWith(event)
        })
      })

      // it('触发 input 事件', () => {
      //   vm = new Constructor().$mount()
      //   const callback = sinon.fake();
      //   vm.$on('input', callback)
      //   let event = new Event('input')
      //   vm.$el.querySelector('input').dispatchEvent(event)
      //   expect(callback).to.have.been.calledWith(event)
      // })

      // it('触发 focus 事件', () => {
      //   vm = new Constructor().$mount()
      //   const callback = sinon.fake();
      //   vm.$on('focus', callback)
      //   let event = new Event('focus')
      //   vm.$el.querySelector('input').dispatchEvent(event)
      //   expect(callback).to.have.been.calledWith(event)
      // })

      // it('触发 blur 事件', () => {
      //   vm = new Constructor().$mount()
      //   const callback = sinon.fake();
      //   vm.$on('blur', callback)
      //   let event = new Event('blur')
      //   vm.$el.querySelector('input').dispatchEvent(event)
      //   expect(callback).to.have.been.calledWith(event)
      // })
    })
 })