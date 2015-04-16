requirejs.config({
    paths: {
    	'jquery': 'node_modules/jquery/dist/jquery',
    	'underscore': 'node_modules/underscore/underscore',
    	'app': "js/app",
		convert: "js/convert"
    },

    shim: {
        'underscore': {
            exports: '_'
        }
    }
});

define(['app', 'jquery', "convert"], function (App, $, convert) {
    var app = new App($('body'));
    app.render();

	//alert(convert.degreesToRadians(180));
});
