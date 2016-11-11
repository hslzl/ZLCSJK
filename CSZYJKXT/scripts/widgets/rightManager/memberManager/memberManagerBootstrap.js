(function () {
    "use strict";

    define([
       'widgets/rightManager/memberManager/memberManagerService',
       'widgets/rightManager/memberManager/memberManagerController',
       'widgets/rightManager/memberManager/memberManagerDirective'
    ], function (memberManagerService, memberManagerController, memberManagerDirective) {

        function init(app) {
            memberManagerController.start(app);
            memberManagerDirective.start(app); 
            memberManagerService.start(app);
        }

        return { start: init };

    });

}).call(this);