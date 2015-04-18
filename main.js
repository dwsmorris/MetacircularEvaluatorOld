requirejs.config({
    paths: {
    	'underscore': 'node_modules/underscore/underscore',
    	convert: "js/convert",
    	getPolygonInternalAngle: "js/get-polygon-internal-angle",
        stub: "js/stub"
    },

    shim: {
        'underscore': {
            exports: '_'
        }
    }
});

define([
	"stub",
	"getPolygonInternalAngle"
], function (
	stub,
	getPolygonInternalAngle
) {

	alert(getPolygonInternalAngle(4));
});
