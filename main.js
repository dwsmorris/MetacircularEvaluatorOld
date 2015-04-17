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
    stub.a = 1;
    stub.b = undefined;

    console.log(stub.a);
    console.log(stub.b);
    console.log(stub.c);
});
