requirejs.config({
    paths: {
    	'underscore': 'node_modules/underscore/underscore',
    	logger: "js/logger",
    	moduleConsumer: "js/module-consumer",
        stub: "js/stub"
    },

    shim: {
        'underscore': {
            exports: '_'
        }
    }
});

define([
	"stub"
], function (
	stub
) {

});
