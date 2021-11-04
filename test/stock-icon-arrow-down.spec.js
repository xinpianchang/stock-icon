import { mount } from '@vue/test-utils'
import IconArrowDown from '@/IconArrowDown'

describe('stock-icon', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(IconArrowDown)
    expect(wrapper.vm).toBeTruthy()
  })
})
