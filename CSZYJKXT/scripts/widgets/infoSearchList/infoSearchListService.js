(function () {
    "use strict";

    define([
    ], function () {

        function infoSearchListService() {
            var _infoSearchListController= null;

            return {
                setController: function (infoSearchListController) {
                	_infoSearchListController = infoSearchListController;
                },
                getController: function () {
                    return _infoSearchListController;
                }
            };
        }

        function init(App) {
            App.factory('infoSearchListService', infoSearchListService);
            return infoSearchListService;
        }

        return { start: init };

    });

}).call(this);