/**
 * [description]
 * @return {[type]} [description]
 */
(function() {
	"use strict";

	define([
		'widgets/mapManager/mapManagerDirectice',
		'widgets/mapManager/mapManagerController',
		'widgets/mapManager/mapManagerService'
	], function(mapManagerDirectice,mapManagerController,mapManagerService) {
		
		function init(app) {			
			mapManagerDirectice.start(app);			
			mapManagerController.start(app);
			mapManagerService.start(app);
		}

		return {
			start: init
		};

	});
}).call(this);