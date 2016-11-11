(function () {
    "use strict";

    define([
    ], function () {

        function rightManagerService() {
            var _rightManagerController = null;

            return {
                setController: function (rightManagerController) {
                    _rightManagerController = rightManagerController;
                },
                getController: function () {
                    return _rightManagerController;
                }
                
            };


        }

        function init(App) {
            App.factory('rightManagerService',rightManagerService );
            return rightManagerService;
        }

        return { start: init };

    });

}).call(this);