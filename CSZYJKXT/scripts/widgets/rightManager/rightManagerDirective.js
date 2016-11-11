(function () {
    "use strict";

    define([
        'angular',
        'text!widgets/rightManager/template/rightManagerTemplate.html'
    ], function (angular, tpl) {

        function rightManagerDirective() {
            return {
                restrict: "E",
                template: tpl,
                controller: 'rightManagerController',
                replace: false,
                scope: {},
                link: function (scope, iElement, iAttrs) {

                }
            };
        }

        function init(App) {
            App.directive('rightManager', rightManagerDirective);

        }

        return { start: init };

    });

}).call(this);
