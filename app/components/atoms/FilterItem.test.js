import FilterItem from './FilterItem.vue'
import { mount } from '@vue/test-utils'

const wrapper = mount(FilterItem)

describe('FilterItem', () => {
  it('Shoud returns click event', async () => {
    const item = wrapper.findComponent({ ref: 'filterItem' })
    await item.trigger('click')
    expect(wrapper.emitted().click).toBeTruthy()
  })
})
