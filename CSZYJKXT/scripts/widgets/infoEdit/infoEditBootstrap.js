/**
 * [description]
 * @return {[type]} [description]
 */
(function() {
	"use strict";

	define([
		'widgets/infoEdit/infoEditDirectice',
		'widgets/infoEdit/infoEditController',
		'widgets/infoEdit/infoEditService'
	], function(infoEditDirectice,infoEditController,infoEditService) {
		
		function init(app) {			
			infoEditDirectice.start(app);			
			infoEditController.start(app);
			infoEditService.start(app);
		}

		return {
			start: init
		};

	});
}).call(this);