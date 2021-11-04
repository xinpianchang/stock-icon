import IconBankGongShang from './IconBankGongShang.vue'


const IconList = {
  IconBankGongShang: IconBankGongShang
}

export default {
  install (Vue) {
    for (var k in IconList) {
      Vue.component(k, IconList[key])
    }
  }
}

export {
  IconBankGongShang
}