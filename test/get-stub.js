﻿/*globals define, describe, it, expect*/

define([
    "../js/get-stub"
], function (
    getStub
) {

    describe("getStub", function() {
    	it("returns a stub when invoked", function () {
    		var stub = getStub();

    		expect(typeof stub()).toEqual("function");
    	});

    	it("returns an overriden defined property", function () {
            var stub = getStub();
            stub.property = 1;

            expect(stub.property).toEqual(1);
        });
		
        it("returns an overriden property set to undefined", function () {
            var stub = getStub();
            stub.property = undefined;

            expect(stub.property).toEqual(undefined);
        });
		
        it("returns an object (stub) when an undefined property is called on it", function() {
            var stub = getStub();

            expect(typeof stub.property).toEqual("function");
        });

        it("returns an overridden defined method", function() {
            var stub = getStub();
            stub.method = function() {
                return 1;
            };

            expect(stub.method()).toEqual(1);
        });
    });

});