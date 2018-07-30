import Vue from 'vue'
import MessageDropdown from '@/components/admin/app-navbar/components/dropdowns/MessageDropdown'

describe('MessageDropdown.vue', () => {
  it('should render correct values', () => {
    const Constructor = Vue.extend(MessageDropdown)
    const vm = new Constructor({
      propsData: {
        options: [
          {
            name: 'new',
            details: {
              name: 'Oleg X'
            }
          }
        ]
      },
    }).$mount()
    expect(vm.$el.querySelector('.dropdown-item span').innerText)
      .to.equal('New messages from Oleg X')
  })
})
