/*globals define, describe, it, expect*/


define([
    "test"
], function (
    testr
) {

    describe("moduleConsumer", function () {
        it("calls logger.log with 'entered module consumer'", function () {
            var logger = {
                log: function () { }
            };
            spyOn(logger, "log");

/*
            var testModuleConsumer = testr("../js/module-consumer", {
                "logger": logger
            });

            testModuleConsumer();

             expect(logger.log).toHaveBeenCalled();
             */
	    });
	});
});