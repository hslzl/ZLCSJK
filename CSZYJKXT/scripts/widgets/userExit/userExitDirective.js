(function() {
	"use strict";

	define([
		'angular',
		'text!widgets/userExit/template/userExitTemplate.html'
	], function(angular, tpl) {

		function userExitDirective() {
			return {
				restrict: "AE",
				template: tpl,
				controller: 'userExitController',
				replace: true,
				scope: {},
				link: function(scope, iElement, iAttrs) {

				}
			};
		}

		function init(app) {
			app.directive('userExit', [userExitDirective]);
			return userExitDirective;
		}

		return {
			start: init
		};
	})
}).call(this);