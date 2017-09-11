"use strict"; /*;
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
              			"eMail": "richeve.bebedor@gmail.com",
              			"contributors": [
              				"John Lenon Maghanoy <johnlenonmaghanoy@gmail.com>",
              				"Vinse Vinalon <vinsevinalon@gmail.com>"
              			],
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
              			"optall": "optall",
              			"zelf": "zelf"
              		}
              	@end-include
              */

var doubt = require("doubt");
var optall = require("optall");
var zelf = require("zelf");

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

	var self = zelf(this);

	var element = optall.bind(self)(list, condition, modifier)[0];

	if (typeof modifier == "function") {
		return modifier.bind(self)(element);

	} else {
		return element;
	}
};

module.exports = optfor;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9wdGZvci5zdXBwb3J0LmpzIl0sIm5hbWVzIjpbImRvdWJ0IiwicmVxdWlyZSIsIm9wdGFsbCIsInplbGYiLCJvcHRmb3IiLCJsaXN0IiwiY29uZGl0aW9uIiwibW9kaWZpZXIiLCJBU19BUlJBWSIsIkVycm9yIiwic2VsZiIsImVsZW1lbnQiLCJiaW5kIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6ImNBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTREQSxJQUFNQSxRQUFRQyxRQUFTLE9BQVQsQ0FBZDtBQUNBLElBQU1DLFNBQVNELFFBQVMsUUFBVCxDQUFmO0FBQ0EsSUFBTUUsT0FBT0YsUUFBUyxNQUFULENBQWI7O0FBRUEsSUFBTUcsU0FBUyxTQUFTQSxNQUFULENBQWlCQyxJQUFqQixFQUF1QkMsU0FBdkIsRUFBa0NDLFFBQWxDLEVBQTRDO0FBQzFEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUEyQkEsS0FBSSxDQUFDUCxNQUFPSyxJQUFQLEVBQWFHLFFBQWIsQ0FBTCxFQUE4QjtBQUM3QixRQUFNLElBQUlDLEtBQUosQ0FBVyxjQUFYLENBQU47QUFDQTs7QUFFRCxLQUFJQyxPQUFPUCxLQUFNLElBQU4sQ0FBWDs7QUFFQSxLQUFJUSxVQUFVVCxPQUFPVSxJQUFQLENBQWFGLElBQWIsRUFBcUJMLElBQXJCLEVBQTJCQyxTQUEzQixFQUFzQ0MsUUFBdEMsRUFBa0QsQ0FBbEQsQ0FBZDs7QUFFQSxLQUFJLE9BQU9BLFFBQVAsSUFBbUIsVUFBdkIsRUFBbUM7QUFDbEMsU0FBT0EsU0FBU0ssSUFBVCxDQUFlRixJQUFmLEVBQXVCQyxPQUF2QixDQUFQOztBQUVBLEVBSEQsTUFHSztBQUNKLFNBQU9BLE9BQVA7QUFDQTtBQUNELENBMUNEOztBQTRDQUUsT0FBT0MsT0FBUCxHQUFpQlYsTUFBakIiLCJmaWxlIjoib3B0Zm9yLnN1cHBvcnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKjtcclxuXHRAbW9kdWxlLWxpY2Vuc2U6XHJcblx0XHRUaGUgTUlUIExpY2Vuc2UgKE1JVClcclxuXHRcdEBtaXQtbGljZW5zZVxyXG5cclxuXHRcdENvcHlyaWdodCAoQGMpIDIwMTcgUmljaGV2ZSBTaW9kaW5hIEJlYmVkb3JcclxuXHRcdEBlbWFpbDogcmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVxyXG5cclxuXHRcdFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcclxuXHRcdG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcclxuXHRcdGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcclxuXHRcdHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcclxuXHRcdGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xyXG5cdFx0ZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcclxuXHJcblx0XHRUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcclxuXHRcdGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXHJcblxyXG5cdFx0VEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxyXG5cdFx0SU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXHJcblx0XHRGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcclxuXHRcdEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcclxuXHRcdExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXHJcblx0XHRPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRVxyXG5cdFx0U09GVFdBUkUuXHJcblx0QGVuZC1tb2R1bGUtbGljZW5zZVxyXG5cclxuXHRAbW9kdWxlLWNvbmZpZ3VyYXRpb246XHJcblx0XHR7XHJcblx0XHRcdFwicGFja2FnZVwiOiBcIm9wdGZvclwiLFxyXG5cdFx0XHRcInBhdGhcIjogXCJvcHRmb3Ivb3B0Zm9yLmpzXCIsXHJcblx0XHRcdFwiZmlsZVwiOiBcIm9wdGZvci5qc1wiLFxyXG5cdFx0XHRcIm1vZHVsZVwiOiBcIm9wdGZvclwiLFxyXG5cdFx0XHRcImF1dGhvclwiOiBcIlJpY2hldmUgUy4gQmViZWRvclwiLFxyXG5cdFx0XHRcImVNYWlsXCI6IFwicmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVwiLFxyXG5cdFx0XHRcImNvbnRyaWJ1dG9yc1wiOiBbXHJcblx0XHRcdFx0XCJKb2huIExlbm9uIE1hZ2hhbm95IDxqb2hubGVub25tYWdoYW5veUBnbWFpbC5jb20+XCIsXHJcblx0XHRcdFx0XCJWaW5zZSBWaW5hbG9uIDx2aW5zZXZpbmFsb25AZ21haWwuY29tPlwiXHJcblx0XHRcdF0sXHJcblx0XHRcdFwicmVwb3NpdG9yeVwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS92b2xrb3Zhc3lzdGVtcy9vcHRmb3IuZ2l0XCIsXHJcblx0XHRcdFwidGVzdFwiOiBcIm9wdGZvci10ZXN0LmpzXCIsXHJcblx0XHRcdFwiZ2xvYmFsXCI6IHRydWVcclxuXHRcdH1cclxuXHRAZW5kLW1vZHVsZS1jb25maWd1cmF0aW9uXHJcblxyXG5cdEBtb2R1bGUtZG9jdW1lbnRhdGlvbjpcclxuXHRcdFBpY2sgdGhlIGVsZW1lbnQgdGhhdCBzYXRpc2Z5IHRoZSBjb25kaXRpb24gd2l0aCBtb2RpZmllci5cclxuXHJcblx0XHRNb2RpZmllciBjYW4gYmUgYSBib29sZWFuIGZsYWcgb3IgYSBmdW5jdGlvbi5cclxuXHRAZW5kLW1vZHVsZS1kb2N1bWVudGF0aW9uXHJcblxyXG5cdEBpbmNsdWRlOlxyXG5cdFx0e1xyXG5cdFx0XHRcImRvdWJ0XCI6IFwiZG91YnRcIixcclxuXHRcdFx0XCJvcHRhbGxcIjogXCJvcHRhbGxcIixcclxuXHRcdFx0XCJ6ZWxmXCI6IFwiemVsZlwiXHJcblx0XHR9XHJcblx0QGVuZC1pbmNsdWRlXHJcbiovXHJcblxyXG5jb25zdCBkb3VidCA9IHJlcXVpcmUoIFwiZG91YnRcIiApO1xyXG5jb25zdCBvcHRhbGwgPSByZXF1aXJlKCBcIm9wdGFsbFwiICk7XHJcbmNvbnN0IHplbGYgPSByZXF1aXJlKCBcInplbGZcIiApO1xyXG5cclxuY29uc3Qgb3B0Zm9yID0gZnVuY3Rpb24gb3B0Zm9yKCBsaXN0LCBjb25kaXRpb24sIG1vZGlmaWVyICl7XHJcblx0Lyo7XHJcblx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxyXG5cdFx0XHR7XHJcblx0XHRcdFx0XCJsaXN0OnJlcXVpcmVkXCI6IFtcclxuXHRcdFx0XHRcdFwiQXJndW1lbnRzXCIsXHJcblx0XHRcdFx0XHRcIlsqXVwiXHJcblx0XHRcdFx0XSxcclxuXHRcdFx0XHRcImNvbmRpdGlvbjpyZXF1aXJlZFwiOiBbXHJcblx0XHRcdFx0XHRcInN0cmluZ1wiLFxyXG5cdFx0XHRcdFx0XCJmdW5jdGlvblwiLFxyXG5cdFx0XHRcdFx0Qk9PTEVBTixcclxuXHRcdFx0XHRcdEZVTkNUSU9OLFxyXG5cdFx0XHRcdFx0TlVNQkVSLFxyXG5cdFx0XHRcdFx0T0JKRUNULFxyXG5cdFx0XHRcdFx0U1RSSU5HLFxyXG5cdFx0XHRcdFx0VU5ERUZJTkVELFxyXG5cdFx0XHRcdFx0U1lNQk9MLFxyXG5cdFx0XHRcdFx0XCJbc3RyaW5nLCBmdW5jdGlvbl1cIlxyXG5cdFx0XHRcdF0sXHJcblx0XHRcdFx0XCJtb2RpZmllclwiOiBbXHJcblx0XHRcdFx0XHRcImZ1bmN0aW9uXCIsXHJcblx0XHRcdFx0XHRcImJvb2xlYW5cIlxyXG5cdFx0XHRcdF1cclxuXHRcdFx0fVxyXG5cdFx0QGVuZC1tZXRhLWNvbmZpZ3VyYXRpb25cclxuXHQqL1xyXG5cclxuXHRpZiggIWRvdWJ0KCBsaXN0LCBBU19BUlJBWSApICl7XHJcblx0XHR0aHJvdyBuZXcgRXJyb3IoIFwiaW52YWxpZCBsaXN0XCIgKTtcclxuXHR9XHJcblxyXG5cdGxldCBzZWxmID0gemVsZiggdGhpcyApO1xyXG5cclxuXHRsZXQgZWxlbWVudCA9IG9wdGFsbC5iaW5kKCBzZWxmICkoIGxpc3QsIGNvbmRpdGlvbiwgbW9kaWZpZXIgKVsgMCBdO1xyXG5cclxuXHRpZiggdHlwZW9mIG1vZGlmaWVyID09IFwiZnVuY3Rpb25cIiApe1xyXG5cdFx0cmV0dXJuIG1vZGlmaWVyLmJpbmQoIHNlbGYgKSggZWxlbWVudCApO1xyXG5cclxuXHR9ZWxzZXtcclxuXHRcdHJldHVybiBlbGVtZW50O1xyXG5cdH1cclxufTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gb3B0Zm9yO1xyXG4iXX0=
//# sourceMappingURL=optfor.support.js.map
