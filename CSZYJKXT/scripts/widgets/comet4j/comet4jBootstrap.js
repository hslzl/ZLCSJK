/*
 **@功能：动态监控
*/
(function() {
	"use strict";

	define([
		'widgets/comet4j/comet4jController',
		'widgets/comet4j/comet4jService',
		'widgets/comet4j/comet4jDirective',
		'widgets/comet4j/comet4jDialogModalController'
	], function(comet4jController, comet4jService, comet4jDirective,comet4jDialogModalController) {
		function init(app) {
			comet4jController.start(app);
			comet4jService.start(app);
			comet4jDirective.start(app);
			comet4jDialogModalController.start(app);
		}

		return {
			start: init
		};
	});
}).call(this);