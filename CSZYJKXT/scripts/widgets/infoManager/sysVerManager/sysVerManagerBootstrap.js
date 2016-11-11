(function () {
    "use strict";

    define([
        'widgets/infoManager/sysVerManager/sysVerManagerService',
        'widgets/infoManager/sysVerManager/sysVerManagerController',
        'widgets/infoManager/sysVerManager/sysVerManagerDirective'
    ], function (sysVerManagerService, sysVerManagerController, sysVerManagerDirective) {

        function init(app) {
            sysVerManagerController.start(app);
            sysVerManagerDirective.start(app);
            sysVerManagerService.start(app);
        }

        return { start: init };

    });

}).call(this);
