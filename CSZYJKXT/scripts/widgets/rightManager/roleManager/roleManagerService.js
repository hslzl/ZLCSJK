(function() {
    "use strict";

    define([], function() {

        function roleManagerService() {
            var _roleManagerController = null;

            return {
                setController: function(roleManagerController) {
                    _roleManagerController = roleManagerController;
                },
                getController: function() {
                    return _roleManagerController;
                }

            };
        }

        function init(App) {
            App.factory('roleManagerService', roleManagerService);
            return roleManagerService;
        }

        return {
            start: init
        };

    });

}).call(this);