import IconBankGongShang from './IconBankGongShang.vue'
import IconArrowDown from './IconArrowDown.vue'
import IconCart from './IconCart.vue'
import IconDownload from './IconDownload.vue'
import IconQuestion from './IconQuestion.vue'
import IconQzone from './IconQzone.vue'
import IconWeibo from './IconWeibo.vue'
import IconWeixin from './IconWeixin.vue'
import IconRefresh from './IconRefresh.vue'
import IconStar from './IconStar.vue'
import IconStarSelected from './IconStarSelected.vue'


const IconList = {
  IconBankGongShang: IconBankGongShang,
  IconArrowDown: IconArrowDown,
  IconCart: IconCart,
  IconDownload: IconDownload,
  IconQuestion: IconQuestion,
  IconQzone: IconQzone,
  IconWeibo: IconWeibo,
  IconWeixin: IconWeixin,
  IconRefresh: IconRefresh,
  IconStar: IconStar,
  IconStarSelected: IconStarSelected
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