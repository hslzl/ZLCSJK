/**
 * 信息查询模块
 */
(function () {
    "use strict";

    define([
    ], function () {

        function infoSearchHighService() {
            var _infoSearchHighController = null;

            return {
                setController: function (infoSearchHighController) {
                	_infoSearchHighController = infoSearchHighController;
                },
                getController: function () {
                    return _infoSearchHighController;
                }
                
            };
        }

        function init(App) {
            App.factory('infoSearchHighService',infoSearchHighService );
            return infoSearchHighService;
        }

        return { start: init };

    });

}).call(this);