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
import IconYen from './IconYen.vue'
import IconYenWhite from './IconYenWhite.vue'
import IconLogoRed from './IconLogoRed.vue'
import IconLogoWhite from './IconLogoWhite.vue'
import IconVipLogo from './IconVipLogo.vue'
import IconAuth from './IconAuth.vue'
import IconFree from './IconFree.vue'
import IconArrow from './IconArrow.vue'
import IconGratis from './IconGratis.vue'
import IconSearch from './IconSearch.vue'
import Iconcopyright from './Iconcopyright.vue'
import IconVipFree from './IconVipFree.vue'

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
  IconStarSelected: IconStarSelected,
  IconYen: IconYen,
  IconYenWhite: IconYenWhite,
  IconLogoRed: IconLogoRed,
  IconLogoWhite: IconLogoWhite,
  IconVipLogo: IconVipLogo,
  IconAuth: IconAuth,
  IconFree: IconFree,
  IconArrow: IconArrow,
  IconGratis: IconGratis,
  IconSearch: IconSearch,
  Iconcopyright: Iconcopyright,
  IconVipFree:IconVipFree
}

export default {
  install(Vue) {
    for (var k in IconList) {
      Vue.component(k, IconList[k])
    }
  }
}

export {
  IconBankGongShang,
  IconArrowDown,
  IconCart,
  IconDownload,
  IconQuestion,
  IconQzone,
  IconWeibo,
  IconWeixin,
  IconRefresh,
  IconStar,
  IconStarSelected,
  IconYen,
  IconYenWhite,
  IconLogoRed,
  IconLogoWhite,
  IconVipLogo,
  IconAuth,
  IconFree,
  IconArrow,
  IconGratis,
  IconSearch,
  Iconcopyright,
  IconVipFree
}