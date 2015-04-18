requirejs.config({
    paths: {
    	'underscore': 'node_modules/underscore/underscore',
    	convert: "js/convert",
    	getPolygonInternalAngle: "js/get-polygon-internal-angle",
        getStub: "js/get-stub"
    },

    shim: {
        'underscore': {
            exports: '_'
        }
    }
});

define([
	"getStub"
], function (
	getStub
) {

	var stub = getStub();
	var t = typeof stub;
	stub.i = 1;
	var i = 0;

});
