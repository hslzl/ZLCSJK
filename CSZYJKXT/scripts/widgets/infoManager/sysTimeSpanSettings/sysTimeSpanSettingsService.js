(function() {
    "use strict";

    define([], function() {

        function sysTimeSpanSettingsService() {
            var _sysTimeSpanSettingsController = null;

            return {
                setController: function(sysTimeSpanSettingsController) {
                    _sysTimeSpanSettingsController = sysTimeSpanSettingsController;
                },
                getController: function() {
                    return _sysTimeSpanSettingsController;
                }

            };
        }

        function init(App) {
            App.factory('sysTimeSpanSettingsService', sysTimeSpanSettingsService);
            return sysTimeSpanSettingsService;
        }

        return {
            start: init
        };

    });

}).call(this);
