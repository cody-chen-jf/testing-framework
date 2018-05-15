let he = require('@/module/hello')
let t = require('@/module/test')

describe('hello', function () {
  it('# hello word', function () {
    let c = he.hello(1, 2)
    expect(c).to.eq(3)
  })

  it('# should return testing', function () {
    expect(he.testing('hehe')).to.eq('hehe')
    // expect(he.testing('testing')).to.eq('testing')
    expect(he.testing()).to.eq('null')
  })

  it('# test callHello', function () {
    expect(t.callHello(1, 2)).to.eq(3)
  })

  it('# test sinon spy', function () {
    sinon.spy(he, 'testing')
    he.testing('hehe')
    let spyCall = he.testing.getCall(0)
    expect('hehe').to.eq(spyCall.args[0])
  })

  it('# test sinon stub', function () {
    let st = sinon.stub
    st(he, 'hello').callsFake(function () {
      return 1
    })
    expect(he.hello(1, 2)).to.be.eq(1)
    he.hello.restore()
    expect(he.hello(1, 2)).to.be.eq(3)
  })
})
