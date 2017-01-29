"use strict";

/*;
	@module-license:
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
	@end-module-license

	@module-configuration:
		{
			"package": "optfor",
			"path": "optfor/optfor.js",
			"file": "optfor.js",
			"module": "optfor",
			"author": "Richeve S. Bebedor",
			"contributors": [
				"John Lenon Maghanoy <johnlenonmaghanoy@gmail.com>"
			],
			"eMail": "richeve.bebedor@gmail.com",
			"repository": "https://github.com/volkovasystems/optfor.git",
			"test": "optfor-test.js",
			"global": true
		}
	@end-module-configuration

	@module-documentation:
		Pick the element that satisfy the condition with modifier.

		Modifier can be a boolean flag or a function.
	@end-module-documentation

	@include:
		{
			"doubt": "doubt",
			"falze": "falze",
			"harden": "harden",
			"optall": "optall",
			"protype": "protype",
			"zelf": "zelf"
		}
	@end-include
*/

var doubt = require("doubt");
var falze = require("falze");
var harden = require("harden");
var optall = require("optall");
var protype = require("protype");
var zelf = require("zelf");

harden("BOOLEAN", "boolean");
harden("FUNCTION", "function");
harden("NUMBER", "number");
harden("OBJECT", "object");
harden("STRING", "string");
harden("UNDEFINED", "undefined");
harden("SYMBOL", "symbol");

var optfor = function optfor(list, condition, modifier) {
	/*;
 	@meta-configuration:
 		{
 			"list:required": [
 				"Arguments",
 				"[*]"
 			],
 			"condition:required": [
 				"string",
 				"function",
 				BOOLEAN,
 				FUNCTION,
 				NUMBER,
 				OBJECT,
 				STRING,
 				UNDEFINED,
 				SYMBOL,
 				"[string, function]"
 			],
 			"modifier": [
 				"function",
 				"boolean"
 			]
 		}
 	@end-meta-configuration
 */

	if (!doubt(list, AS_ARRAY)) {
		throw new Error("invalid list");
	}

	if (falze(condition)) {
		throw new Error("invalid condition");
	}

	var self = zelf(this);

	var element = optall.bind(self)(list, condition, modifier)[0];

	if (protype(modifier, FUNCTION)) {
		return modifier.bind(self)(element);
	} else {
		return element;
	}
};

