/*
 **@author coyote
 **@date 20140919
 */

(function() {
	"use strict";
	define([], function() {
		function flushManagerService() {			
			
		}

		function init(app) {
			app.factory('flushManagerService', [flushManagerService]);
			return flushManagerService;

		}

		return {
			start: init
		};
	});
}).call(this);