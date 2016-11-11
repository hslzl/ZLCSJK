/**
 * 信息查询模块
 */
(function () {
    "use strict";

    define([
            'widgets/infoSearchHigh/infoSearchHighController',
            'widgets/infoSearchHigh/infoSearchHighDirective',
            'widgets/infoSearchHigh/infoSearchHighService'
        ], function (infoSearchHighController,infoSearchHighDirective, infoSearchHighService) {

        function init(App) {
        	infoSearchHighService.start(App);
        	infoSearchHighDirective.start(App);
        	infoSearchHighController.start(App);
        }

        return { start: init };

    });

}).call(this);