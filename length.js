var multichars = require('multichar-regex')

module.exports = function (string) {
  return string.replace(multichars, '•').length
}
