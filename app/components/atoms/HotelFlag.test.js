import HotelFlag from './HotelFlag.vue'
import { mount } from '@vue/test-utils'

const wrapper = mount(HotelFlag, {
  propsData: {
    label: 'Internet',
  },
})

describe('HotelFlag', () => {
  it('Shoud render the wifi icon', async () => {
    expect(wrapper.vm.$data.icon).toBe('wifi')
  })
})
