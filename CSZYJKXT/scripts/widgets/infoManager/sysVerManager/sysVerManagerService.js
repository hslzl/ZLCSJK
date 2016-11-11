(function() {
    "use strict";

    define([], function() {

        function sysVerManagerService() {
            var _sysVerManagerController = null;

            return {
                setController: function(sysVerManagerController) {
                    _sysVerManagerController = sysVerManagerController;
                },
                getController: function() {
                    return _sysVerManagerController;
                }

            };
        }

        function init(App) {
            App.factory('sysVerManagerService', sysVerManagerService);
            return sysVerManagerService;
        }

        return {
            start: init
        };

    });

}).call(this);
