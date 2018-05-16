import Vue from 'vue'

export function getMixin () {
  console.log('aaaa')
  Vue.mixin({
    data () {
      return {
        testMsg: 'Test Message'
      }
    }
  })
  console.log('aaaa2')
}
