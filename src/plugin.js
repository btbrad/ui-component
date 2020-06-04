import Toast from './toast.vue'

export default {
  install(Vue, options) {
    Vue.prototype.$toast = function(message) {
      const Constructor = Vue.extend(Toast)
      let toast = new Constructor({
        propsData: {
          autoClose: false,
          closeButton: {
            text: '知道了',
            callback: () => {
              console.log('知道了!!!!!')
            },
          },
        },
      })
      toast.$slots.default = [message]
      toast.$mount()
      document.body.appendChild(toast.$el)
    }
  },
}
