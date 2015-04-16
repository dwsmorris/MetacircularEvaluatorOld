/*globals define, describe*/

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
		});
	});

});