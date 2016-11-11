/**
 * 信息查询模块
 */
(function () {
    "use strict";

    define([
        'angular',
        'text!widgets/infoSearchHigh/template/infoSearchHighTemplate.html'
    ], function (angular, tpl) {

        function infoSearchHighDirective() {
            return {
                restrict: "E",
                template: tpl,
                controller: 'infoSearchHighController',
                replace: false,
                scope: {},
                link: function (scope, iElement, iAttrs) {

                }
            };
        }

        function init(App) {
            App.directive('infoSearchHigh',infoSearchHighDirective);

        }

        return { start: init };

    });

}).call(this);
