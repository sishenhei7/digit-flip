import DigitFlip from './DigitFlip.vue'

const myPlugin = {
  install: function install (Vue) {
    Vue.component('DigitFlip', DigitFlip)
  }
}

export default myPlugin
