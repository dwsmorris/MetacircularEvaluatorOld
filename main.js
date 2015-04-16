requirejs.config({
    paths: {
    	'underscore': 'node_modules/underscore/underscore',
    	convert: "js/convert",
		getPolygonInternalAngle: "js/getPolygonInternalAngle"
    },

    shim: {
        'underscore': {
            exports: '_'
        }
    }
});

define([
	"getPolygonInternalAngle"
], function (
	getPolygonInternalAngle
) {
	alert(getPolygonInternalAngle(4));
});
