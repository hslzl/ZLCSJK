(function() {
	"use strict";

	define([], function() {
		function flushManagerController($scope, $cookies,$http,$q,infoManagerService) {			
		/*	$scope.countdown = 10;
            $scope.comet4jheight=315;
            $scope.listStatus="glyphicon-chevron-down";
            $scope.comet4jvisible=true;
            $scope.flushvisible=true;
			$scope.zjq= "获取数据中...";
			$scope.cgq= "获取数据中...";
			$scope.wg= "获取数据中...";
            

          var myTime = setInterval(function() {         	  
                                 $scope.countdown--;
                                 $scope.setcountdown();
                                 $scope.$digest(); // 通知视图模型的变化
                                 if ($scope.countdown==0) {
                                 	 $scope.getSenesorCount();
                                 	  $scope.$digest();
                                 }
                         }, 1000);
	  $scope.setcountdown=function()
		    {
		
				$scope.countdown<0?$scope.countdown=10:$scope.countdown=$scope.countdown;
				$scope.$digest();
		    }

           $scope.getSenesorCount = function(){
                $.ajax({
                    type: "GET",
                    url: "/CQJjFlowSupervise/getSensorCount.do",
                    data: {
                       
                    },
                    dataType: "json",
                    async: true,
                    success: function(data) {
                        $scope.items = data.data;
                        for (var i = 0; i < $scope.items.length; i++) {
                        	if ($scope.items[i].type == "中继器") {
                                $scope.zjq= $scope.items[i].num;
                                 $scope.$digest(); 
                        	}
                        	if ($scope.items[i].type == "声学传感器") {
                                $scope.cgq= $scope.items[i].num;
                                 $scope.$digest(); 
                        	}
                        	if ($scope.items[i].type == "岸边网关") {
                                $scope.wg= $scope.items[i].num;
                                 $scope.$digest(); 
                        	}
                        	
                        }
                    }
                });
            }

    $scope.changListStatus=function(){

                var  length=infoManagerService.getController().items;

                $scope.comet4jvisible=!$scope.comet4jvisible;
                if($scope.comet4jvisible)
                  {
                    $scope.listStatus="glyphicon-chevron-down";
                    $scope.comet4jheight=315;
                    if (length) {
                angular.element("#infoList").height(window.innerHeight - 360);
                        }else{
                    angular.element("#infoList").height(window.innerHeight - 640);
                    }
                  }
                else
                    {
                    $scope.listStatus="glyphicon-chevron-up";
                    $scope.comet4jheight=20;
                    angular.element("#infoList").height(window.innerHeight - 120);
                    }
                
                $scope.$bus.publish({
                      channel: 'comet4j',
                      topic: 'comet4j.glyphicon',
                      data: {
                          value:$scope.comet4jvisible,
                        }
                     });
            } */

          /*  $scope.$bus.subscribe({
                channel: 'menu',
                topic: 'menu.onActive',
                callback: function(data, envelope) {
                    var name = data.name;
                    if (name === 'infoSearchList') {
                        $scope.infoSearchListvisible = true;
                    } else {
                        $scope.infoSearchListvisible = false;
                        _infoWindow.hide();
                        $scope.selectTR = "";
                        // _getPointLayer.clear();
                        positionAddInterFace.clearmap(); //清空标注
                        $scope.features = [];
                        if (_graphicClickHandler != null) {
                            _graphicClickHandler.remove();
                        }
                    }
                }
            });*/
	 }
	function init(app) {
			app.controller('flushManagerController', ['$scope', '$cookies','$http','$q',"infoManagerService", flushManagerController]);
			return flushManagerController;
		}

		return {
			start: init
		};

	});	

}).call(this);