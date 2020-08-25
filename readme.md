# unicode-string
a collection of unicode-aware string functions

[![ci](https://travis-ci.org/michaelrhodes/unicode-string.svg?branch=master)](https://travis-ci.org/michaelrhodes/unicode-string)

## install
```sh
npm install https://pkg.mkr.sx/unicode-string/2.1.0.tgz
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

console.log(string.slice(0, -2))
=> o 🇨
console.log(uni.slice(string, 0, -2))
=> o
```

## obey
[CC0-1.0](https://creativecommons.org/publicdomain/zero/1.0/)
