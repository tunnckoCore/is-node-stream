/*!
 * is-node-stream <https://github.com/tunnckoCore/is-node-stream>
 *
 * Copyright (c) 2015 Charlike Mike Reagent <@tunnckoCore> (http://www.tunnckocore.tk)
 * Released under the MIT license.
 */

/* jshint asi:true */

'use strict'

var fs = require('fs')
var net = require('net')
var test = require('assertit')
var stream = require('stream')
var isNodeStream = require('./index')

test('isNodeStream() return `true` for streams only', function (done) {
  test.equal(isNodeStream(new stream.Stream()), true)
  test.equal(isNodeStream(new stream.Duplex()), true)
  test.equal(isNodeStream(new stream.Readable()), true)
  test.equal(isNodeStream(new stream.Writable()), true)
  test.equal(isNodeStream(new stream.Transform()), true)
  test.equal(isNodeStream(new stream.PassThrough()), true)
  test.equal(isNodeStream(new net.Socket()), true)
  test.equal(isNodeStream(fs.createReadStream('package.json')), true)
  done()
})

test('isNodeStream() return `false` otherwise', function (done) {
  var fakeOne = {
    pipe: function fake () {}
  }
  var fakeTwo = []
  fakeTwo.pipe = function fakePipe () {}

  test.equal(isNodeStream(undefined), false)
  test.equal(isNodeStream(null), false)
  test.equal(isNodeStream(1234), false)
  test.equal(isNodeStream('foo'), false)
  test.equal(isNodeStream({a: 'b'}), false)
  test.equal(isNodeStream(fakeOne), false)
  test.equal(isNodeStream(fakeTwo), false)
  done()
})

test('isNodeStream.readable() return `true` for readable streams', function (done) {
  test.equal(isNodeStream.readable(process.stdin), true)
  test.equal(isNodeStream.readable(new stream.Duplex()), true)
  test.equal(isNodeStream.readable(new stream.Readable()), true)
  test.equal(isNodeStream.readable(new stream.Transform()), true)
  test.equal(isNodeStream.readable(new stream.PassThrough()), true)
  test.equal(isNodeStream.readable(fs.createReadStream('package.json')), true)
  done()
})

test('isNodeStream.readable() return `false` otherwise', function (done) {
  test.equal(isNodeStream.readable(process.stdout), false)
  test.equal(isNodeStream.readable(new stream.Writable()), false)
  test.equal(isNodeStream.readable(fs.createWriteStream('foobar.log')), false)
  done()
})

test('isNodeStream.writable() returns `true` for writable streams', function (done) {
  test.equal(isNodeStream.writable(fs.createWriteStream('foobar.log')), true)
  test.equal(isNodeStream.writable(new stream.PassThrough()), true)
  test.equal(isNodeStream.writable(new stream.Transform()), true)
  test.equal(isNodeStream.writable(new stream.Writable()), true)
  test.equal(isNodeStream.writable(new stream.Duplex()), true)
  test.equal(isNodeStream.writable(process.stdout), true)
  done()
})

test('isNodeStream.writable() return `false` otherwise', function (done) {
  test.equal(isNodeStream.writable(fs.createReadStream('package.json')), false)
  test.equal(isNodeStream.writable(new stream.Readable()), false)
  test.equal(isNodeStream.writable(process.stdin), false)
  done()
})

test('isNodeStream.duplex() return `true` for duplex streams', function (done) {
  test.equal(isNodeStream.duplex(new stream.Duplex()), true)
  test.equal(isNodeStream.duplex(new stream.Transform()), true)
  test.equal(isNodeStream.duplex(new stream.PassThrough()), true)
  done()
})

test('isNodeStream.duplex() return `false` otherwise', function (done) {
  test.equal(isNodeStream.duplex(new stream.Readable()), false)
  test.equal(isNodeStream.duplex(new stream.Writable()), false)
  done()
})
