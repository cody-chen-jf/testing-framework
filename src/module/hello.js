let hello = (a, b) => {
  return a + b
}

let testing = a => {
  if (a === 'hehe') {
    return 'hehe'
  } else if (a === 'testing') {
    return 'testing'
  } else {
    return 'null'
  }
}

module.exports.testing = testing
module.exports.hello = hello
