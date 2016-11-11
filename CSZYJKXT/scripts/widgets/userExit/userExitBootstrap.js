/**
 * [description]
 * @return {[type]} [description]
 */
(function() {
	"use strict";

	define([
		'widgets/userExit/userExitDirective',
		'widgets/userExit/userExitController',
		'widgets/userExit/userExitService'
	], function(userExitDirective,userExitController,userExitService) {
		
		function init(app) {			
			userExitDirective.start(app);			
			userExitController.start(app);
			userExitService.start(app);
		}

		return {
			start: init
		};

	});
}).call(this);