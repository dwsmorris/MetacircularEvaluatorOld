﻿/*globals define, Proxy*/

define(function () {

    var getStub = function(substitute) {
        return new Proxy({}, {
            get: function(target, name) {
                return name in target ? target[name] : getStub();
            }
        });
    };

    return getStub;

});