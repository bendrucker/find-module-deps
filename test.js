'use strict'

var test = require('tape')
var findDeps = require('./')

test(function (t) {
  t.deepEqual(findDeps(''), [])
  t.deepEqual(findDeps('require("foo")'), ['foo'])
  t.deepEqual(findDeps('require("foo");require("foo");'), ['foo'])
  t.end()
})
