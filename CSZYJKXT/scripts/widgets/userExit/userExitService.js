/*
 **@author coyote
 **@date 20140919
 */

(function() {
	"use strict";
	define([], function() {
		function userExitService($http,$q) {			
			return {				
				exit:function(){
					var delay = $q.defer();
					$http.get("/CQJjFlowSupervise/logout.do", {
						header: {
							'Content-Type': 'application/json; charset=UTF-8'
						}
					}).success(function(response, status, headers, config) {
						delay.resolve(response);
					}).error(function(error, status, headers, config) {
						delay.reject(error);
					});
					return delay.promise;
				}

			};
		}

		function init(app) {
			app.factory('userExitService',['$http','$q',userExitService]);
			return userExitService;

		}

		return {
			start: init
		};
	});
}).call(this);