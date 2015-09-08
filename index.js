/*!
 * is-node-stream <https://github.com/tunnckoCore/is-node-stream>
 *
 * Copyright (c) 2015 Charlike Mike Reagent <@tunnckoCore> (http://www.tunnckocore.tk)
 * Released under the MIT license.
 */

'use strict'

var isNodeEmitter = require('is-node-emitter')

/**
 * Expose `is-node-stream`
 */

module.exports = isNodeStream

/**
 * > Stict check if a value is stream.
 *
 * @param {Stream} `[stream]`
 * @returns {Boolean}
 * @api public
 */

function isNodeStream (stream) {
  return isNodeEmitter(stream) && typeof stream.pipe === 'function'
}

isNodeStream.writable = function (stream) {
  return isNodeStream(stream) && isWritable(stream)
}

isNodeStream.readable = function (stream) {
  return isNodeStream(stream) && isReadable(stream)
}

isNodeStream.duplex = function (stream) {
  return isNodeStream(stream) && isWritable(stream) && isReadable(stream)
}

/**
 * utils
 */

function isWritable (stream) {
  return stream.writable !== false &&
  typeof stream._write === 'function' &&
  typeof stream._writableState === 'object'
}

function isReadable (stream) {
  return stream.readable !== false &&
  typeof stream._read === 'function' &&
  typeof stream._readableState === 'object'
}

