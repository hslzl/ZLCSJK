(function () {
    "use strict";

    define([
        'angular',
        'text!widgets/infowindow/template/infowindowTemplate.html'
    ], function (angular, tpl) {

        function infowindowDirective() {
            return {
                restrict: "E",
                template: tpl,
                controller: 'infowindowController',
                replace: true,
                scope:{},
                link: function (scope, iElement, iAttrs) {
                }
            };
        }

        function init(App) {
            App.directive('infowindow', infowindowDirective);
        }
        return { start: init };
    });

}).call(this);