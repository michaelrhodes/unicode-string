var test = require('tape')
var f = require('./fixtures')
var split = require('../split')

test('split works', function (assert) {
  assert.ok(
    split(f.darkness, '').length === 9 &&
    f.darkness.split('').length > 9,
    'should be ok'
  )

  assert.ok(
    split(f.beast, '').length === 28 &&
    f.beast.split('').length === 34,
    'should be ok'
  )

  assert.ok(
    split(f.hell, '').length === 40 &&
    f.hell.split('').length === 43,
    'should be ok'
  )

  assert.ok(
    '•••'.split('•').length === 4 &&
    '•••'.split('•').join('') === '' &&
    split('•••', '•').length === 4 &&
    split('•••', '•').join('') === '',
    'should be ok'
  )

  assert.ok(
    split(String.fromCharCode(0,0,0), '').length === 3,
    'it chooses an available split point'
  )

  assert.end()
})
