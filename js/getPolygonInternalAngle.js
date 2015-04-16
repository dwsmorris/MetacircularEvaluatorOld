/*globals define*/

define([
	"convert"
], function (
	convert
) {

	return function (noOfSides) {
		var degrees = 180 - 360 / noOfSides;
		var radians = convert.degreesToRadians(degrees);

		return radians;
	};

});