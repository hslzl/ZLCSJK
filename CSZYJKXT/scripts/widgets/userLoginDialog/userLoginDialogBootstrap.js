/**
 * [description]
 * @return {[type]} [description]
 */
(function() {
	"use strict";

	define([
		'widgets/userLoginDialog/userLoginDialogDirective',
		'widgets/userLoginDialog/userLoginDialogController',
		'widgets/userLoginDialog/userLoginDialogService',
		'widgets/userLoginDialog/userLoginDialogModalController'
	], function(userLoginDialogDirective,userLoginDialogController, userLoginDialogService,
		userLoginDialogModalController) {
		
		function init(app) {			
			userLoginDialogDirective.start(app);			
			userLoginDialogController.start(app);
			userLoginDialogService.start(app);
			userLoginDialogModalController.start(app);
		}

		return {
			start: init
		};

	});
}).call(this);