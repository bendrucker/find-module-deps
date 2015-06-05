'use strict'

var hasRequire = require('has-require')
var detective = require('detective')
var unique = require('array-uniq')

module.exports = function findModuleDeps (code, options) {
  options = options || {}
  if (!hasRequire.any(code)) return []
  var requires = detective(code, {word: options.word})
  return unique(requires)
}
