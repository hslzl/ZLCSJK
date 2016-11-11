(function() {
    "use strict";

    define([], function() {

        function deptManagerService() {
            var _deptManagerController = null;

            return {
                setController: function(deptManagerController) {
                    _deptManagerController = deptManagerController;
                },
                getController: function() {
                    return _deptManagerController;
                }

            };
        }

        function init(App) {
            App.factory('deptManagerService', deptManagerService);
            return deptManagerService;
        }

        return {
            start: init
        };

    });

}).call(this);