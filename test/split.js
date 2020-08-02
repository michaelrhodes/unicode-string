var f = require('./fixtures')
var split = require('../split')

console.assert(
  split(f.darkness, '').length === 9 &&
  f.darkness.split('').length > 9,
  'darkness'
)
console.assert(
  split(f.beast, '').length === 28 &&
  f.beast.split('').length === 34,
  'beast'
)
console.assert(
  split(f.hell, '').length === 33 &&
  f.hell.split('').length === 36,
  'hell'
)
console.assert(
  '•••'.split('•').length === 4 &&
  '•••'.split('•').join('') === '' &&
  split('•••', '•').length === 4 &&
  split('•••', '•').join('') === '',
  '•••'
)
console.assert(
  split(String.fromCharCode(0,0,0), '').length === 3,
  'null * 3'
)
