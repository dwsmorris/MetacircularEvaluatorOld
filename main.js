requirejs.config({
    paths: {
    	'underscore': 'node_modules/underscore/underscore',
		convert: "js/convert"
    },

    shim: {
        'underscore': {
            exports: '_'
        }
    }
});

define([
	"convert"
], function (
	convert
) {
	alert(convert.degreesToRadians(180));
});
