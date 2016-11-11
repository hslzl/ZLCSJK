(function() {
	"use strict";

	define([], function() {
		function userLoginDialogController($scope, $cookies, $rootScope, ngDialog, userLoginDialogService) {
			$scope.userName = "";
			$scope.open = function() {
				ngDialog.openConfirm({
					template: 'scripts/widgets/userLoginDialog/template/userLoginDialogModalTemplate.html',
					controller: 'userLoginDialogModalController',
					className: 'ngdialog-theme-default-comet',
					preCloseCallback: 'preCloseCallbackOnScope',
					scope: $scope
				}).then(function(value) {
					//console.log('Modal promise resolved. Value: ', value);
					$scope.userName = value;
				}, function(reason) {
					//console.log('Modal promise rejected. Reason: ', reason);
				});

			};


			$scope.preCloseCallbackOnScope = function(value) {
				return true;
			};

			$rootScope.$on('ngDialog.opened', function(e, $dialog) {
				//console.log('ngDialog opened: ' + $dialog.attr('id'));
			});

			$rootScope.$on('ngDialog.closed', function(e, $dialog) {
				//console.log('ngDialog closed: ' + $dialog.attr('id'));
				//console.log($cookies.userName);
				//console.log($cookies.userID);
			});
		}


		function init(app) {
			app.controller('userLoginDialogController', ['$scope', '$cookies', '$rootScope', 'ngDialog',
				'userLoginDialogService', userLoginDialogController
			]);
			return userLoginDialogController;
		}

		return {
			start: init
		};

	});

}).call(this);