"use strict";

/*;
	@test-license:
		The MIT License (MIT)
		@mit-license

		Copyright (@c) 2017 Richeve Siodina Bebedor
		@email: richeve.bebedor@gmail.com

		Permission is hereby granted, free of charge, to any person obtaining a copy
		of this software and associated documentation files (the "Software"), to deal
		in the Software without restriction, including without limitation the rights
		to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
		copies of the Software, and to permit persons to whom the Software is
		furnished to do so, subject to the following conditions:

		The above copyright notice and this permission notice shall be included in all
		copies or substantial portions of the Software.

		THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
		IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
		FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
		AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
		LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
		OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
		SOFTWARE.
	@end-test-license

	@test-configuration:
		{
			"package": "optfor",
			"path": "optfor/test.module.js",
			"file": "test.module.js",
			"module": "test",
			"author": "Richeve S. Bebedor",
			"eMail": "richeve.bebedor@gmail.com",
			"repository": "https://github.com/volkovasystems/optfor.git"
		}
	@end-test-configuration

	@test-documentation:

	@end-test-documentation

	@include:
		{
			"assert": "should",
			"optfor": "optfor"
		}
	@end-include
*/

const assert = require( "should/as-function" );

//: @server:
const optfor = require( "./optfor.js" );
//: @end-server

//: @client:
const optfor = require( "./optfor.support.js" );
//: @end-client

//: @bridge:
const path = require( "path" );
//: @end-bridge


//: @server:
describe( "optfor", ( ) => {

	describe( "`optfor( [ 1, 2, 3 ], 2, true )`", ( ) => {
		it( "should be equal to 2", ( ) => {
			assert.equal( optfor( [ 1, 2, 3 ], 2, true ), 2 );
		} );
	} );

	describe( "`optfor( [ 1, 2, 3, 'hello' ], 'hello' )`", ( ) => {
		it( "should be equal to 'hello'", ( ) => {
			assert.equal( optfor( [ 1, 2, 3, "hello" ], "hello" ), "hello" );
		} );
	} );

	describe( "`optfor( [ 1, 2, 3, true ], true )", ( ) => {
		it( "should be equal to true", ( ) => {
			assert.equal( optfor( [ 1, 2, 3, true ], true ), true );
		} );
	} );

	describe( "`optfor( [ 1, 2, 3, Symbol.for( 'hello' ) ] , SYMBOL )`", ( ) => {
		it( "should be equal to Symbol.for( 'hello' )", ( ) => {
			assert.equal( optfor( [ 1, 2, 3, Symbol.for( "hello" ) ] , SYMBOL ), Symbol.for( "hello" ) );
		} );
	} );

	describe( "`optfor( [ 1, 2, 3, /eah/ ], RegExp )`", ( ) => {
		it( "should be equal to /eah/", ( ) => {
			assert.deepEqual( optfor( [ 1, 2, 3, /eah/ ], RegExp ), /eah/ );
		} );
	} );

	describe( "`optfor( [ 1, 2, 3, 'hello' ], STRING )`", ( ) => {
		it( "should be equal to 'hello'", ( ) => {
			assert.equal( optfor( [ 1, 2, 3, "hello" ], STRING ), "hello" );
		} );
	} );

	describe( "`optfor( [ null, Symbol.for( 'hi' ), function hello( ){ return 'hello' } ], FUNCTION )`", ( ) => {
		it( "should be equal to function hello( ){ return 'hello' }", ( ) => {
			let test = function hello( ){ return "hello" };

			assert.deepEqual( optfor( [ null, Symbol.for( "hi" ), test ], FUNCTION ), test );
		} );
	} );

} );
//: @end-server


