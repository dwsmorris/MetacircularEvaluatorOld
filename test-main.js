var tests = [];
for (var file in window.__karma__.files) {
	if (window.__karma__.files.hasOwnProperty(file)) {
		if (/Spec\.js$/.test(file)) {
			tests.push(file);
		}
	}
}

requirejs.config({
	// Karma serves files from '/base'
	baseUrl: '/base',

	paths: {
		'jquery': 'node_modules/jquery/dist/jquery',
		'underscore': 'node_modules/underscore/underscore',
		"app": "src/app"
	},

	shim: {
		'underscore': {
			exports: '_'
		}
	},

	// ask Require.js to load these files (all our tests)
	deps: tests,

	// start test run, once Require.js is done
	callback: window.__karma__.start
});