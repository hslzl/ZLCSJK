(function() {
	"use strict";

	define([], function() {
		function mapManagerController($scope, $cookies,$http,$q) {

   /*   $scope.map =null;
			
    //百度地图API功能
      function loadJScript() {
        var script = document.createElement("script");
        script.type = "text/javascript";
        script.src = "http://api.map.baidu.com/api?v=2.0&ak=rlXxxbCtcrIvQp4LMe2Pl8WV&callback=init";
        document.body.appendChild(script);
     }
     function creatMap() {
        $scope.map = new BMap.Map("xx");            // 创建Map实例
        var point = new BMap.Point(106.516329,29.620376); // 创建点坐标
        $scope.map.centerAndZoom(point,15);                 
     
        var top_left_control = new BMap.ScaleControl({anchor: BMAP_ANCHOR_TOP_LEFT});// 左上角，添加比例尺
        var top_left_navigation = new BMap.NavigationControl();  //左上角，添加默认缩放平移控件
        var top_right_navigation = new BMap.NavigationControl({anchor: BMAP_ANCHOR_TOP_RIGHT, type: BMAP_NAVIGATION_CONTROL_SMALL}); //右上角
        $scope.map.addControl(top_left_control);        
        $scope.map.addControl(top_left_navigation);     
        $scope.map.addControl(top_right_navigation); 
           $scope.map.enableScrollWheelZoom();                 //启用滚轮放大缩小
    }  
      window.onload = loadJScript;  //异步加载地图
      creatMap();*/
 
	}
	function init(app) {
			app.controller('mapManagerController', ['$scope', '$cookies','$http','$q', mapManagerController]);
			return mapManagerController;
		}

		return {
			start: init
		};

	});	

}).call(this);