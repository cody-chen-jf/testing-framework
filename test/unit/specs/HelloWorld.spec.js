import Vue from 'vue'
import HelloWorld from '@/components/HelloWorld'
import { mount } from '@vue/test-utils'

describe('HelloWorld.vue', () => {
  before(function() {
    Vue.mixin({
      data () {
        return {
          testMsg: 'Test Message'
        }
      }
    })
  })
  
  it('should render correct contents', () => {
    const Constructor = Vue.extend(HelloWorld)
    const vm = new Constructor().$mount()
    console.log(vm.testFn('cody22'))
    expect(vm.$el.querySelector('.hello h1').textContent).to.equal('Welcome to Your Vue.js App')
  })
  
  it('should get the testFn', () => {
    const wrapper = mount(HelloWorld)
    const vm = wrapper.vm
    console.log(wrapper.attributes())
    console.log(vm.testFn('cody'))
  })
})
