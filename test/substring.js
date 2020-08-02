var f = require('./fixtures')
var length = require('../length')
var substring = require('../substring')
var banish = require('to-zalgo/banish')

console.assert(
  banish(substring(f.darkness, 0, 2)) === 'he',
  'darkness (start, end)'
)
console.assert(
  banish(substring(f.darkness, 3)) === 'cometh',
  'darkness (start)'
)
console.assert(
  substring(f.beast, 0, 3) === '6️⃣6️⃣6️⃣',
  'beast (start, end)'
)
console.assert(
  substring(f.beast, 5) === 'the number of the beast',
  'beast (start)'
)
console.assert(
  substring(f.hell, 0) === f.hell.substring(0),
  'hell (start)'
)
console.assert(
  substring(f.hell, length(f.hell) - 1, length(f.hell)) ===
  f.hell.substring(f.hell.length - 4, f.hell.length),
  'hell (start, end)'
)
console.assert(
  substring(f.hell, 2, 1) === f.hell.substring(2, 1),
  'hell (offset, end)'
)
console.assert(
  substring(f.hell, 2, -1) === f.hell.substring(2, -1),
  'hell (offset, negative-end)'
)
