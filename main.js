requirejs.config({
    paths: {
    	'underscore': 'node_modules/underscore/underscore',
    	logger: "js/logger",
    	moduleConsumer: "js/module-consumer"
    },
    map: {
    	"*": {
			stub: "js/stub"
    	}
    },
    shim: {
        'underscore': {
            exports: '_'
        }
    }
});

define([
	"stub",
	"logger"
], function (
	stub,
	logger
) {
	var o = stub();
	var i = 90;
});
