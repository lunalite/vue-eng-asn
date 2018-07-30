import Vue from 'vue'
import SideBarLink from '@/components/admin/app-sidebar/components/SideBarLink'
import Router from 'vue-router'
import router from '@/router'

Vue.use(Router)
describe('SideBarLink.vue', () => {
  it('should render correct routes', () => {
    const Constructor = Vue.extend(SideBarLink)
    const vm = new Constructor({
      propsData: {
        to: { name: 'dashboard' },
        target: '_blank'
      },
      router: router
    }).$mount()
    expect(vm.$el.querySelector('a').getAttribute('href'))
      .to.equal('#/admin/dashboard')
    expect(vm.$el.querySelector('a').getAttribute('target'))
      .to.equal('_blank')
  })
})
