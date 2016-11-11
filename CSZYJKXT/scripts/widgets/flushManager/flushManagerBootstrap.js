/**
 * [description]
 * @return {[type]} [description]
 */
(function() {
	"use strict";

	define([
		'widgets/flushManager/flushManagerDirectice',
		'widgets/flushManager/flushManagerController',
		'widgets/flushManager/flushManagerService'
	], function(flushManagerDirectice,flushManagerController,flushManagerService) {
		
		function init(app) {			
			flushManagerDirectice.start(app);			
			flushManagerController.start(app);
			flushManagerService.start(app);
		}

		return {
			start: init
		};

	});
}).call(this);