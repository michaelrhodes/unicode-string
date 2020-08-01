module.exports = substr

var split = require('./split')

function substr (string, start, length) {
  return (length = length == null ? string.length : length) < 0 ? '' :
  split(string, '').slice(start, start + length).join('')
}
