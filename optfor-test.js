const assert = require( "assert" );
const optfor = require( "./optfor.js" );

assert.equal( optfor( [ 1, 2, 3 ], 2, true ), 2 );

console.log( "ok" );
