/**
 * Created by zhang on 2015/10/29.
 */
(function () {
    "use strict";

    define([
    ], function () {

        function infoManagerService() {
            var _infoManagerController = null;

            return {
                setController: function (infoManagerController) {
                    _infoManagerController = infoManagerController;
                },
                getController: function () {
                    return _infoManagerController;
                }

            };


        }

        function init(App) {
            App.factory('infoManagerService',infoManagerService );
            return infoManagerService;
        }

        return { start: init };

    });

}).call(this);
