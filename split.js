module.exports = split

var multi = require('multichar-regex')
var marker = require('./util/marker')

function split (string, point) {
  if (point == null) return [string]

  var characters = string
    .replace(multi, marker(string))
    .split(point || '')

  var reindex = 0, match
  while (match = multi.exec(string)) {
    match.index -= reindex
    reindex += match[0].length - 1
    characters.splice(match.index, 1, match[0])
  }

  return characters
}