module.exports = optfor;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9wdGZvci5qcyJdLCJuYW1lcyI6WyJkb3VidCIsInJlcXVpcmUiLCJmYWx6ZSIsImhhcmRlbiIsIm9wdGFsbCIsInByb3R5cGUiLCJ6ZWxmIiwib3B0Zm9yIiwibGlzdCIsImNvbmRpdGlvbiIsIm1vZGlmaWVyIiwiQVNfQVJSQVkiLCJFcnJvciIsInNlbGYiLCJlbGVtZW50IiwiYmluZCIsIkZVTkNUSU9OIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBOERBLElBQU1BLFFBQVFDLFFBQVMsT0FBVCxDQUFkO0FBQ0EsSUFBTUMsUUFBUUQsUUFBUyxPQUFULENBQWQ7QUFDQSxJQUFNRSxTQUFTRixRQUFTLFFBQVQsQ0FBZjtBQUNBLElBQU1HLFNBQVNILFFBQVMsUUFBVCxDQUFmO0FBQ0EsSUFBTUksVUFBVUosUUFBUyxTQUFULENBQWhCO0FBQ0EsSUFBTUssT0FBT0wsUUFBUyxNQUFULENBQWI7O0FBRUFFLE9BQVEsU0FBUixFQUFtQixTQUFuQjtBQUNBQSxPQUFRLFVBQVIsRUFBb0IsVUFBcEI7QUFDQUEsT0FBUSxRQUFSLEVBQWtCLFFBQWxCO0FBQ0FBLE9BQVEsUUFBUixFQUFrQixRQUFsQjtBQUNBQSxPQUFRLFFBQVIsRUFBa0IsUUFBbEI7QUFDQUEsT0FBUSxXQUFSLEVBQXFCLFdBQXJCO0FBQ0FBLE9BQVEsUUFBUixFQUFrQixRQUFsQjs7QUFFQSxJQUFNSSxTQUFTLFNBQVNBLE1BQVQsQ0FBaUJDLElBQWpCLEVBQXVCQyxTQUF2QixFQUFrQ0MsUUFBbEMsRUFBNEM7QUFDMUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTJCQSxLQUFJLENBQUNWLE1BQU9RLElBQVAsRUFBYUcsUUFBYixDQUFMLEVBQThCO0FBQzdCLFFBQU0sSUFBSUMsS0FBSixDQUFXLGNBQVgsQ0FBTjtBQUNBOztBQUVELEtBQUlWLE1BQU9PLFNBQVAsQ0FBSixFQUF3QjtBQUN2QixRQUFNLElBQUlHLEtBQUosQ0FBVyxtQkFBWCxDQUFOO0FBQ0E7O0FBRUQsS0FBSUMsT0FBT1AsS0FBTSxJQUFOLENBQVg7O0FBRUEsS0FBSVEsVUFBVVYsT0FBT1csSUFBUCxDQUFhRixJQUFiLEVBQXFCTCxJQUFyQixFQUEyQkMsU0FBM0IsRUFBc0NDLFFBQXRDLEVBQWtELENBQWxELENBQWQ7O0FBRUEsS0FBSUwsUUFBU0ssUUFBVCxFQUFtQk0sUUFBbkIsQ0FBSixFQUFtQztBQUNsQyxTQUFPTixTQUFTSyxJQUFULENBQWVGLElBQWYsRUFBdUJDLE9BQXZCLENBQVA7QUFFQSxFQUhELE1BR0s7QUFDSixTQUFPQSxPQUFQO0FBQ0E7QUFDRCxDQTlDRDs7QUFnREFHLE9BQU9DLE9BQVAsR0FBaUJYLE1BQWpCIiwiZmlsZSI6Im9wdGZvci5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG4vKjtcblx0QG1vZHVsZS1saWNlbnNlOlxuXHRcdFRoZSBNSVQgTGljZW5zZSAoTUlUKVxuXHRcdEBtaXQtbGljZW5zZVxuXG5cdFx0Q29weXJpZ2h0IChAYykgMjAxNyBSaWNoZXZlIFNpb2RpbmEgQmViZWRvclxuXHRcdEBlbWFpbDogcmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVxuXG5cdFx0UGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuXHRcdG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcblx0XHRpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG5cdFx0dG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuXHRcdGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuXHRcdGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblx0XHRUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcblx0XHRjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5cdFx0VEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuXHRcdElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuXHRcdEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuXHRcdEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcblx0XHRMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuXHRcdE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXG5cdFx0U09GVFdBUkUuXG5cdEBlbmQtbW9kdWxlLWxpY2Vuc2VcblxuXHRAbW9kdWxlLWNvbmZpZ3VyYXRpb246XG5cdFx0e1xuXHRcdFx0XCJwYWNrYWdlXCI6IFwib3B0Zm9yXCIsXG5cdFx0XHRcInBhdGhcIjogXCJvcHRmb3Ivb3B0Zm9yLmpzXCIsXG5cdFx0XHRcImZpbGVcIjogXCJvcHRmb3IuanNcIixcblx0XHRcdFwibW9kdWxlXCI6IFwib3B0Zm9yXCIsXG5cdFx0XHRcImF1dGhvclwiOiBcIlJpY2hldmUgUy4gQmViZWRvclwiLFxuXHRcdFx0XCJjb250cmlidXRvcnNcIjogW1xuXHRcdFx0XHRcIkpvaG4gTGVub24gTWFnaGFub3kgPGpvaG5sZW5vbm1hZ2hhbm95QGdtYWlsLmNvbT5cIlxuXHRcdFx0XSxcblx0XHRcdFwiZU1haWxcIjogXCJyaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXCIsXG5cdFx0XHRcInJlcG9zaXRvcnlcIjogXCJodHRwczovL2dpdGh1Yi5jb20vdm9sa292YXN5c3RlbXMvb3B0Zm9yLmdpdFwiLFxuXHRcdFx0XCJ0ZXN0XCI6IFwib3B0Zm9yLXRlc3QuanNcIixcblx0XHRcdFwiZ2xvYmFsXCI6IHRydWVcblx0XHR9XG5cdEBlbmQtbW9kdWxlLWNvbmZpZ3VyYXRpb25cblxuXHRAbW9kdWxlLWRvY3VtZW50YXRpb246XG5cdFx0UGljayB0aGUgZWxlbWVudCB0aGF0IHNhdGlzZnkgdGhlIGNvbmRpdGlvbiB3aXRoIG1vZGlmaWVyLlxuXG5cdFx0TW9kaWZpZXIgY2FuIGJlIGEgYm9vbGVhbiBmbGFnIG9yIGEgZnVuY3Rpb24uXG5cdEBlbmQtbW9kdWxlLWRvY3VtZW50YXRpb25cblxuXHRAaW5jbHVkZTpcblx0XHR7XG5cdFx0XHRcImRvdWJ0XCI6IFwiZG91YnRcIixcblx0XHRcdFwiZmFsemVcIjogXCJmYWx6ZVwiLFxuXHRcdFx0XCJoYXJkZW5cIjogXCJoYXJkZW5cIixcblx0XHRcdFwib3B0YWxsXCI6IFwib3B0YWxsXCIsXG5cdFx0XHRcInByb3R5cGVcIjogXCJwcm90eXBlXCIsXG5cdFx0XHRcInplbGZcIjogXCJ6ZWxmXCJcblx0XHR9XG5cdEBlbmQtaW5jbHVkZVxuKi9cblxuY29uc3QgZG91YnQgPSByZXF1aXJlKCBcImRvdWJ0XCIgKTtcbmNvbnN0IGZhbHplID0gcmVxdWlyZSggXCJmYWx6ZVwiICk7XG5jb25zdCBoYXJkZW4gPSByZXF1aXJlKCBcImhhcmRlblwiICk7XG5jb25zdCBvcHRhbGwgPSByZXF1aXJlKCBcIm9wdGFsbFwiICk7XG5jb25zdCBwcm90eXBlID0gcmVxdWlyZSggXCJwcm90eXBlXCIgKTtcbmNvbnN0IHplbGYgPSByZXF1aXJlKCBcInplbGZcIiApO1xuXG5oYXJkZW4oIFwiQk9PTEVBTlwiLCBcImJvb2xlYW5cIiApO1xuaGFyZGVuKCBcIkZVTkNUSU9OXCIsIFwiZnVuY3Rpb25cIiApO1xuaGFyZGVuKCBcIk5VTUJFUlwiLCBcIm51bWJlclwiICk7XG5oYXJkZW4oIFwiT0JKRUNUXCIsIFwib2JqZWN0XCIgKTtcbmhhcmRlbiggXCJTVFJJTkdcIiwgXCJzdHJpbmdcIiApO1xuaGFyZGVuKCBcIlVOREVGSU5FRFwiLCBcInVuZGVmaW5lZFwiICk7XG5oYXJkZW4oIFwiU1lNQk9MXCIsIFwic3ltYm9sXCIgKTtcblxuY29uc3Qgb3B0Zm9yID0gZnVuY3Rpb24gb3B0Zm9yKCBsaXN0LCBjb25kaXRpb24sIG1vZGlmaWVyICl7XG5cdC8qO1xuXHRcdEBtZXRhLWNvbmZpZ3VyYXRpb246XG5cdFx0XHR7XG5cdFx0XHRcdFwibGlzdDpyZXF1aXJlZFwiOiBbXG5cdFx0XHRcdFx0XCJBcmd1bWVudHNcIixcblx0XHRcdFx0XHRcIlsqXVwiXG5cdFx0XHRcdF0sXG5cdFx0XHRcdFwiY29uZGl0aW9uOnJlcXVpcmVkXCI6IFtcblx0XHRcdFx0XHRcInN0cmluZ1wiLFxuXHRcdFx0XHRcdFwiZnVuY3Rpb25cIixcblx0XHRcdFx0XHRCT09MRUFOLFxuXHRcdFx0XHRcdEZVTkNUSU9OLFxuXHRcdFx0XHRcdE5VTUJFUixcblx0XHRcdFx0XHRPQkpFQ1QsXG5cdFx0XHRcdFx0U1RSSU5HLFxuXHRcdFx0XHRcdFVOREVGSU5FRCxcblx0XHRcdFx0XHRTWU1CT0wsXG5cdFx0XHRcdFx0XCJbc3RyaW5nLCBmdW5jdGlvbl1cIlxuXHRcdFx0XHRdLFxuXHRcdFx0XHRcIm1vZGlmaWVyXCI6IFtcblx0XHRcdFx0XHRcImZ1bmN0aW9uXCIsXG5cdFx0XHRcdFx0XCJib29sZWFuXCJcblx0XHRcdFx0XVxuXHRcdFx0fVxuXHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXG5cdCovXG5cblx0aWYoICFkb3VidCggbGlzdCwgQVNfQVJSQVkgKSApe1xuXHRcdHRocm93IG5ldyBFcnJvciggXCJpbnZhbGlkIGxpc3RcIiApO1xuXHR9XG5cblx0aWYoIGZhbHplKCBjb25kaXRpb24gKSApe1xuXHRcdHRocm93IG5ldyBFcnJvciggXCJpbnZhbGlkIGNvbmRpdGlvblwiICk7XG5cdH1cblxuXHRsZXQgc2VsZiA9IHplbGYoIHRoaXMgKTtcblxuXHRsZXQgZWxlbWVudCA9IG9wdGFsbC5iaW5kKCBzZWxmICkoIGxpc3QsIGNvbmRpdGlvbiwgbW9kaWZpZXIgKVsgMCBdO1xuXG5cdGlmKCBwcm90eXBlKCBtb2RpZmllciwgRlVOQ1RJT04gKSApe1xuXHRcdHJldHVybiBtb2RpZmllci5iaW5kKCBzZWxmICkoIGVsZW1lbnQgKTtcblxuXHR9ZWxzZXtcblx0XHRyZXR1cm4gZWxlbWVudDtcblx0fVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBvcHRmb3I7XG4iXX0=
