var multichars = require('multichar-regex')
var chars = require('./chars')

module.exports = function (string, start, length) {
  length = isNaN(length) ? string.length : length
  var characters = chars(string).slice(start, start + length)
  return length < 0 ? '' : characters.join('') 
}
