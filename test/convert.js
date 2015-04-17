/*globals define, describe, it, expect*/

define([
	"convert"
], function(
	convert
) {

	describe("convert", function() {
		describe("degreesToRadians", function() {
			it("returns pi from 180", function() {
				expect(Math.abs(convert.degreesToRadians(180) - Math.PI)).toBeLessThan(1E-10);
			});

			it("returns 180 from pi", function () {
				expect(Math.abs(convert.radiansToDegrees(Math.PI) - 180)).toBeLessThan(1E-10);
			});
		});
	});

});