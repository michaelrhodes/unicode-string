var f = require('./fixtures')
var length = require('../length')

console.assert(
  length(f.darkness) === 9 &&
  f.darkness.length > 9,
  'darkness'
)
console.assert(
  length(f.beast) === 28 &&
  f.beast.length === 34,
  'beast'
)
console.assert(
  length(f.hell) === 40 &&
  f.hell.length === 43,
  'hell'
)
