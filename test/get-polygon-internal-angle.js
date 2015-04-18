/*globals define, describe, it, expect*/

define([
	"../js/get-polygon-internal-angle"
], function (
	getPolygonInternalAngle
) {

	describe("getPolygonInternalAngle", function () {
		it("returns pi/2 for square", function () {
			expect(Math.abs(getPolygonInternalAngle(4) - Math.PI/2)).toBeLessThan(1E-10);
		});
	});
});