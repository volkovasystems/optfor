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

if( typeof require == "function" ){
	var harden = require( "harden" );
	var protype = require( "protype" );
	var raze = require( "raze" );
	var zelf = require( "zelf" );
}

if( typeof window != "undefined" && !( "harden" in window ) ){
	throw new Error( "harden is not defined" );
}

if( typeof window != "undefined" && !( "protype" in window ) ){
	throw new Error( "protype is not defined" );
}

if( typeof window != "undefined" && !( "raze" in window ) ){
	throw new Error( "raze is not defined" );
}

if( typeof window != "undefined" && !( "zelf" in window ) ){
	throw new Error( "zelf is not defined" );
}

harden( "BOOLEAN", "boolean" );
harden( "FUNCTION", "function" );
harden( "NUMBER", "number" );
harden( "OBJECT", "object" );
harden( "STRING", "string" );
harden( "UNDEFINED", "undefined" );
harden( "SYMBOL", "symbol" );

var optfor = function optfor( list, condition, modifier ){
	/*;
		@meta-configuration:
			{
				"list:required": [
					"Arguments",
					"[*]"
				],
				"condition:required": [
					"string",
					"function"
				],
				"modifier": [
					"function",
					"*"
				]
			}
		@end-meta-configuration
	*/

	let conditionType = protype( condition );
	if( ( !conditionType.STRING &&
			!conditionType.FUNCTION ) ||

		( conditionType.STRING &&
			condition != BOOLEAN &&
			condition != FUNCTION &&
			condition != NUMBER &&
			condition != OBJECT &&
			condition != STRING &&
			condition != UNDEFINED &&
			condition != SYMBOL ) )
	{
		throw new Error( "invalid condition" );
	}

	let self = zelf( this );

	let element = raze( list )
		.filter( function onEachElement( element, index ){
			if( conditionType.STRING ){
				return protype( element, condition );

			}else if( conditionType.FUNCTION && ( /^[A-Z]/ ).test( condition.name ) ){
				return ( element instanceof condition );

			}else{
				return condition.bind( self )( element, index );
			}
		} )[ 0 ];

	let modifierType = protype( modifier );
	if( modifierType.FUNCTION ){
		return modifier.bind( self )( element );

	}else if( !modifierType.UNDEFINED && element !== modifier ){
		return modifier;

	}else{
		return element;
	}
};

if( typeof module != "undefined" && typeof module.exports != "undefined" ){
	module.exports = optfor;
}
