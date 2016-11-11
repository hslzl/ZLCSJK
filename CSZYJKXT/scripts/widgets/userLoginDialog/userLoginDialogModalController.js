(function() {
	"use strict";

	define([
		'angular',
		'text!widgets/userLoginDialog/template/userLoginDialogModalTemplate.html'
	], function(angular, tpl) {
		function userLoginDialogModalController($scope, $cookies, userLoginDialogService) {
			$cookies.userName = "";
			$cookies.userID = "";
			$cookies.permission = "";
			$scope.user = {};
			$scope.message = "";
			$scope.login = function() {
				userLoginDialogService.login($scope.user.name, $scope.user.password).then(function(response) {
					if (response.code == "20000") {
						$cookies.userName = $scope.user.name;
						$cookies.userID = response.data.userId;
						$cookies.userDep = response.data.fDepartment;
						//$cookies.userDuty = response.data.fDuty;
						$cookies.userOrg = response.data.fGovernOrg;
						$cookies.userStation = response.data.fStation;
						//$cookies.permission = response.data.grantCode.join();
						$cookies.realName = response.data.fDuty;
						$scope.loginOK = true;
						$scope.$bus.publish({
							channel: 'user',
							topic: 'manager',
							data: {
								status: 'ok',
								userName: $cookies.userName,
								userData: response,
								realName: $cookies.realName
							}
						});
						$scope.confirm($scope.user.name);
					} else {
						$scope.message = "登录失败！";
					}
				});
			};

			$scope.loginbyKeypress = function(evt) {
				if (evt.keyCode == 13) {
					$scope.login();
				}
			}

			$scope.cancel = function() {
				$scope.closeThisDialog();
			};

		}

		function init(app) {
			app.controller('userLoginDialogModalController', ['$scope', '$cookies', 'userLoginDialogService', userLoginDialogModalController]);
			return userLoginDialogModalController;
		}

		return {
			start: init
		};

	});

}).call(this);