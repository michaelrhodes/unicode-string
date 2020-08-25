var f = require('./fixtures')
var length = require('../length')
var slice = require('../slice')
var banish = require('to-zalgo/banish')

console.assert(
  banish(slice(f.darkness, 0, 2)) === 'he',
  'darkness (start, end)'
)
console.assert(
  banish(slice(f.darkness, 3)) === 'cometh',
  'darkness (start)'
)
console.assert(
  slice(f.beast, 0, 3) === '6️⃣6️⃣6️⃣',
  'beast (start, end)'
)
console.assert(
  slice(f.beast, 5) === 'the number of the beast',
  'beast (start)'
)
console.assert(
  slice(f.hell, 0) === f.hell.slice(0),
  'hell (start)'
)
console.assert(
  slice(f.hell, length(f.hell) - 1, length(f.hell)) ===
  f.hell.slice(f.hell.length - 4, f.hell.length),
  'hell (start, end)'
)
console.assert(
  slice(f.hell, 2, 1) === f.hell.slice(2, 1),
  'hell (offset, end)'
)
console.assert(
  slice(f.hell, 2, -1) === f.hell.slice(2, -4),
  'hell (offset, negative-end)'
)
