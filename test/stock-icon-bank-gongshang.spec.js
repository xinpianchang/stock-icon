import { mount } from '@vue/test-utils'
import IconBankGongShang from '@/IconBankGongShang'

describe('stock-icon', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(IconBankGongShang)
    expect(wrapper.vm).toBeTruthy()
  })
})
