const assert = require( "assert" );
const optfor = require( "./optfor.js" );

assert.equal( optfor( [ 1, 2, 3 ], 2, true ), 2, "should be equal to 2" );

assert.equal( optfor( [ 1, 2, 3, "hello" ], "hello" ), "hello", "should be equal to 'hello'" );

assert.equal( optfor( [ 1, 2, 3, true ], true ), true, "should be equal to true" );

assert.equal( optfor( [ 1, 2, 3, Symbol.for( "hello" ) ] , SYMBOL ), Symbol.for( "hello" ), "should be equal to Symbol.for( 'hello' )" );

assert.deepEqual( optfor( [ 1, 2, 3, /eah/ ], RegExp ), /eah/, "should be equal to /eah/" );

assert.equal( optfor( [ 1, 2, 3, "hello" ], STRING ), "hello", "should be equal to 'hello'" );

let test = function hello( ){ return "hello" };
assert.deepEqual( optfor( [ null, Symbol.for( "hi" ), test ], FUNCTION ),
	test, "should be equal to function hello( ){ return 'hello' }" );

console.log( "ok" );
