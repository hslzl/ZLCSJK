(function() {
    "use strict";

    define([], function() {

        function resManagerService() {
            var _resManagerController = null;

            return {
                setController: function(resManagerService) {
                    _resManagerController = resManagerService;
                },
                getController: function() {
                    return _resManagerController;
                }

            };
        }

        function init(App) {
            App.factory('resManagerService', resManagerService);
            return resManagerService;
        }

        return {
            start: init
        };

    });

}).call(this);