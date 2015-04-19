/*globals define, describe, it, expect*/

define([
	"../js/module-consumer",
	"stub"
], function (
	moduleConsumer,
	stub
) {

	describe("moduleConsumer", function () {
		it("calls logger.log with 'entered module consumer'", function () {
			//expect(stub.log).toHaveBeenCalled();
		});
	});
});