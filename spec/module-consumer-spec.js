/*globals define, describe, it, expect*/


define([
	"stub"
], function (
	stub
) {

	describe("moduleConsumer", function () {
	    it("calls logger.log with 'entered module consumer'", function () {
	        var logger = {
	            log: function() {}
	        };

	        new Squire().mock("logger", logger).require(["module-consumer"], function(moduleConsumer) {
	            moduleConsumer();

	            expect(logger.log).not.toHaveBeenCalled();
	            expect(1).toBe(2);
	        });
            
	        //moduleConsumer();
	        //expect(stub.log).toHaveBeenCalled();
	    });
	});
});