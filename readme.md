# cryptomancy-methods

> algorithms with pluggable entropy

This module implements algorithms which require a source of entropy, and allow you to provide that source for different purposes.

## Usage

```js
// implements various sources of entropy
var Source = require('cryptomancy-source');

// consumes an entropy source and implements _random_ algorithms
var Methods = require('cryptomancy-methods');

// instantiate an insecure random number generator
var insecure = Source.insecure();

console.log(insecure()); // 8938312248563971

// create a deterministic source of bytes (Uint8Arrays)
var deterministic = Source.bytes.deterministic(100);

// log 24 bytes from your deterministic stream
console.log(deterministic(24))
```

## API

```js
var Methods = require('cryptomancy-methods');
var Source = require('cryptomancy-source');

// instantiate a cryptographically secure source of entropy
var s = Source.secure();

// instantiate a die which will utilize this source of entropy
var d = Methods.die(s); // d(n) => integer between 0 and n, exclusive

// instantiate a secure coin using your source
var coin = Methods.coin(s); // coin() => true or false

// create a source of random floating point numbers
var floater = Methods.floating_point(s); // floater() => rand between zero and one

var list = [1,2,3];

// a perturbed list is shuffled such that no element remains in its original position
var perturbed = Methods.perturb(die, list.slice(0));

// a shuffled list can contain elements which occupy their original position
var shuffled = Methods.shuffle(die, list.slice(0));
```

## Install

With [npm](https://npmjs.org/) installed, run

```
$ npm install cryptomancy-methods
```

## Acknowledgments

cryptomancy-methods uses some nifty algorithms pilfered from stackoverflow.

## See Also

- [`ansuz/cryptomancy-source`](https://www.npmjs.com/package/cryptomancy-source)

## License

License Zero

