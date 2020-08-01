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
  substr(f.hell, 0) === f.hell,
  'hell (start)'
)
console.assert(
  substr(f.hell, 0, 1) === '🇫🇷',
  'hell (start, length)'
)
console.assert(
  substr(f.hell, 2, 1) === 't',
  'hell (offset, length)'
)
console.assert(
  substr(f.hell, 2, -1) === '',
  'hell (offset, negative-length)'
)
console.assert(
  substr('•••🇨🇦••••', 3, 1) === '🇨🇦',
  '•••🇨🇦•••• (offset, length)'
)
