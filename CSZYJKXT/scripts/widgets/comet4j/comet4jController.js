/*
 **：系统遮罩功能
 */
(function() {
	"use strict";

	define([
	], function() {

		function comet4jController($scope, $http, $q,$rootScope,$cookies,ngDialog,comet4jService) {
		
			$scope.visible=true;  //判断实时推送对话框是否显示
			$scope.openThisDialogB=false;  //判断实时推送对话框是否显示
			$scope.comet4jvisible=true;
			$scope.comet4jheight=315;
			$scope.listStatus="glyphicon-chevron-down";
			
			$scope.jrclcount=0;
			$scope.zzblcount=0;
			$scope.bnblcount=0;
			$scope.ljblcount=0;
			$scope.dclcount=0;
			$scope.byblcount=0;
			$scope.remainderc=120;
			
			$scope.map =null;
			 $scope.$bus.subscribe({
	                channel: 'map',
	                topic: 'map.created',
	                callback: function(data, envelope) {
	                	$scope.map =data.map;
	                	comet4jService.setController($scope);
	                	//$scope.init();  //调用实时推送的方法
	                	$scope.setIntervalD(); //调用动态监控按照固定时间间隔刷新监控
	                	//$scope.setremainderc();
	    				$scope.$digest();
	                }
	            });
			 
			var clearIntervaltime;
			clearInterval(clearIntervaltime);
			//120秒动态刷新一次数据
			clearIntervaltime=setInterval(function() {
				$scope.setIntervalD();
			},120000);
			
			var clearremainderc;
			$scope.setremainderc=function()
		    {
				$scope.remainderc-=1;
				$scope.remainderc==-1?$scope.remainderc=0:$scope.remainderc=$scope.remainderc;
				$scope.$digest();
		    }
			
			//动态刷新
			$scope.setIntervalD=function()
			{
				var delay = $q.defer();
				$http.get("/LJMarketSupervise/systemMonitor.do?method=queryCrMonitorData", {
					header: {
						'Content-Type': 'application/json; charset=UTF-8'
					}
				}).success(function(response, status, headers, config) {
					delay.resolve(response);
				}).error(function(error, status, headers, config) {
					delay.reject(error);
				});
				delay.promise.then(function(ConfigObj) {
					if(ConfigObj.InfoMessage !="登录超时，请重新登录!")
						{
						$scope.jrclcount=ConfigObj.jrcl;
						$scope.zzblcount=ConfigObj.zzbl;
						$scope.bnblcount =ConfigObj.bnbl;
						$scope.ljblcount=ConfigObj.ljbl;
						$scope.dclcount=ConfigObj.dcl;
						$scope.byblcount=ConfigObj.bybl;
						$scope.openThisDialogB=true;
						$scope.remainderc=120;
						clearInterval(clearremainderc);
						//120秒动态刷新一次数据
						clearremainderc=setInterval(function() {
						$scope.setremainderc();
						},1000);
						}
					else
					{
						$scope.openThisDialogB=false;
					}
				});
			}

			//初始化实时推送
			$scope.init = function() {
				JS.Engine.on({  
					complaintReportPush : function(kb){ 
						if($scope.openThisDialogB)
							{
					  $scope.kbvalue=kb;
					   ngDialog.close();
				       ngDialog.openConfirm({
      					template: 'scripts/widgets/comet4j/template/comet4jDialogModalTemplate.html',
      					controller: 'comet4jDialogModalController',
      					className: 'ngdialog-theme-default-comet',
      					preCloseCallback: 'preCloseCallbackOnScope',
      					scope: $scope
      				}).then(function(value) {
      				}, function(reason) {
      				});
							}
				    }
				});  
		        JS.Engine.start('/LJMarketSupervise/complaintReportPush');
		}
			
			$scope.preCloseCallbackOnScope = function(value) {
				return true;
			};
			//关闭实时推送对话框
			$scope.closeThisDialog = function (value) {
			privateMethods.closeDialog($dialog, value);
			};
			$scope.changListStatus=function()
			{
				$scope.comet4jvisible=!$scope.comet4jvisible;
				if($scope.comet4jvisible)
			      {
					$scope.listStatus="glyphicon-chevron-down";
					$scope.comet4jheight=315;
					angular.element("#infoList").height(window.innerHeight - 415);
					
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
			}

			$scope.$bus.subscribe({
            	channel: 'user',
				topic: 'manager',
                callback: function(data, envelope) {
                  if(data.status=="ok")
                	  {
                	  var systemPermission=false;
                	  var permission=$cookies.permission.split(",");
                  	for(var i=0;i<permission.length;i++){
                      	if(permission[i].split("")[0]!=2){
                      		systemPermission=false;
                      		$scope.visible = false;
                      	}else{
                      		systemPermission=true;
                      		break;
                      	}
                      	
                      }
                  	if(systemPermission){
              			$scope.visible = true;
              			$scope.setIntervalD();
                  	}
                	  }
                  else
                	  {
                	  $scope.visible = true;
                	$scope.openThisDialogB=false;
                	$scope.remainderc=120;
                	clearInterval(clearremainderc);
                	$scope.jrclcount=0;
          			$scope.zzblcount=0;
          			$scope.bnblcount=0;
          			$scope.ljblcount=0;
          			$scope.dclcount=0;
          			$scope.byblcount=0;
                	  }
                }
            });
			
			var systemPermission=false;
            if($cookies.permission!=""&&$cookies.permission!=undefined){
            	var permission=$cookies.permission.split(",");
            	for(var i=0;i<permission.length;i++){
                	if(permission[i].split("")[0]!=2){
                		$scope.visible = false;
                	}else{
                		systemPermission=true;
                		break;
                	}
                	
                }
            	if(systemPermission){
        			$scope.visible = true;
            	}
                
            }
			
		}

		function init(app) {
			app.controller('comet4jController', ['$scope', '$http', '$q','$rootScope', '$cookies', 'ngDialog','comet4jService' ,comet4jController]);
			return comet4jController;
		}

		return {
			start: init
		};
	});
}).call(this);