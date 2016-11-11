/**
 * @author rrubalcava@odoe.net (Rene Rubalcava)
 */
/*global define:true, require:true, angular: true, console:true */

(function () {
    "use strict";
    define([
        'angular',
        'postal',
        'controllers/AppController',

        'widgets/userLoginDialog/userLoginDialogBootstrap',
        'widgets/userExit/userExitBootstrap',
        'widgets/userManager/userManagerBootstrap',
        'widgets/mapManager/mapManagerBootstrap',
        'widgets/rightManager/rightManagerBootstrap',
        'widgets/infoSearchHigh/infoSearchHighBootstrap',
        'widgets/infoManager/infoManagerBootstrap',
        'widgets/infoEdit/infoEditBootstrap',
        'widgets/flushManager/flushManagerBootstrap'
    ], function (angular, postal,AppController,
                 userLoginDialogBootstrap,
                 userExitBootstrap,userManagerBootstrap,rightManagerBootstrap,infoManagerBootstrap,infoSearchHighBootstrap,mapManagerBootstrap,infoEditBootstrap,flushManagerBootstrap) {
        function init() {
            var app = angular.module('app', ['ui.bootstrap','ngCookies', 'ngDialog','ng.ueditor']).config(function ($provide) {
                $provide.decorator('$rootScope', [
                    '$delegate',
                    function ($delegate) {
                        Object.defineProperty($delegate.constructor.prototype, '$bus', {
                            get: function () {
                                var self = this;
                                return {
                                    subscribe: function () {
                                        var sub = postal.subscribe.apply(postal, arguments);
                                        self.$on('$destroy',
                                            function () {
                                                sub.unsubscribe();
                                            });
                                    },
                                    channel: postal.channel,
                                    publish: postal.publish
                                };
                            },
                            enumerable: false
                        });
                        return $delegate;
                    }
                ]);
            });

            AppController.start(app);

            userLoginDialogBootstrap.start(app);
            userExitBootstrap.start(app);
            userManagerBootstrap.start(app);
            mapManagerBootstrap.start(app);
            rightManagerBootstrap.start(app);
            infoSearchHighBootstrap.start(app);
            infoManagerBootstrap.start(app);
            infoEditBootstrap.start(app);
            flushManagerBootstrap.start(app);
            angular.bootstrap(document.body, ['app']);
            return app;
        }

        return {
            start: init
        };

    });

}).call(this);