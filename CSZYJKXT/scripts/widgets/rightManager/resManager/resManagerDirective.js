(function () {
    "use strict";

    define([
        'angular',
        'text!widgets/rightManager/resManager/template/resManagerTemplate.html'
    ], function (angular, tpl) {

        function resManagerDirective() {
            return {
                restrict: "E",
                template: tpl,
                controller: 'resManagerController',
                replace: false,
                scope: {},
                link: function (scope, iElement, iAttrs) {

                }
            };
        }

        function init(App) {
            App.directive('resManager', resManagerDirective);

        }

        return { start: init };

    });

}).call(this);
