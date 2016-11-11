(function () {
    "use strict";

    define([
       'widgets/rightManager/rightManagerService',
       'widgets/rightManager/rightManagerController',
       'widgets/rightManager/rightManagerDirective',
       
        'widgets/rightManager/deptManager/deptManagerBootstrap',
        'widgets/rightManager/memberManager/memberManagerBootstrap',
        'widgets/rightManager/roleManager/roleManagerBootstrap',
        'widgets/rightManager/resManager/resManagerBootstrap',
    ], function (rightManager, rightManagerController, rightManagerDirective,
      deptManagerBootstrap,memberManagerBootstrap,roleManagerBootstrap,resManagerBootstrap) {

        function init(App) {
            rightManager.start(App);
            rightManagerController.start(App);
            rightManagerDirective.start(App);

            deptManagerBootstrap.start(App);
            memberManagerBootstrap.start(App);
            roleManagerBootstrap.start(App);
            resManagerBootstrap.start(App);
        }

        return { start: init };

    });

}).call(this);