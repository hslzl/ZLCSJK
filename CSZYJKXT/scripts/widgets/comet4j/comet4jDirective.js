/**
 **@功能：动态监控
 */
(function() {
	"use strict";
	define([
		'angular',
		'text!widgets/comet4j/template/comet4jTemplate.html'
	], function(angular, tpl) {
		function comet4jDirective() {
			return {
				restrict: "E",
				template: tpl,
				controller: 'comet4jController',
				replace: true
			};
		}

		function init(app) {
			app.directive('comet4j', [comet4jDirective]);
			return comet4jDirective;
		}

		return {
			start: init
		};
	});
}).call(this);