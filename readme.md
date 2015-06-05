# find-module-deps [![Build Status](https://travis-ci.org/bendrucker/find-module-deps.svg?branch=master)](https://travis-ci.org/bendrucker/find-module-deps)

> Find all the dependencies of a module


## Install

```
$ npm install --save find-module-deps
```


## Usage

```js
var findModuleDeps = require('find-module-deps');

findModuleDeps('require("foo");require("foo")');
//=> ['foo']
```

## API

#### `findModuleDeps(code, options)` -> `array[string]`

##### code

*Required*  
Type: `string`

The code to search.

##### options

* word
  * type: `string`
  * default: `'require'`

The function that imports dependencies.

## License

MIT © [Ben Drucker](http://bendrucker.me)
