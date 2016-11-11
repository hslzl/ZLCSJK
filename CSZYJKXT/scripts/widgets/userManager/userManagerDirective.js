(function() {
	"use strict";

	define([
		'angular',
		'text!widgets/userManager/template/userManagerTemplate.html'
	], function(angular, tpl) {

		function userExitDirective() {
			return {
				restrict: "AE",
				template: tpl,
				controller: 'userManagerController',
				replace: false,
				scope: {},
				link: function(scope, iElement, iAttrs) {

				}
			};
		}

		function init(app) {
			app.directive('userManager', [userExitDirective]);
			return userExitDirective;
		}

		return {
			start: init
		};
	})
}).call(this);