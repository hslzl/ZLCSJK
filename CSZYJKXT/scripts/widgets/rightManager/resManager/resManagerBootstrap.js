(function () {
    "use strict";

    define([
       'widgets/rightManager/resManager/resManagerService',
       'widgets/rightManager/resManager/resManagerController',
       'widgets/rightManager/resManager/resManagerDirective'
    ], function (resManagerService,resManagerController, resManagerDirective) {

        function init(app) {
        	resManagerService.start(app);
        	resManagerController.start(app); 
        	resManagerDirective.start(app);
        }

        return { start: init };

    });

}).call(this);