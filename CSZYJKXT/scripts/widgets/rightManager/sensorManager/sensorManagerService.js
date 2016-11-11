(function() {
    "use strict";

    define([], function() {

        function memberManagerService() {
            var _memberManagerController = null;

            return {
                setController: function(memberManagerController) {
                    _memberManagerController = memberManagerController;
                },
                getController: function() {
                    return _memberManagerController;
                }

            };
        }

        function init(App) {
            App.factory('memberManagerService', memberManagerService);
            return memberManagerService;
        }

        return {
            start: init
        };

    });

}).call(this);