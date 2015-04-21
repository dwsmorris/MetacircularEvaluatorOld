var allTestFiles = [];
var TEST_REGEXP = /spec\/.*\.js$/;

var pathToModule = function (path) {
    return path.replace(/^\/base\//, '').replace(/\.js$/, '');
};

Object.keys(window.__karma__.files).forEach(function (file) {
    if (TEST_REGEXP.test(file)) {
        // Normalize paths to RequireJS module names.
        allTestFiles.push(pathToModule(file));
    }
});


requirejs.config({
	// Karma serves files from '/base'
	baseUrl: '/base',

	paths: {
		'underscore': 'node_modules/underscore/underscore',
	},

	map: {
		"*": {
			logger: "js/stub",
			moduleConsumer: "js/stub",
			stub: "js/stub"
		}
    },

	shim: {
		'underscore': {
			exports: '_'
		}
	},

	// ask Require.js to load these files (all our tests)
	deps: allTestFiles,

	// start test run, once Require.js is done
	callback: window.__karma__.start
});