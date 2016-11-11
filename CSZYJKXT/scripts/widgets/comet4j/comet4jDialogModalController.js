(function() {
	"use strict";

	define([
		'angular',
		'text!widgets/comet4j/template/comet4jDialogModalTemplate.html',
		'helpers/PositionAddInterFace'
	], function(angular, tpl,PositionAddInterFace) {
		function comet4jDialogModalController($scope, $cookies,infoSearchListService,comet4jService) {
			
			      var positionAddInter=null;
	              var map =comet4jService.getController().map;
			      $scope.value=comet4jService. getController().kbvalue;
			      positionAddInter = new PositionAddInterFace(map);
	
            
            
            $scope.cancel = function() {
    			$scope.closeThisDialog();
    		};
    		
    		 $scope.lookUp = function() {
    			//positionAddInter.clearmap();
    			$scope.closeThisDialog();
    			$scope.$bus.publish({
                    channel: 'menu',
                    topic: 'menu.onActive',
                    data: {
                        name: "comet4j"
                    }
                });
    			infoSearchListService.getController().exshow(302);
    			infoSearchListService.getController().setResult($scope.value,$scope.value.length,"");
    			 //positionAddInter.addPointToMap($scope.value,"fGuid");
     		};
		}

		function init(app) {
			app.controller('comet4jDialogModalController', ['$scope', '$cookies','infoSearchListService','comet4jService', comet4jDialogModalController]);
			return comet4jDialogModalController;
		}
		
		return {
			start: init
		};
	});

}).call(this);