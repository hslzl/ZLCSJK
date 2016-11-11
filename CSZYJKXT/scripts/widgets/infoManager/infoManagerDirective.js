/**
 * Created by zhang on 2015/10/29.
 */
(function () {
    "use strict";

    define([
        'angular',
        'text!widgets/infoManager/template/infoManagerTemplate.html'
    ], function (angular, tpl) {

        function infoManagerDirective() {
            return {
                restrict: "E",
                template: tpl,
                controller: 'infoManagerController',
                replace: false,
                scope: {},
                link: function (scope, iElement, iAttrs) {

                }
            };
        }

        function init(App) {
            App.directive('infoManager', infoManagerDirective);
        }

        return { start: init };

    });

}).call(this);
