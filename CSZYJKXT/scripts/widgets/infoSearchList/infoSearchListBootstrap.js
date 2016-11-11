(function () {
    "use strict";

    define([
        'widgets/infoSearchList/infoSearchListController',
        'widgets/infoSearchList/infoSearchListDirective',
        'widgets/infoSearchList/infoSearchListService',
        'widgets/infowindow/infowindowController',
        'widgets/infowindow/infowindowDirective',
        'widgets/infowindow/infowindowService'
    ], function (infoSearchListController, infoSearchListDirective, infoSearchListService,infowindowController,infowindowDirective,infowindowService) {

        function init(App) {
        	infoSearchListService.start(App);
        	infoSearchListDirective.start(App);
        	infoSearchListController.start(App);
        	infowindowService.start(App);
        	infowindowDirective.start(App);
        	infowindowController.start(App);
        }

        return { start: init };

    });

}).call(this);