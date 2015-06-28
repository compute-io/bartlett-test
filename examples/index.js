'use strict';

var bartlett = require( './../lib' ),
	a,
	b,
	out;

a = [ 1, 2, 3 ];
b = [ 1, 4, 2 ];

out = bartlett( a, b );

console.dir( out );
