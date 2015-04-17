/*globals define, describe, it, expect*/

define([
    "../js/get-stub"
], function (
    getStub
) {

    describe("getStub", function() {
        it("returns an overriden defined property", function () {
            var stub = getStub();
            stub.a = 1;

            expect(stub.a).toEqual(1);
        });

        it("returns an overriden property set to undefined", function () {
            var stub = getStub();
            stub.a = undefined;

            expect(stub.a).not.toBeDefined();
        });

        it("returns an object (stub) when an undefined property is called on it", function() {
            var stub = getStub();

            expect(typeof stub.a).toEqual("object");
        });
    });

});