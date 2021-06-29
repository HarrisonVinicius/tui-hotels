import StarsStatus from './StarsStatus.vue'
import { mount } from '@vue/test-utils'

const wrapper = mount(StarsStatus, {
  propsData: {
    stars: 5,
  },
})

describe('StarsStatus', () => {
  it('Shoud generate 5 stars', async () => {
    expect(wrapper.vm.$data.starsArray).toStrictEqual([
      { star: '1' },
      { star: '1' },
      { star: '1' },
      { star: '1' },
      { star: '1' },
    ])
  })
})
