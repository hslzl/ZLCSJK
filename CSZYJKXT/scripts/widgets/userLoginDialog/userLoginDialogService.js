/*
 **@author coyote
 **@date 20140919
 */

(function() {
	"use strict";
	define([], function() {
		function userLoginDialogService($http, $q) {			
			return {
				login: function(name, password) {
					if(name == "" ){
						jAlert("请填写用户名称！",'提示！')
						return null;
					}
					if(password ==""){
						jAlert("请填写登录密码！",'提示！')
						return null;
					}
					password = hex_md5(password)
					var delay = $q.defer();
					var url = '/CQJjFlowSupervise/login.do?',
						data = {
							"username": name,
							"password": password
						},
						transFn = function(data) {
							return $.param(data);
						};
					$http.post(url, data, {
						headers: {
							'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
						},
						transformRequest: transFn
					}).success(function(response, status, headers, config) {
						delay.resolve(response);
					}).error(function(error, status, headers, config) {
						delay.reject(error);
					});
					return delay.promise;
				},
				exit:function(){
					var delay = $q.defer();
					$http.get("/CQJjFlowSupervise/login.do?", {
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
			app.factory('userLoginDialogService', ['$http', '$q', userLoginDialogService]);
			return userLoginDialogService;
		}

		return {
			start: init
		};
	});
}).call(this);