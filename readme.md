# unicode-string

This is a collection of unicode-aware string functions intended to be required as standalone modules.

[![Build status](https://travis-ci.org/michaelrhodes/unicode-string.svg?branch=master)](https://travis-ci.org/michaelrhodes/unicode-string)

## Install

```sh
$ npm install unicode-string
```

## Usage

```js
var length = require('unicode-string/length')
var chars = require('unicode-string/chars')
var substring = require('unicode-string/substring')
var substr = require('unicode-string/substr')

var string = 'o 🇨🇦'

// length
console.log(string.length)
=> 6
console.log(length(string))
=> 3

// chars (ie. split(''))
console.log(string.split(''))
=> [ 'o', ' ', '�', '�', '�', '�' ]
console.log(chars(string))
=> [ 'o', ' ', '🇨🇦' ]

// substring
console.log(string.substring(2, 3))
=> �
console.log(substring(string, 2, 3))
=> 🇨🇦

// substr
console.log(string.substr(2, 1))
=> �
console.log(substr(string, 2, 1))
=> 🇨🇦
```

### index.js weight (browserified)

| compression              |    size |
| :----------------------- | ------: |
| unicode-string.js        |  2.5 kB |
| unicode-string.min.js    | 1.77 kB |
| unicode-string.min.js.gz |   721 B |


## License

[MIT](http://opensource.org/licenses/MIT)
