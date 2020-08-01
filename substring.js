module.exports = substring

var split = require('./split')

function substring (string, start, end) {
  end = end == null ? string.length - 1 : end
  return split(string, '').slice(
    Math.max(0, end < start ? (start + (end - start)) : start),
    Math.max(start, end)
  ).join('')
}
