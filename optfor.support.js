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

//# sourceMappingURL=optfor.support.js.map