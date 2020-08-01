var f = require('./fixtures')
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
  substring(f.hell, 0) === f.hell,
  'hell (start)'
)
console.assert(
  substring(f.hell, 0, 1) === '🇫🇷',
  'hell (start, end)'
)
console.assert(
  substring(f.hell, 2, 1) === ' ',
  'hell (offset, end)'
)
console.assert(
  substring(f.hell, 2, -1) === '🇫🇷 ',
  'hell (offset, negative-end)'
)
console.assert(
  substring('•••🇨🇦••••', 3, 1) === '••',
  '•••🇨🇦•••• (start, end)'
)
