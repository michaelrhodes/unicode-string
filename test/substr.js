var f = require('./fixtures')
var substr = require('../substr')
var banish = require('to-zalgo/banish')

console.assert(
  banish(substr(f.darkness, 0, 2)) === 'he',
  'darkness (start, length)'
)
console.assert(
  banish(substr(f.darkness, 3)) === 'cometh',
  'darkness (start)'
)
console.assert(
  substr(f.beast, 0, 3) ===  '6️⃣6️⃣6️⃣',
  'beast (start, length)'
)
console.assert(
  substr(f.beast, 5) === 'the number of the beast',
  'beast (start)'
)
console.assert(
  substr(f.hell) === f.hell.substr(),
  'hell (no-start)'
)
console.assert(
  substr(f.hell, 0) === f.hell.substr(0),
  'hell (zero-start)'
)
console.assert(
  substr(f.hell, 1) === f.hell.substr(1),
  'hell (positive-start)'
)
console.assert(
  substr(f.hell, -1, 1) === f.hell.substr(-4, 4),
  'hell (start, length)'
)
console.assert(
  substr(f.hell, 2, 1) === f.hell.substr(2, 1),
  'hell (offset, length)'
)
console.assert(
  substr(f.hell, 2, -1) === f.hell.substr(2, -1),
  'hell (offset, negative-length)'
)
