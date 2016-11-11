(function () {
    "use strict";

    define([
        'angular',
        'text!widgets/infoSearchList/template/infoSearchListTemplate.html'
    ], function (angular, tpl) {

        function infoSearchListDirective() {
            return {
                restrict: "E",
                template: tpl,
                controller: 'infoSearchListController',
                replace: false,
                scope: {},
                link: function (scope, iElement, iAttrs) {

                }
            };
        }

        function init(App) {
            App.directive('infoSearchList', infoSearchListDirective);

        }

            return { start: init };

    });

}).call(this);
