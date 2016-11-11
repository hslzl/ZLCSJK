(function() {
	"use strict";

	define([
		'angular',
		'text!widgets/userLoginDialog/template/userLoginDialogTemplate.html'
	], function(angular, tpl) {

		function userLoginDialogDirective() {
			return {
				restrict: "AE",
				template: tpl,
				controller: 'userLoginDialogController',
				replace: false,
				scope: {},
				link: function(scope, iElement, iAttrs) {

				}
			};
		}

		function init(app) {
			app.directive('userLogindialog', [userLoginDialogDirective]);
			return userLoginDialogDirective;
		}

		return {
			start: init
		};
	})
}).call(this);