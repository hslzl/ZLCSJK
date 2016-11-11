(function () {
    "use strict";

    define([
       'widgets/rightManager/deptManager/deptManagerService',
       'widgets/rightManager/deptManager/deptManagerController',
       'widgets/rightManager/deptManager/deptManagerDirective'
    ], function (deptManagerService, deptManagerController, deptManagerDirective) {

        function init(app) {
            deptManagerController.start(app);
            deptManagerDirective.start(app); 
            deptManagerService.start(app);
        }

        return { start: init };

    });

}).call(this);