//: @client:
describe( "optfor", ( ) => {

	describe( "`optfor( [ 1, 2, 3 ], 2, true )`", ( ) => {
		it( "should be equal to 2", ( ) => {
			assert.equal( optfor( [ 1, 2, 3 ], 2, true ), 2 );
		} );
	} );

	describe( "`optfor( [ 1, 2, 3, 'hello' ], 'hello' )`", ( ) => {
		it( "should be equal to 'hello'", ( ) => {
			assert.equal( optfor( [ 1, 2, 3, "hello" ], "hello" ), "hello" );
		} );
	} );

	describe( "`optfor( [ 1, 2, 3, true ], true )", ( ) => {
		it( "should be equal to true", ( ) => {
			assert.equal( optfor( [ 1, 2, 3, true ], true ), true );
		} );
	} );

	describe( "`optfor( [ 1, 2, 3, Symbol.for( 'hello' ) ] , SYMBOL )`", ( ) => {
		it( "should be equal to Symbol.for( 'hello' )", ( ) => {
			assert.equal( optfor( [ 1, 2, 3, Symbol.for( "hello" ) ] , SYMBOL ), Symbol.for( "hello" ) );
		} );
	} );

	describe( "`optfor( [ 1, 2, 3, /eah/ ], RegExp )`", ( ) => {
		it( "should be equal to /eah/", ( ) => {
			assert.deepEqual( optfor( [ 1, 2, 3, /eah/ ], RegExp ), /eah/ );
		} );
	} );

	describe( "`optfor( [ 1, 2, 3, 'hello' ], STRING )`", ( ) => {
		it( "should be equal to 'hello'", ( ) => {
			assert.equal( optfor( [ 1, 2, 3, "hello" ], STRING ), "hello" );
		} );
	} );

	describe( "`optfor( [ null, Symbol.for( 'hi' ), function hello( ){ return 'hello' } ], FUNCTION )`", ( ) => {
		it( "should be equal to function hello( ){ return 'hello' }", ( ) => {
			let test = function hello( ){ return "hello" };

			assert.deepEqual( optfor( [ null, Symbol.for( "hi" ), test ], FUNCTION ), test );
		} );
	} );

} );
//: @end-client


//: @bridge:
describe( "optfor", ( ) => {

	let bridgeURL = `file://${ path.resolve( __dirname, "bridge.html" ) }`;

	describe( "`optfor( [ 1, 2, 3 ], 2, true )`", ( ) => {
		it( "should be equal to 2", ( ) => {
			let result = browser.url( bridgeURL ).execute(

				function( ){
					return optfor( [ 1, 2, 3 ], 2, true );
				}

			).value;

			assert.equal( result, 2 );
		} );
	} );

	describe( "`optfor( [ 1, 2, 3, 'hello' ], 'hello' )`", ( ) => {
		it( "should be equal to 'hello'", ( ) => {
			let result = browser.url( bridgeURL ).execute(

				function( ){
					return optfor( [ 1, 2, 3, "hello" ], "hello" );
				}

			).value;

			assert.equal( result, "hello" );
		} );
	} );

	describe( "`optfor( [ 1, 2, 3, true ], true )", ( ) => {
		it( "should be equal to true", ( ) => {
			let result = browser.url( bridgeURL ).execute(

				function( ){
					return optfor( [ 1, 2, 3, true ], true );
				}

			).value;

			assert.equal( result, true );
		} );
	} );

	describe( "`optfor( [ 1, 2, 3, Symbol.for( 'hello' ) ] , SYMBOL )`", ( ) => {
		it( "should be equal to Symbol.for( 'hello' )", ( ) => {
			//: @ignore:
			let result = browser.url( bridgeURL ).execute(

				function( ){
					return optfor( [ 1, 2, 3, Symbol.for( "hello" ) ] , SYMBOL ).toString( );
				}

			).value;
			//: @end-ignore

			assert.equal( result, "Symbol(hello)" );
		} );
	} );

	describe( "`optfor( [ 1, 2, 3, /eah/ ], RegExp )`", ( ) => {
		it( "should be equal to /eah/", ( ) => {
			//: @ignore:
			let result = browser.url( bridgeURL ).execute(

				function( ){
					return optfor( [ 1, 2, 3, /eah/ ], RegExp ) instanceof RegExp == true;
				}

			).value;
			//: @end-ignore

			assert.equal( result, true );
		} );
	} );

	describe( "`optfor( [ 1, 2, 3, 'hello' ], STRING )`", ( ) => {
		it( "should be equal to 'hello'", ( ) => {
			let result = browser.url( bridgeURL ).execute(

				function( ){
					return optfor( [ 1, 2, 3, "hello" ], STRING );
				}

			).value;

			assert.equal( result, "hello" );
		} );
	} );

	describe( "`optfor( [ null, Symbol.for( 'hi' ), function hello( ){ return 'hello' } ], FUNCTION )`", ( ) => {
		it( "should be equal to function hello( ){ return 'hello' }", ( ) => {
			//: @ignore:
			let result = browser.url( bridgeURL ).execute(

				function( ){
					let test = function hello( ){ return "hello" };

					return optfor( [ null, Symbol.for( "hi" ), test ], FUNCTION ) === test;
				}

			).value;
			//: @end-ignore

			assert.equal( result, true );
		} );
	} );

} );
//: @end-bridge
