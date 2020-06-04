import Toast from './toast.vue'

function createToast(Vue, { message, propsData }) {
  const Constructor = Vue.extend(Toast)
  let toast = new Constructor({
    propsData,
  })
  toast.$slots.default = [message]
  toast.$mount()
  document.body.appendChild(toast.$el)
  return toast
}

let currentToast

export default {
  install(Vue, options) {
    Vue.prototype.$toast = function(message, toastOptions) {
      if (currentToast) {
        console.log(11111111111111111111111)
        currentToast.close()
      }
      currentToast = createToast(Vue, { message, propsData: toastOptions })
    }
  },
}
