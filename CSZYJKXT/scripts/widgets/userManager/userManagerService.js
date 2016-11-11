/*
 **@author coyote
 **@date 20140919
 */

(function() {
	"use strict";
	define([], function() {
		function userManagerService() {			
			
		}

		function init(app) {
			app.factory('userManagerService', [userManagerService]);
			return userManagerService;

		}

		return {
			start: init
		};
	});
}).call(this);