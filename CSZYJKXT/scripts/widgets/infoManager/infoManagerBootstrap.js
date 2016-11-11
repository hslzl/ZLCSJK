/**
 * Created by zhang on 2015/10/29.
 */
(function () {
    "use strict";

    define([
        'widgets/infoManager/infoManagerService',
        'widgets/infoManager/infoManagerController',
        'widgets/infoManager/infoManagerDirective',
        'widgets/infoManager/sysTimeSpanSettings/sysTimeSpanSettingsBootstrap',
        'widgets/infoManager/sysVerManager/sysVerManagerBootstrap'
    ], function (infoManagerService, infoManagerController, infoManagerDirective, 
        sysTimeSpanSettingsBootstrap,sysVerManagerBootstrap) {

        function init(App) {
            infoManagerService.start(App);
            infoManagerController.start(App);
            infoManagerDirective.start(App);
            sysTimeSpanSettingsBootstrap.start(App);
            sysVerManagerBootstrap.start(App);
        }

        return { start: init };

    });

}).call(this);
