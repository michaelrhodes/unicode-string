# unicode-string
a collection of unicode-aware string functions

[![ci](https://travis-ci.org/michaelrhodes/unicode-string.svg?branch=master)](https://travis-ci.org/michaelrhodes/unicode-string)

## install
```sh
npm install unicode-string
```

## use
```js
var uni = require('unicode-string')

var string = 'o 🇨🇦'

console.log(string.length)
=> 6
console.log(uni.length(string))
=> 3

console.log(string.split(''))
=> [ 'o', ' ', '�', '�', '�', '�' ]
console.log(uni.split(string, ''))
=> [ 'o', ' ', '🇨🇦' ]

console.log(string.substring(2, 3))
=> �
console.log(uni.substring(string, 2, 3))
=> 🇨🇦

console.log(string.substr(2, 1))
=> �
console.log(uni.substr(string, 2, 1))
=> 🇨🇦
```

## obey
[MIT](http://opensource.org/licenses/MIT)
