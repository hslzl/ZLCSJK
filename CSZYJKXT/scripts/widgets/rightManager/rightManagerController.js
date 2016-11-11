/**
 * @唐爽
 */
/*权限管理，2015-1-8*/
(function() {
    "use strict";

    define([
        'dojo/_base/array',
        'helpers/symbolhelper'
    ], function(array, sym) {
        function rightManagerController($scope, $cookies) {
            $scope.visible = false; //---------------------------临时--删--以后---

            //执行左侧菜单点击操作
            $scope.activeLeftMenu = function(menuWidgetName) {
                $scope.selectMenu = menuWidgetName;
                ActiveLeftMenu(menuWidgetName);
            }
            
            function ActiveLeftMenu(menuWidgetName) {
                $scope.$bus.publish({
                    channel: 'leftMenu',
                    topic: 'leftMenu.onActive',
                    data: {
                        name: menuWidgetName
                    }
                });
            }

            //主菜单监听事件
            $scope.$bus.subscribe({
                channel: 'menu',
                topic: 'menu.onActive',
                callback: function(data, envelope) {
                    $scope.flushvisible=false;
                    var name = data.name;
                    if (name === 'rightManager') {
                        $scope.visible = true;
                        $scope.selectMenu = 'memberManager';
                        ActiveLeftMenu('memberManager');
                    } else {
                        $scope.visible = false;
                    }
                }
            });

            // var systemPermission = false;
            // if ($cookies.permission != "" && $cookies.permission != undefined) {
            //     var permission = $cookies.permission.split(",");
            //     for (var i = 0; i < permission.length; i++) {
            //         if (permission[i].split("")[0] != 4) {
            //             $scope.visible = false;
            //         } else {
            //             systemPermission = true;
            //             break;
            //         }
            //     }
            //     if (systemPermission) {
            //         $scope.visible = false;
            //         var permissionThis = [];
            //         for (var i = 0; i < permission.length; i++) {
            //             if (permission[i].split("")[0] == 4) {
            //                 permissionThis.push(permission[i]);
            //             }
            //         }
            //         var maxCode = "";
            //         for (var i = 0; i < permissionThis.length; i++) {
            //             if (permissionThis[i] > maxCode) {
            //                 maxCode = permissionThis[i];
            //             }
            //         }
            //         if (maxCode == "400003") {
            //             $scope.visible = true;
            //             $scope.selectMenu = 'deptManager';
            //             ActiveLeftMenu('deptManager');
            //             for (var i = 0; i < inputs.length; i++) {
            //                 if (inputs[i].id === 'search_right' || inputs[i].id.indexOf('dept') != -1) {
            //                     inputs[i].disabled = false;
            //                 }
            //             }
            //         }
            //     }
            // }
            
            $scope.$bus.subscribe({
                channel: 'user',
                topic: 'manager',
                callback: function(data, envelope) {
                    if (data.status == "ok") {
                        // systemPermission = false;
                        // var permission = $cookies.permission.split(",");
                        // for (var i = 0; i < permission.length; i++) {
                        //     if (permission[i].split("")[0] != 4) {
                        //         $scope.visible = false;
                        //     } else {
                        //         systemPermission = true;
                        //         break;
                        //     }

                        // }
                        // if (systemPermission) {
                        //     $scope.visible = false;
                        //     var permissionThis = [];
                        //     for (var i = 0; i < permission.length; i++) {
                        //         if (permission[i].split("")[0] == 4) {
                        //             permissionThis.push(permission[i]);
                        //         }
                        //     }
                        //     var maxCode = "";
                        //     for (var i = 0; i < permissionThis.length; i++) {
                        //         if (permissionThis[i] > maxCode) {
                        //             maxCode = permissionThis[i];
                        //         }
                        //     }
                        //     if (maxCode == "400003") {
                        //         $scope.visible = true;
                        //         $scope.selectMenu = 'deptManager';
                        //         ActiveLeftMenu('deptManager');

                        //         for (var i = 0; i < inputs.length; i++) {
                        //             if (inputs[i].id === 'search_right' || inputs[i].id.indexOf('dept') != -1) {
                        //                 inputs[i].disabled = false;
                        //             }
                        //         }
                        //         //getTypeConfigs($http, $q);
                        //     }
                        // }
                    } else if (status == "exit") {

                    }
                }
            });
        }

        function init(App) {
            App.controller('rightManagerController', ['$scope', '$cookies', rightManagerController]);
            return rightManagerController;
        }

        return {
            start: init
        };
    });

}).call(this);