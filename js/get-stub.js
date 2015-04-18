/*globals define, Proxy*/

define(function () {

    return function getStub() {
    	return Proxy.createFunction({ // properties
    		get: function (target, name) {
    			// return name in target ? target[name] : getStub();
    			return getStub();
    		},
    		set: function (target, name, value) {
    		}
    	}, function () { // invocation
    		return getStub();
    	});
    };

});