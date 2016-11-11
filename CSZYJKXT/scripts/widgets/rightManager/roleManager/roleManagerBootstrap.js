(function () {
    "use strict";

    define([
       'widgets/rightManager/roleManager/roleManagerService',
       'widgets/rightManager/roleManager/roleManagerController',
       'widgets/rightManager/roleManager/roleManagerDirective'
    ], function (roleManagerService, roleManagerController, roleManagerDirective) {

        function init(app) {
            roleManagerController.start(app);
            roleManagerDirective.start(app); 
            roleManagerService.start(app);
        }

        return { start: init };

    });

}).call(this);