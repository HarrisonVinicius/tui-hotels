import BaseButton from './BaseButton.vue'
import { mount } from '@vue/test-utils'

const wrapper = mount(BaseButton)

describe('BaseButton', () => {
  it('Shoud returns click event', async () => {
    const button = wrapper.findComponent({ ref: 'baseButton' })
    await button.trigger('click')
    expect(wrapper.emitted().click).toBeTruthy()
  })
})
