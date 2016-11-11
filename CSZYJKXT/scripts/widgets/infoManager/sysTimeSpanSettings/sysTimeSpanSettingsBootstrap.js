(function () {
    "use strict";

    define([
        'widgets/infoManager/sysTimeSpanSettings/sysTimeSpanSettingsService',
        'widgets/infoManager/sysTimeSpanSettings/sysTimeSpanSettingsController',
        'widgets/infoManager/sysTimeSpanSettings/sysTimeSpanSettingsDirective'
    ], function (sysTimeSpanSettingsService, sysTimeSpanSettingsController, sysTimeSpanSettingsDirective) {

        function init(app) {
            sysTimeSpanSettingsController.start(app);
            sysTimeSpanSettingsDirective.start(app);
            sysTimeSpanSettingsService.start(app);
        }

        return { start: init };

    });

}).call(this);
