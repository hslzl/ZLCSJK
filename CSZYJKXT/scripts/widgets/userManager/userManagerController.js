(function() {
	"use strict";

	define([], function() {
		function userManagerController($scope, $cookies,$http,$q) {
			$scope.loginOK = false;
			$scope.userName = "";
			$scope.exit = function() {
				userExitService.exit();
				$cookies.userName = "";
				$cookies.userID = "";
				$scope.userName = "";
				$scope.loginOK = false;
			}

			$scope.$bus.subscribe({
				channel: 'user',
				topic: 'manager',
				callback: function(data, envelope) {
					var status = data.status,
						userName = data.userName;
					if (status === "login" || status === "register" || status === "resetpswd"|| status === "ok") {
						$scope.userName = userName;
						$scope.loginOK = true;
					} else if (status === "exit") {
						$scope.userName = userName;
						$scope.loginOK = false;
					}
				}
			});

			if ($cookies.userName != null && $cookies.userID != null) {
				if ($cookies.userName !== "" && $scope.userID !== "") {
					$scope.loginOK = true;
				}
			}
		}


		function init(app) {
			app.controller('userManagerController', ['$scope', '$cookies','$http','$q', userManagerController]);
			return userManagerController;
		}

		return {
			start: init
		};

	});

}).call(this);