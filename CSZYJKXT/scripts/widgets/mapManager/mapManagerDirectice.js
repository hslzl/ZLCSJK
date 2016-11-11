(function() {
	"use strict";

	define([
		'angular',
		'text!widgets/mapManager/template/mapManagerTemplate.html'
	], function(angular, tpl) {

		function mapDirective() {
			return {
				restrict: "AE",
				template: tpl,
				controller: 'mapManagerController',
				replace: false,
				scope: {},
				link: function(scope, iElement, iAttrs) {

				}
			};
		}

		function init(app) {
			app.directive('mapManager', [mapDirective]);
			return mapDirective;
		}

		return {
			start: init
		};
	})
}).call(this);