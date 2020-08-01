# unicode-string
a collection of unicode-aware string functions

[![ci](https://travis-ci.org/michaelrhodes/unicode-string.svg?branch=master)](https://travis-ci.org/michaelrhodes/unicode-string)

## install
```sh
$ npm install unicode-string
```

## use
```js
var length = require('unicode-string/length')
var split = require('unicode-string/split')
var substr = require('unicode-string/substr')
var substring = require('unicode-string/substring')

var string = 'o 🇨🇦'

console.log(string.length)
=> 6
console.log(length(string))
=> 3

console.log(string.split(''))
=> [ 'o', ' ', '�', '�', '�', '�' ]
console.log(split(string, ''))
=> [ 'o', ' ', '🇨🇦' ]

console.log(string.substring(2, 3))
=> �
console.log(substring(string, 2, 3))
=> 🇨🇦

console.log(string.substr(2, 1))
=> �
console.log(substr(string, 2, 1))
=> 🇨🇦
```

| compression                    |    size |
| :----------------------------- | ------: |
| unicode-string/index.js        | 2.43 kB |
| unicode-string/index.min.js    |  1.7 kB |
| unicode-string/index.min.js.gz |   699 B |


## obey
[MIT](http://opensource.org/licenses/MIT)
