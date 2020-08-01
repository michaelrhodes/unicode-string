var split = require('./split')

module.exports = substr

function substr (string, start, length) {
  length = isNaN(length) ? string.length : length
  var characters = split(string, '').slice(start, start + length)
  return length < 0 ? '' : characters.join('')
}
