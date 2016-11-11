(function () {
    "use strict";

    define([
        'angular',
        'text!widgets/rightManager/memberManager/template/memberManagerTemplate.html'
    ], function (angular, tpl) {

        function memberManagerDirective() {
            return {
                restrict: "E",
                template: tpl,
                controller: 'memberManagerController',
                replace: false,
                scope: {},
                link: function (scope, iElement, iAttrs) {

                }
            };
        }

        function init(App) {
            App.directive('memberManager', memberManagerDirective);

        }

        return { start: init };

    });

}).call(this);
