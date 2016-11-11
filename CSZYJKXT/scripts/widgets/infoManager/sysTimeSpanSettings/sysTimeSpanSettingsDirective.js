(function() {
    "use strict";

    define([
        'angular',
        'text!widgets/infoManager/sysTimeSpanSettings/template/sysTimeSpanSettingsTemplate.html'
    ], function(angular, tpl) {

        function sysTimeSpanSettingsDirective() {
            return {
                restrict: "E",
                template: tpl,
                controller: 'sysTimeSpanSettingsController',
                replace: false,
                scope: {},
                link: function(scope, iElement, iAttrs) {}
            };
        }

        function init(App) {
            App.directive('sysTimeSpanSettings', sysTimeSpanSettingsDirective);
        }

        return {
            start: init
        };

    });

}).call(this);