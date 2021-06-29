import BaseInput from './BaseInput.vue'
import { mount } from '@vue/test-utils'

const wrapper = mount(BaseInput)

describe('BaseInput', () => {
  it('Shoud returns the input value', async () => {
    const searchInput = wrapper.find('input[type="text"]')
    await searchInput.setValue('testing')
    expect(wrapper.vm.$data.value).toBe('testing')
  })
})
