(function () {
    "use strict";

    define([
        'angular',
        'text!widgets/rightManager/deptManager/template/deptManagerTemplate.html'
    ], function (angular, tpl) {

        function deptManagerDirective() {
            return {
                restrict: "E",
                template: tpl,
                controller: 'deptManagerController',
                replace: false,
                scope: {},
                link: function (scope, iElement, iAttrs) {

                }
            };
        }

        function init(App) {
            App.directive('deptManager', deptManagerDirective);

        }

        return { start: init };

    });

}).call(this);
