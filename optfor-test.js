const assert = require( "assert" );
const optfor = require( "./optfor.js" );

assert.equal( optfor( [ 1, 2, 3 ], 2, true ), 2, "should return 2" );

assert.equal( optfor( [ 1, 2, 3, "hello" ], "hello" ), "hello", "should return 2" );

assert.equal( optfor( [ 1, 2, 3, true ], true ), true, "should return true" );

assert.equal( optfor( [ 1, 2, 3, Symbol.for( "hello" ) ] , SYMBOL ), Symbol.for( "hello" ), "should be equal" );

assert.deepEqual( optfor( [ 1, 2, 3, /eah/ ], RegExp ), /eah/, "should be equal" );

assert.equal( optfor( [ 1, 2, 3, "hello" ], STRING ), "hello", "should return 'hello'" );

let test = function hello( ){ return "hello" };
assert.deepEqual( optfor( [ null, Symbol.for( "hi" ), test ], FUNCTION ), test, "should be deeply equal" );

console.log( "ok" );
