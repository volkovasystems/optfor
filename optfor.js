"use strict";

/*;
	@module-license:
		The MIT License (MIT)
		@mit-license

		Copyright (@c) 2016 Richeve Siodina Bebedor
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
	@end-module-license

	@module-configuration:
		{
			"package": "optfor",
			"path": "optfor/optfor.js",
			"file": "optfor.js",
			"module": "optfor",
			"author": "Richeve S. Bebedor",
			"eMail": "richeve.bebedor@gmail.com",
			"repository": "https://github.com/volkovasystems/optfor.git",
			"test": "optfor-test.js",
			"global": true
		}
	@end-module-configuration

	@module-documentation:
		Pick the element that satisfy the condition.
	@end-module-documentation

	@include:
		{
			"harden": "harden",
			"raze": "raze",
			"zelf": "zelf"
		}
	@end-include
*/

if( typeof window == "undefined" ){
	var harden = require( "harden" );
	var raze = require( "raze" );
	var zelf = require( "zelf" );
}

if( typeof window != "undefined" &&
	!( "harden" in window ) )
{
	throw new Error( "harden is not defined" );
}

if( typeof window != "undefined" &&
	!( "raze" in window ) )
{
	throw new Error( "raze is not defined" );
}

if( typeof window != "undefined" &&
	!( "zelf" in window ) )
{
	throw new Error( "zelf is not defined" );
}

harden( "BOOLEAN", "boolean" );
harden( "FUNCTION", "function" );
harden( "NUMBER", "number" );
harden( "OBJECT", "object" );
harden( "STRING", "string" );
harden( "UNDEFINED", "undefined" );

var optfor = function optfor( list, condition ){
	/*;
		@meta-configuration:
			{
				"list:required": [
					"arguments",
					"[*]"
				],
				"condition:required": [
					"string",
					"function"
				]
			}
		@end-meta-configuration
	*/

	if( typeof condition != STRING &&
		typeof condition != FUNCTION )
	{
		throw new Error( "invalid condition" );
	}

	if( typeof condition == STRING &&
		condition != BOOLEAN &&
		condition != FUNCTION &&
		condition != NUMBER &&
		condition != OBJECT &&
		condition != STRING &&
		condition != UNDEFINED )
	{
		throw new Error( "invalid type condition" );
	}

	var self = zelf( this );

	return raze( list )
		.filter( function onEachElement( element, index ){
			if( typeof condition == STRING ){
				return ( typeof element == condition );

			}else if( typeof condition == FUNCTION &&
				( /^[A-Z]/ ).test( condition.name ) )
			{
				return ( element instanceof condition );

			}else{
				return condition.bind( self )( element, index );
			}
		} )[ 0 ];
};

if( typeof module != "undefined" ){
	module.exports = optfor;
}
