import BaseCard from './BaseCard.vue'
import { mount } from '@vue/test-utils'

const wrapper = mount(BaseCard, {
  propsData: {
    countryId: 0,
  },
})

describe('BaseCard', () => {
  it('Shoud add the Portugal background css class', async () => {
    expect(wrapper.classes()).toContain('portugal-background')
  })
})
