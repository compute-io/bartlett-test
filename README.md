bartlett-test
===
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coverage Status][coveralls-image]][coveralls-url] [![Dependencies][dependencies-image]][dependencies-url]

> Compute [Bartlett’s test](https://en.wikipedia.org/wiki/Bartlett%27s_test) for equal variances.

[Bartlett's test](https://en.wikipedia.org/wiki/Bartlett%27s_test) is used to test the null hypothesis that the variances of k groups are equal against the alternative that at least two of them are different.

For `k` groups each with `n_i` observations, the test statistic is

<div class="equation" align="center" data-raw-text="
    \chi^2 = \frac{N\ln(S^2) - \sum_{i=0}^{k-1} n_i \ln(S_i^2)}{1 + \frac{1}{3(k-1)}\left(\sum_{i=0}^{k-1} \frac{1}{n_i} - \frac{1}{N}\right)}" data-equation="eq:bartlett-test-statistic">
	<img src="" alt="Equation for Bartlett's test statistic.">
	<br>
</div>

where `N = \sum_{i=0}^{k-1} n_i` is the total number of observations, `S_i` are the biased group-level variances and `S^2` is a (biased) pooled estimate for the variance.

## Installation

``` bash
$ npm install compute-bartlett-test
```

For use in the browser, use [browserify](https://github.com/substack/node-browserify).


## Usage

``` javascript
var bartlett = require( 'compute-bartlett-test' );
```

#### bartlett( a,b[c,...,k] )

What does this function do?


## Examples

``` javascript
var bartlett = require( 'compute-bartlett-test' );
```

To run the example code from the top-level application directory,

``` bash
$ node ./examples/index.js
```


## Tests

### Unit

Unit tests use the [Mocha](http://mochajs.org/) test framework with [Chai](http://chaijs.com) assertions. To run the tests, execute the following command in the top-level application directory:

``` bash
$ make test
```

All new feature development should have corresponding unit tests to validate correct functionality.


### Test Coverage

This repository uses [Istanbul](https://github.com/gotwarlost/istanbul) as its code coverage tool. To generate a test coverage report, execute the following command in the top-level application directory:

``` bash
$ make test-cov
```

Istanbul creates a `./reports/coverage` directory. To access an HTML version of the report,

``` bash
$ make view-cov
```


---
## License

[MIT license](http://opensource.org/licenses/MIT).


## Copyright

Copyright &copy; 2014-2015. The [Compute.io](https://github.com/compute-io) Authors.


[npm-image]: http://img.shields.io/npm/v/compute-bartlett-test.svg
[npm-url]: https://npmjs.org/package/compute-bartlett-test

[travis-image]: http://img.shields.io/travis/compute-io/bartlett-test/master.svg
[travis-url]: https://travis-ci.org/compute-io/bartlett-test

[coveralls-image]: https://img.shields.io/coveralls/compute-io/bartlett-test/master.svg
[coveralls-url]: https://coveralls.io/r/compute-io/bartlett-test?branch=master

[dependencies-image]: http://img.shields.io/david/compute-io/bartlett-test.svg
[dependencies-url]: https://david-dm.org/compute-io/bartlett-test

[dev-dependencies-image]: http://img.shields.io/david/dev/compute-io/bartlett-test.svg
[dev-dependencies-url]: https://david-dm.org/dev/compute-io/bartlett-test

[github-issues-image]: http://img.shields.io/github/issues/compute-io/bartlett-test.svg
[github-issues-url]: https://github.com/compute-io/bartlett-test/issues
