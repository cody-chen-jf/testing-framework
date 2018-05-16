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
    let callback = sinon.spy(vm, 'testFn')

    console.log(callback)
    console.log(vm.testFn('cody'))
    console.log(vm.testFn('cody2'))
    console.log(vm.testFn('cody3'))
    console.log(callback.getCall(0).args[0])
    // console.log(callback.calledWith('cody2'))
    console.log(callback.calledOnce)
    console.log(callback.callCount)
    console.log(callback.args)
    console.log(callback.lastCall.args[0])
  })

  it('should test the sinon stub', () => {
    const wrapper = mount(HelloWorld)
    const vm = wrapper.vm
    // let callback = sinon.stub(vm, 'testFn')
    // console.log('stub === ', callback)
    // callback.withArgs(111).returns(2)
    //
    // callback.onCall(0).returns(1)
    // callback.onCall(1).returns(2)
    // callback.returns(3)
    //
    // console.log(callback()) // Returns 1
    // console.log(callback()) // Returns 2
    // console.log(callback()) // All following calls return 3

    let callback1 = sinon.stub(vm, 'testFn')
    callback1.withArgs('cody').returns('Welcome to Your Vue.js Appcody')
    callback1.withArgs('cody2').returns('Welcome to Your Vue.js Appcody2')

    console.log(callback1())
    console.log(callback1(42))
    console.log(callback1('cody'))
    console.log(callback1.callsArg(0))
  })
})
