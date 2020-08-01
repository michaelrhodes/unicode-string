var multi = require('multichar-regex')
var code = String.fromCharCode

module.exports = split

function split (string, point) {
  if (point == null) return [string]

  var n = 0, marker, characters, reindex, match
  while (string.indexOf(marker = code(n++)) >= 0) {}

  characters = string
    .replace(multi, marker)
    .split(point || '')

  reindex = 0
  while (match = multi.exec(string)) {
    match.index -= reindex
    reindex += match[0].length - 1
    characters.splice(match.index, 1, match[0])
  }

  return characters
}
