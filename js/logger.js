/*globals define*/

define(function() {

    return {
        degreesToRadians: function(degrees) {
            return degrees * Math.PI / 180;
        },
        radiansToDegrees: function(radians) {
            return radians * 180 / Math.PI;
        }
    };

});