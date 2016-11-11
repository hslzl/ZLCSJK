/*
 **@author coyote
 **@date 20140919
 */

(function() {
	"use strict";
	define([], function() {
		function mapManagerService() {			
			
		}

		function init(app) {
			app.factory('mapManagerService', [mapManagerService]);
			return mapManagerService;

		}

		return {
			start: init
		};
	});
}).call(this);