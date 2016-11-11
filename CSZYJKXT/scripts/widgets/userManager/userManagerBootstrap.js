/**
 * [description]
 * @return {[type]} [description]
 */
(function() {
	"use strict";

	define([
		'widgets/userManager/userManagerDirective',
		'widgets/userManager/userManagerController',
		'widgets/userManager/userManagerService'
	], function(userManagerDirective,userManagerController,userManagerService) {
		
		function init(app) {			
			userManagerDirective.start(app);			
			userManagerController.start(app);
			userManagerService.start(app);
		}

		return {
			start: init
		};

	});
}).call(this);