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
              */var _for = require("babel-runtime/core-js/symbol/for");var _for2 = _interopRequireDefault(_for);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

var assert = require("should/as-function");



//: @client:
var optfor = require("./optfor.support.js");
//: @end-client







//: @client:
describe("optfor", function () {

	describe("`optfor( [ 1, 2, 3 ], 2, true )`", function () {
		it("should be equal to 2", function () {
			assert.equal(optfor([1, 2, 3], 2, true), 2);
		});
	});

	describe("`optfor( [ 1, 2, 3, 'hello' ], 'hello' )`", function () {
		it("should be equal to 'hello'", function () {
			assert.equal(optfor([1, 2, 3, "hello"], "hello"), "hello");
		});
	});

	describe("`optfor( [ 1, 2, 3, true ], true )", function () {
		it("should be equal to true", function () {
			assert.equal(optfor([1, 2, 3, true], true), true);
		});
	});

	describe("`optfor( [ 1, 2, 3, Symbol.for( 'hello' ) ] , SYMBOL )`", function () {
		it("should be equal to Symbol.for( 'hello' )", function () {
			assert.equal(optfor([1, 2, 3, (0, _for2.default)("hello")], SYMBOL), (0, _for2.default)("hello"));
		});
	});

	describe("`optfor( [ 1, 2, 3, /eah/ ], RegExp )`", function () {
		it("should be equal to /eah/", function () {
			assert.deepEqual(optfor([1, 2, 3, /eah/], RegExp), /eah/);
		});
	});

	describe("`optfor( [ 1, 2, 3, 'hello' ], STRING )`", function () {
		it("should be equal to 'hello'", function () {
			assert.equal(optfor([1, 2, 3, "hello"], STRING), "hello");
		});
	});

	describe("`optfor( [ null, Symbol.for( 'hi' ), function hello( ){ return 'hello' } ], FUNCTION )`", function () {
		it("should be equal to function hello( ){ return 'hello' }", function () {
			var test = function hello() {return "hello";};

			assert.deepEqual(optfor([null, (0, _for2.default)("hi"), test], FUNCTION), test);
		});
	});

});
//: @end-client
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3Quc3VwcG9ydC5qcyJdLCJuYW1lcyI6WyJhc3NlcnQiLCJyZXF1aXJlIiwib3B0Zm9yIiwiZGVzY3JpYmUiLCJpdCIsImVxdWFsIiwiU1lNQk9MIiwiZGVlcEVxdWFsIiwiUmVnRXhwIiwiU1RSSU5HIiwidGVzdCIsImhlbGxvIiwiRlVOQ1RJT04iXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFtREEsSUFBTUEsU0FBU0MsUUFBUyxvQkFBVCxDQUFmOzs7O0FBSUE7QUFDQSxJQUFNQyxTQUFTRCxRQUFTLHFCQUFULENBQWY7QUFDQTs7Ozs7Ozs7QUFRQTtBQUNBRSxTQUFVLFFBQVYsRUFBb0IsWUFBTzs7QUFFMUJBLFVBQVUsa0NBQVYsRUFBOEMsWUFBTztBQUNwREMsS0FBSSxzQkFBSixFQUE0QixZQUFPO0FBQ2xDSixVQUFPSyxLQUFQLENBQWNILE9BQVEsQ0FBRSxDQUFGLEVBQUssQ0FBTCxFQUFRLENBQVIsQ0FBUixFQUFxQixDQUFyQixFQUF3QixJQUF4QixDQUFkLEVBQThDLENBQTlDO0FBQ0EsR0FGRDtBQUdBLEVBSkQ7O0FBTUFDLFVBQVUsMkNBQVYsRUFBdUQsWUFBTztBQUM3REMsS0FBSSw0QkFBSixFQUFrQyxZQUFPO0FBQ3hDSixVQUFPSyxLQUFQLENBQWNILE9BQVEsQ0FBRSxDQUFGLEVBQUssQ0FBTCxFQUFRLENBQVIsRUFBVyxPQUFYLENBQVIsRUFBOEIsT0FBOUIsQ0FBZCxFQUF1RCxPQUF2RDtBQUNBLEdBRkQ7QUFHQSxFQUpEOztBQU1BQyxVQUFVLG9DQUFWLEVBQWdELFlBQU87QUFDdERDLEtBQUkseUJBQUosRUFBK0IsWUFBTztBQUNyQ0osVUFBT0ssS0FBUCxDQUFjSCxPQUFRLENBQUUsQ0FBRixFQUFLLENBQUwsRUFBUSxDQUFSLEVBQVcsSUFBWCxDQUFSLEVBQTJCLElBQTNCLENBQWQsRUFBaUQsSUFBakQ7QUFDQSxHQUZEO0FBR0EsRUFKRDs7QUFNQUMsVUFBVSx5REFBVixFQUFxRSxZQUFPO0FBQzNFQyxLQUFJLDBDQUFKLEVBQWdELFlBQU87QUFDdERKLFVBQU9LLEtBQVAsQ0FBY0gsT0FBUSxDQUFFLENBQUYsRUFBSyxDQUFMLEVBQVEsQ0FBUixFQUFXLG1CQUFZLE9BQVosQ0FBWCxDQUFSLEVBQTZDSSxNQUE3QyxDQUFkLEVBQXFFLG1CQUFZLE9BQVosQ0FBckU7QUFDQSxHQUZEO0FBR0EsRUFKRDs7QUFNQUgsVUFBVSx3Q0FBVixFQUFvRCxZQUFPO0FBQzFEQyxLQUFJLDBCQUFKLEVBQWdDLFlBQU87QUFDdENKLFVBQU9PLFNBQVAsQ0FBa0JMLE9BQVEsQ0FBRSxDQUFGLEVBQUssQ0FBTCxFQUFRLENBQVIsRUFBVyxLQUFYLENBQVIsRUFBNEJNLE1BQTVCLENBQWxCLEVBQXdELEtBQXhEO0FBQ0EsR0FGRDtBQUdBLEVBSkQ7O0FBTUFMLFVBQVUsMENBQVYsRUFBc0QsWUFBTztBQUM1REMsS0FBSSw0QkFBSixFQUFrQyxZQUFPO0FBQ3hDSixVQUFPSyxLQUFQLENBQWNILE9BQVEsQ0FBRSxDQUFGLEVBQUssQ0FBTCxFQUFRLENBQVIsRUFBVyxPQUFYLENBQVIsRUFBOEJPLE1BQTlCLENBQWQsRUFBc0QsT0FBdEQ7QUFDQSxHQUZEO0FBR0EsRUFKRDs7QUFNQU4sVUFBVSx5RkFBVixFQUFxRyxZQUFPO0FBQzNHQyxLQUFJLHdEQUFKLEVBQThELFlBQU87QUFDcEUsT0FBSU0sT0FBTyxTQUFTQyxLQUFULEdBQWlCLENBQUUsT0FBTyxPQUFQLENBQWdCLENBQTlDOztBQUVBWCxVQUFPTyxTQUFQLENBQWtCTCxPQUFRLENBQUUsSUFBRixFQUFRLG1CQUFZLElBQVosQ0FBUixFQUE0QlEsSUFBNUIsQ0FBUixFQUE0Q0UsUUFBNUMsQ0FBbEIsRUFBMEVGLElBQTFFO0FBQ0EsR0FKRDtBQUtBLEVBTkQ7O0FBUUEsQ0E5Q0Q7QUErQ0EiLCJmaWxlIjoidGVzdC5zdXBwb3J0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qO1xuXHRAdGVzdC1saWNlbnNlOlxuXHRcdFRoZSBNSVQgTGljZW5zZSAoTUlUKVxuXHRcdEBtaXQtbGljZW5zZVxuXG5cdFx0Q29weXJpZ2h0IChAYykgMjAxNyBSaWNoZXZlIFNpb2RpbmEgQmViZWRvclxuXHRcdEBlbWFpbDogcmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVxuXG5cdFx0UGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuXHRcdG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcblx0XHRpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG5cdFx0dG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuXHRcdGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuXHRcdGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblx0XHRUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcblx0XHRjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5cdFx0VEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuXHRcdElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuXHRcdEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuXHRcdEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcblx0XHRMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuXHRcdE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXG5cdFx0U09GVFdBUkUuXG5cdEBlbmQtdGVzdC1saWNlbnNlXG5cblx0QHRlc3QtY29uZmlndXJhdGlvbjpcblx0XHR7XG5cdFx0XHRcInBhY2thZ2VcIjogXCJvcHRmb3JcIixcblx0XHRcdFwicGF0aFwiOiBcIm9wdGZvci90ZXN0Lm1vZHVsZS5qc1wiLFxuXHRcdFx0XCJmaWxlXCI6IFwidGVzdC5tb2R1bGUuanNcIixcblx0XHRcdFwibW9kdWxlXCI6IFwidGVzdFwiLFxuXHRcdFx0XCJhdXRob3JcIjogXCJSaWNoZXZlIFMuIEJlYmVkb3JcIixcblx0XHRcdFwiZU1haWxcIjogXCJyaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXCIsXG5cdFx0XHRcInJlcG9zaXRvcnlcIjogXCJodHRwczovL2dpdGh1Yi5jb20vdm9sa292YXN5c3RlbXMvb3B0Zm9yLmdpdFwiXG5cdFx0fVxuXHRAZW5kLXRlc3QtY29uZmlndXJhdGlvblxuXG5cdEB0ZXN0LWRvY3VtZW50YXRpb246XG5cblx0QGVuZC10ZXN0LWRvY3VtZW50YXRpb25cblxuXHRAaW5jbHVkZTpcblx0XHR7XG5cdFx0XHRcImFzc2VydFwiOiBcInNob3VsZFwiLFxuXHRcdFx0XCJvcHRmb3JcIjogXCJvcHRmb3JcIlxuXHRcdH1cblx0QGVuZC1pbmNsdWRlXG4qL1xuXG5jb25zdCBhc3NlcnQgPSByZXF1aXJlKCBcInNob3VsZC9hcy1mdW5jdGlvblwiICk7XG5cblxuXG4vLzogQGNsaWVudDpcbmNvbnN0IG9wdGZvciA9IHJlcXVpcmUoIFwiLi9vcHRmb3Iuc3VwcG9ydC5qc1wiICk7XG4vLzogQGVuZC1jbGllbnRcblxuXG5cblxuXG5cblxuLy86IEBjbGllbnQ6XG5kZXNjcmliZSggXCJvcHRmb3JcIiwgKCApID0+IHtcblxuXHRkZXNjcmliZSggXCJgb3B0Zm9yKCBbIDEsIDIsIDMgXSwgMiwgdHJ1ZSApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCBiZSBlcXVhbCB0byAyXCIsICggKSA9PiB7XG5cdFx0XHRhc3NlcnQuZXF1YWwoIG9wdGZvciggWyAxLCAyLCAzIF0sIDIsIHRydWUgKSwgMiApO1xuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImBvcHRmb3IoIFsgMSwgMiwgMywgJ2hlbGxvJyBdLCAnaGVsbG8nIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIGJlIGVxdWFsIHRvICdoZWxsbydcIiwgKCApID0+IHtcblx0XHRcdGFzc2VydC5lcXVhbCggb3B0Zm9yKCBbIDEsIDIsIDMsIFwiaGVsbG9cIiBdLCBcImhlbGxvXCIgKSwgXCJoZWxsb1wiICk7XG5cdFx0fSApO1xuXHR9ICk7XG5cblx0ZGVzY3JpYmUoIFwiYG9wdGZvciggWyAxLCAyLCAzLCB0cnVlIF0sIHRydWUgKVwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCBiZSBlcXVhbCB0byB0cnVlXCIsICggKSA9PiB7XG5cdFx0XHRhc3NlcnQuZXF1YWwoIG9wdGZvciggWyAxLCAyLCAzLCB0cnVlIF0sIHRydWUgKSwgdHJ1ZSApO1xuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImBvcHRmb3IoIFsgMSwgMiwgMywgU3ltYm9sLmZvciggJ2hlbGxvJyApIF0gLCBTWU1CT0wgKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgYmUgZXF1YWwgdG8gU3ltYm9sLmZvciggJ2hlbGxvJyApXCIsICggKSA9PiB7XG5cdFx0XHRhc3NlcnQuZXF1YWwoIG9wdGZvciggWyAxLCAyLCAzLCBTeW1ib2wuZm9yKCBcImhlbGxvXCIgKSBdICwgU1lNQk9MICksIFN5bWJvbC5mb3IoIFwiaGVsbG9cIiApICk7XG5cdFx0fSApO1xuXHR9ICk7XG5cblx0ZGVzY3JpYmUoIFwiYG9wdGZvciggWyAxLCAyLCAzLCAvZWFoLyBdLCBSZWdFeHAgKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgYmUgZXF1YWwgdG8gL2VhaC9cIiwgKCApID0+IHtcblx0XHRcdGFzc2VydC5kZWVwRXF1YWwoIG9wdGZvciggWyAxLCAyLCAzLCAvZWFoLyBdLCBSZWdFeHAgKSwgL2VhaC8gKTtcblx0XHR9ICk7XG5cdH0gKTtcblxuXHRkZXNjcmliZSggXCJgb3B0Zm9yKCBbIDEsIDIsIDMsICdoZWxsbycgXSwgU1RSSU5HIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIGJlIGVxdWFsIHRvICdoZWxsbydcIiwgKCApID0+IHtcblx0XHRcdGFzc2VydC5lcXVhbCggb3B0Zm9yKCBbIDEsIDIsIDMsIFwiaGVsbG9cIiBdLCBTVFJJTkcgKSwgXCJoZWxsb1wiICk7XG5cdFx0fSApO1xuXHR9ICk7XG5cblx0ZGVzY3JpYmUoIFwiYG9wdGZvciggWyBudWxsLCBTeW1ib2wuZm9yKCAnaGknICksIGZ1bmN0aW9uIGhlbGxvKCApeyByZXR1cm4gJ2hlbGxvJyB9IF0sIEZVTkNUSU9OIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIGJlIGVxdWFsIHRvIGZ1bmN0aW9uIGhlbGxvKCApeyByZXR1cm4gJ2hlbGxvJyB9XCIsICggKSA9PiB7XG5cdFx0XHRsZXQgdGVzdCA9IGZ1bmN0aW9uIGhlbGxvKCApeyByZXR1cm4gXCJoZWxsb1wiIH07XG5cblx0XHRcdGFzc2VydC5kZWVwRXF1YWwoIG9wdGZvciggWyBudWxsLCBTeW1ib2wuZm9yKCBcImhpXCIgKSwgdGVzdCBdLCBGVU5DVElPTiApLCB0ZXN0ICk7XG5cdFx0fSApO1xuXHR9ICk7XG5cbn0gKTtcbi8vOiBAZW5kLWNsaWVudFxuXG5cblxuIl19
//# sourceMappingURL=test.support.js.map
