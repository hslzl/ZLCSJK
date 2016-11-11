(function() {
	"use strict";

	define([
		'angular',
		'text!widgets/flushManager/template/flushManagerTemplate.html'
	], function(angular, tpl) {

		function flushDirective() {
			return {
				restrict: "AE",
				template: tpl,
				controller: 'flushManagerController',
				replace: false,
				scope: {},
				link: function(scope, iElement, iAttrs) {

				}
			};
		}

		function init(app) {
			app.directive('flushManager', [flushDirective]);
			return flushDirective;
		}

		return {
			start: init
		};
	})
}).call(this);