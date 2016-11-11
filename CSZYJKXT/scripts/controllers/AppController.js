
(function() {
    "use strict";

    define([
        'angular'
    ], function(angular) {
        //esriConfig.defaults.io.proxyUrl = "proxy/proxy.jsp";
        // esriConfig.defaults.io.alwaysUseProxy = false;
        //esriConfig.defaults.io.corsDetection = false;

        function ActiveMenu($scope, menuWidgetName) {
            $scope.$bus.publish({
                channel: 'menu',
                topic: 'menu.onActive',
                data: {
                    name: menuWidgetName
                }
            });
        }

        function AppController($scope, $window, $cookies) {
            $scope.infoManagerVisible = true;
            $scope.rightManagerVisible = true;
            $scope.sysManagerVisible = true;
            $scope.totalItems = 0;
            $scope.rightManagerVisible = true;
            $scope.selectMenu = "infoManager";

            $scope.mapContrastive = function() {
                ActiveMenu($scope, 'mapContrastive');
            }

            $scope.hmapContrastive = function() {
                ActiveMenu($scope, 'hmapContrastive');
            }

            $scope.thematicMap = function() {
                ActiveMenu($scope, 'thematicMap');
            }

            $scope.menuClick = function(menuWidgetName) {
                ActiveMenu($scope, menuWidgetName);
                $scope.selectMenu = menuWidgetName;
            }
            $scope.toolsClick = function(menuWidgetName) {
                ActiveMenu($scope, menuWidgetName);
            }

            angular.element("#ContentContainer").height(window.innerHeight-100);
            angular.element("#mapinfoid").height(window.innerHeight-100);
            angular.element("#mapContainerid").height(window.innerHeight-100);
        }

        function init(App) {
            App.controller('AppController', ['$scope', '$window', '$cookies', AppController]);
            return AppController;
        }

        return {
            start: init
        };

    });

}).call(this);