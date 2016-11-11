
(function () {
    "use strict";

    define([

    ], function () {

        function infowindowService() {
        	  var _infowindowController= null;

              return {
                  setController: function (infowindowController) {
                  	_infowindowController = infowindowController;
                  },
                  getController: function () {
                      return _infowindowController;
                  }
              };
        }

        function init(App) {
            App.factory('infowindowService', infowindowService);
        }

        return { start: init };

    });

}).call(this);