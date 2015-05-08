/*globals define, describe, it, expect*/


define([
	"stub"
], function (
	stub
) {

    describe("moduleConsumer", function () {
        var logger = {
            log: function () { }
        };

        beforeEach(function(done) {
            var builder = new Squire().mock("logger", logger);
            var done = false;
            spyOn(logger, "log");
            builder.require(["module-consumer"], function (moduleConsumer) {
                moduleConsumer();
                done = true;
            });
        });
        
        it("calls logger.log with 'entered module consumer'", function () {
	            expect(logger.log).toHaveBeenCalled();
	    });
	});
});