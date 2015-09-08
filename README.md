# [is-node-stream][author-www-url] [![npmjs.com][npmjs-img]][npmjs-url] [![The MIT License][license-img]][license-url] 

> Strictly and correctly checks if value is a nodejs stream.

[![code climate][codeclimate-img]][codeclimate-url] [![standard code style][standard-img]][standard-url] [![travis build status][travis-img]][travis-url] [![coverage status][coveralls-img]][coveralls-url] [![dependency status][david-img]][david-url]


## Install
```
npm i is-node-stream --save
```


## Usage
> For more use-cases see the [tests](./test.js)

```js
var stream = require('stream')
var isNodeStream = require('is-node-stream')
```

### isNodeStream(val) returns `true` when

```js
isNodeStream(new stream.Stream())
isNodeStream(new stream.Duplex())
isNodeStream(new stream.Readable())
isNodeStream(new stream.Writable())
isNodeStream(new stream.Transform())
isNodeStream(new stream.PassThrough())
isNodeStream(new net.Socket())
isNodeStream(fs.createReadStream('package.json'))
```

### isNodeStream.readable(val) returns `true` when

```js
isNodeStream.readable(process.stdin)
isNodeStream.readable(new stream.Duplex())
isNodeStream.readable(new stream.Readable())
isNodeStream.readable(new stream.Transform())
isNodeStream.readable(new stream.PassThrough())
isNodeStream.readable(fs.createReadStream('package.json'))
```
### isNodeStream.writable(val) returns `true` when

```js
isNodeStream.writable(process.stdout)
isNodeStream.writable(new stream.Duplex())
isNodeStream.writable(new stream.Writable())
isNodeStream.writable(new stream.Transform())
isNodeStream.writable(new stream.PassThrough())
isNodeStream.writable(fs.createWriteStream('foobar'))
```

### isNodeStream.duplex(val) returns `true` when

```js
isNodeStream.duplex(new stream.Duplex())
isNodeStream.duplex(new stream.Transform())
isNodeStream.duplex(new stream.PassThrough())
```


## Related
- [dush](https://github.com/tunnckocore/dush): Minimalist 1.5kb event delegation for the browser (IE8+) and nodejs.
- [is-emitter](https://github.com/tunnckocore/is-emitter): Check that given value is EventEmitter, not so strict as `is-node-emitter`.
- [is-node-emitter](https://github.com/tunnckocore/is-node-emitter): Strictly checks that given value is nodejs EventEmitter… [more](https://github.com/jonschlinkert/to-emitter)
- [is-stream](https://github.com/sindresorhus/is-stream): Check if something is a Node.js stream
- [to-emitter](https://github.com/jonschlinkert/to-emitter): Convert any object into an event-emitter, and emits events with the… [more](https://github.com/jonschlinkert/to-emitter)


## Contributing
Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](https://github.com/tunnckoCore/is-node-stream/issues/new).  
But before doing anything, please read the [CONTRIBUTING.md](./CONTRIBUTING.md) guidelines.


## [Charlike Make Reagent](http://j.mp/1stW47C) [![new message to charlike][new-message-img]][new-message-url] [![freenode #charlike][freenode-img]][freenode-url]

[![tunnckocore.tk][author-www-img]][author-www-url] [![keybase tunnckocore][keybase-img]][keybase-url] [![tunnckoCore npm][author-npm-img]][author-npm-url] [![tunnckoCore twitter][author-twitter-img]][author-twitter-url] [![tunnckoCore github][author-github-img]][author-github-url]


[npmjs-url]: https://www.npmjs.com/package/is-node-stream
[npmjs-img]: https://img.shields.io/npm/v/is-node-stream.svg?label=is-node-stream

[license-url]: https://github.com/tunnckoCore/is-node-stream/blob/master/LICENSE.md
[license-img]: https://img.shields.io/badge/license-MIT-blue.svg


[codeclimate-url]: https://codeclimate.com/github/tunnckoCore/is-node-stream
[codeclimate-img]: https://img.shields.io/codeclimate/github/tunnckoCore/is-node-stream.svg

[travis-url]: https://travis-ci.org/tunnckoCore/is-node-stream
[travis-img]: https://img.shields.io/travis/tunnckoCore/is-node-stream.svg

[coveralls-url]: https://coveralls.io/r/tunnckoCore/is-node-stream
[coveralls-img]: https://img.shields.io/coveralls/tunnckoCore/is-node-stream.svg

[david-url]: https://david-dm.org/tunnckoCore/is-node-stream
[david-img]: https://img.shields.io/david/tunnckoCore/is-node-stream.svg

[standard-url]: https://github.com/feross/standard
[standard-img]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg


[author-www-url]: http://www.tunnckocore.tk
[author-www-img]: https://img.shields.io/badge/www-tunnckocore.tk-fe7d37.svg

[keybase-url]: https://keybase.io/tunnckocore
[keybase-img]: https://img.shields.io/badge/keybase-tunnckocore-8a7967.svg

[author-npm-url]: https://www.npmjs.com/~tunnckocore
[author-npm-img]: https://img.shields.io/badge/npm-~tunnckocore-cb3837.svg

[author-twitter-url]: https://twitter.com/tunnckoCore
[author-twitter-img]: https://img.shields.io/badge/twitter-@tunnckoCore-55acee.svg

[author-github-url]: https://github.com/tunnckoCore
[author-github-img]: https://img.shields.io/badge/github-@tunnckoCore-4183c4.svg

[freenode-url]: http://webchat.freenode.net/?channels=charlike
[freenode-img]: https://img.shields.io/badge/freenode-%23charlike-5654a4.svg

[new-message-url]: https://github.com/tunnckoCore/ama
[new-message-img]: https://img.shields.io/badge/ask%20me-anything-green.svg