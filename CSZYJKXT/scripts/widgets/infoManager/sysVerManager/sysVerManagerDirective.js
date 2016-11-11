(function() {
    "use strict";

    define([
        'angular',
        'text!widgets/infoManager/sysVerManager/template/sysVerManagerTemplate.html'
    ], function(angular, tpl) {

        function sysVerManagerDirective() {
            return {
                restrict: "E",
                template: tpl,
                controller: 'sysVerManagerController',
                replace: false,
                scope: {},
                link: function(scope, iElement, iAttrs) {}
            };
        }

        function init(App) {
            App.directive('sysVerManager', sysVerManagerDirective);
        }

        return {
            start: init
        };

    });

}).call(this);