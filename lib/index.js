'use strict';

// MODULES //

var sum = require( 'compute-sum' ),
	variance = require( 'compute-variance' ),
	multiply = require( 'compute-multiply' ),
	divide = require( 'compute-divide' ),
	roundn = require( 'compute-roundn' ),
	log = require( 'compute-log' ),
	isArrayLike = require( 'validate.io-array-like' ),
	chisqCDF = require( 'jStat' ).jStat.chisquare.cdf;


// BARTLETT'S TEST //

/**
* FUNCTION: bartlett()
*	Compute Bartlett’s test for equal variances.
* @param {} arguments - either two or more number arrays
* @returns {Object} result object with properties `T`, `df` and `pValue`, holding the calculated test statistic, the degrees of freedom of the test and the p-value.
*/
function bartlett() {
	var ngroups = arguments.length,
		arg,
		n = new Array( ngroups ),
		nTotal,
		v = new Array( ngroups ),
		vTotal,
		stat,
		param,
		pval,
		ret,
		s,
		i;

	for ( i = 0; i < ngroups; i++ ) {
		arg = arguments[ i ];
		if ( !isArrayLike( arg ) ) {
				throw new TypeError( 'bartlett()::invalid input argument. Must provide array-like arguments. Value: `' + arg + '`.' );
		}
		n[ i ] = arg.length - 1;
		v[ i ] = variance( arg );
	}

	nTotal = sum( n );
	vTotal = sum( multiply( n, v ) ) / nTotal;

	stat = ( nTotal * Math.log( vTotal ) - sum( multiply( n, log( v ) ) ) ) / ( 1 + ( sum( divide( 1, n ) ) - 1 / nTotal ) / ( 3 * ( ngroups - 1 ) ) );
	param = ngroups - 1;
	pval = 1 - chisqCDF( stat, param );

	ret = {
		'T': stat,
		'df': param,
		'pValue': pval,
		'toString': function() {
			s = 'Bartlett\'s test of equal variances.\n';
			s += '\tnull hypothesis: The variances in all groups are the same.\n';
			s += '\ttest statistic: ' + roundn( stat, -4 ) + '\n';
			s += '\tdf: ' +  param + '\n';
			s += '\tp-value: ' + roundn( pval, -4 );
			return s;
		}
	};

	return ret;
} // end FUNCTION bartlett()


// EXPORTS //

module.exports = bartlett;
