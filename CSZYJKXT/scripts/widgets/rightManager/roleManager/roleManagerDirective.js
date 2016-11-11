(function () {
    "use strict";

    define([
        'angular',
        'text!widgets/rightManager/roleManager/template/roleManagerTemplate.html'
    ], function (angular, tpl) {

        function roleManagerDirective() {
            return {
                restrict: "E",
                template: tpl,
                controller: 'roleManagerController',
                replace: false,
                scope: {},
                link: function (scope, iElement, iAttrs) {

                }
            };
        }

        function init(App) {
            App.directive('roleManager', roleManagerDirective);

        }

        return { start: init };

    });

}).call(this);
