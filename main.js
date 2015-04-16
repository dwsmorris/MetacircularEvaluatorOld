requirejs.config({
    paths: {
    	'jquery': 'node_modules/jquery/dist/jquery',
    	'underscore': 'node_modules/underscore/underscore',
    	'app': "js/app"
    },

    shim: {
        'underscore': {
            exports: '_'
        }
    }
});

define(['app', 'jquery'], function (App, $) {
    var app = new App($('body'));
    app.render();
});
