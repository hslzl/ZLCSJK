(function() {
    "use strict";
    define([], function() {
        function infoSearchHighController($scope, $cookies,$http, $q, infoManagerService,infoSearchHighService) {         
           infoSearchHighService.setController($scope);
           $scope.itemsPerPage=1;
           $scope.itemsPerPage=5;
           $scope.visible = false;
           $scope.restype="";
           var pageno = 1;  //页码
           //初始化
            $scope.initSearch = function(){         
                $scope.fId =infoManagerService.getController().selectTR;
                $scope.selectType =infoManagerService.getController().selectType;
                if ($scope.fId=="") {
                    jAlert("请选择要查看的设备", "提示！");

                    return;
                };
               
                if ($scope.selectType=='岸边网关') {
                $.ajax({
                    type: "GET",
                    url: "/CQJjFlowSupervise/getSensorFlowList.do",
                    data: {
                      "fId":$scope.fId,
                       "pageNum":pageno,
                       "pageSize":5
                    },
                    dataType: "json",
                    async: true,
                    success: function(data) {
                        $scope.totalItems=data.data.total;
                         if ($scope.totalItems==0) {
                           jAlert("未查到相关数据", "提示！");
                            $scope.visible = false;
                             $scope.$digest();
                             return;
                        };
                        $scope.list = data.data.data;
                         $scope.visible = true;
                        $scope.$digest();
                    }
                  });
                   return;
                }
                 if ($scope.selectType=='声学传感器') {
                   $.ajax({
                     type: "GET",
                     url: "/CQJjFlowSupervise/getSensorFlowDataList.do",
                     data: {
                      "fId":$scope.fId,
                       "pageNum":pageno,
                       "pageSize":5
                     },
                    dataType: "json",
                    async: true,
                    success: function(data) {
                        $scope.totalItems=data.data.total;
                         if ($scope.totalItems==0) {
                           jAlert("未查到相关数据", "提示！");
                            $scope.visible = false;
                             $scope.$digest();
                             return;
                        };
                        $scope.list = data.data.data;
                         $scope.visible = true;
                        $scope.$digest();
                    }
                   });
                   return;
                }

                if ( $scope.selectType=='中继器') {
                    jAlert("未查到相关数据", "提示！");
                     $scope.visible = false;
                    return;
                }

            };

               //加载当前页面的结果列表
            $scope.selectPage = function(page) {
                 $.ajax({
                    type: "GET",
                    url: "/CQJjFlowSupervise/getSensorFlowList.do",
                    data: {
                       "fId":$scope.fId,
                       "pageNum":page,
                       "pageSize":5
                    },
                    dataType: "json",
                    async: true,
                    success: function(data) {
                        $scope.totalItems=data.data.total;

                        $scope.list = data.data.data;
                        $scope.$digest();
                    }
                });
            }
              //加载当前页面的结果列表
            $scope.selectCgqPage = function(page) {
                 $.ajax({
                    type: "GET",
                    url: "/CQJjFlowSupervise/getSensorFlowDataList.do",
                    data: {
                       "fId":$scope.fId,
                       "pageNum":page,
                       "pageSize":5
                    },
                    dataType: "json",
                    async: true,
                    success: function(data) {
                        $scope.totalItems=data.data.total;

                        $scope.list = data.data.data;
                        $scope.$digest();
                    }
                });
            }


            $scope.close=function(){
              $scope.visible=false;
            }
         
        }

        function init(App) {
            App.controller('infoSearchHighController', ['$scope', '$cookies','$http', '$q', 'infoManagerService','infoSearchHighService', infoSearchHighController]);
            return infoSearchHighController;
        }

        return {
            start: init
        };

    });

}).call(this);