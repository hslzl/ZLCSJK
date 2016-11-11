(function() {
	"use strict";

	define([
		'angular',
		'text!widgets/infoEdit/template/infoEditTemplate.html'
	   ], function(angular, tpl) {

		function infoEditDirective() {
			return {
				restrict: "AE",
				template: tpl,
				controller: 'infoEditController',
				replace: false,
				scope: {},
				link: function(scope, iElement, iAttrs) {

				}
			};
		}

		function init(app) {
			app.directive('infoEdit', [infoEditDirective]);
		}

		return { start: init };
	})
}).call(this);