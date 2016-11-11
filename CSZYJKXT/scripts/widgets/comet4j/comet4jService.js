/**
 **@功能：动态监控
 */
(function() {
	"use strict";
	define([

	], function() {

		function comet4jService($http, $q) {
			  var _comet4jController = null;

	            return {
	                setController: function (comet4jController) {
	                	_comet4jController = comet4jController;
	                },
	                getController: function () {
	                    return _comet4jController;
	                }
	                
	            };
		}

		function init(app) {
			app.factory('comet4jService', ['$http', '$q',comet4jService]);
			return comet4jService;
		}

		return {
			start: init
		};
	});
}).call(this);