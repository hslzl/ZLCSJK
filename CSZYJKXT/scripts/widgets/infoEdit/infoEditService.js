/*
 **@author coyote
 **@date 20140919
 */

(function() {
	"use strict";
	define([], function() {
		function infoEditService() {			
			  var _infoEditController = null;

            return {
                setController: function (infoEditController) {
                    _infoEditController = infoEditController;
                },
                getController: function () {
                    return _infoEditController;
                }

            };
		}

		function init(app) {
			app.factory('infoEditService', [infoEditService]);
			return infoEditService;

		}

		return {
			start: init
		};
	});
}).call(this);