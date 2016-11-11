(function() {
	"use strict";

	define([], function() {
		function userExitController($scope, $cookies,userExitService) {			
			$scope.userName = "";
			$scope.exit = function() {
				userExitService.exit();
				$cookies.userName = "";
				$cookies.userID = "";
				$cookies.permission="";
				$scope.userName = "";				
				$scope.$bus.publish({
					channel: 'user',
					topic: 'manager',
					data: {
						status: 'exit',
						userName: $scope.userName,
					}
				});
			}
			$scope.$bus.publish({
				channel: 'leftMenu',
				topic: 'leftMenu.onActive', 
				data:{
					name:'deptManager'
				}                   
			});

			if($cookies.userName != "" && $cookies.userName != null && $cookies.userName != undefined)
			{
				$scope.userName =$cookies.userName;
				$scope.realName =$cookies.realName; 
			}
			
			$scope.$bus.subscribe({
				channel: 'user',
				topic: 'manager',
				callback: function(data, envelope) {					
					var status = data.status,
						userName = data.userName;
						var realName = data.realName;
					if (status=="login" || status == "register" || status=="resetpswd" || status=="ok") {
						$scope.userName = userName;
						$scope.realName = realName;						
					}
				}
			});

			if ($cookies.userName != null && $scope.userID != null) {
				if ($cookies.userName !== "" && $scope.userID !== "") {
					$scope.loginOK = true;
				}
			}
		}


		function init(app) {
			app.controller('userExitController', ['$scope', '$cookies','userExitService', userExitController]);
			return userExitController;
		}

		return {
			start: init
		};

	});

}).call(this);