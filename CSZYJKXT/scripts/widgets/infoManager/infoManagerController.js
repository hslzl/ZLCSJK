
(function() {
    "use strict";

    define([], function() {
        var inputs = document.getElementsByTagName("input");
            
      function ActiveLeftMenu($scope, menuWidgetName) {
            $scope.$bus.publish({
                channel: 'leftMenu',
                topic: 'leftMenu.onActive',
                data: {
                    name: menuWidgetName
                }
            });
        }

        function infoManagerController($scope, $cookies,$http,$q,infoSearchHighService,infoEditService,infoManagerService) {
        $scope.infoSearchListvisible=false;
        $scope.flushvisible=true;
        $scope.map = new BMap.Map("dituContent");           // 创建Map实例
        var point = new BMap.Point(106.516329,29.620376); // 创建点坐标
        $scope.map.centerAndZoom(point,15);                 
         infoManagerService.setController($scope);
         $scope.currentPage = 1;
         var pageno = 1;  //页码
         $scope.itemsPerPage=5;
        $scope.selectTR = "";
        $scope.selectType = "";
        var top_left_control = new BMap.ScaleControl({anchor: BMAP_ANCHOR_TOP_LEFT});// 左上角，添加比例尺
        var top_left_navigation = new BMap.NavigationControl();  //左上角，添加默认缩放平移控件
        var top_right_navigation = new BMap.NavigationControl({anchor: BMAP_ANCHOR_TOP_RIGHT, type: BMAP_NAVIGATION_CONTROL_SMALL}); //右上角
        $scope.map.addControl(top_left_control);        
        $scope.map.addControl(top_left_navigation);     
        $scope.map.addControl(top_right_navigation); 
           $scope.map.enableScrollWheelZoom();   
            $scope.visible = true;
            var opts = {title : '<span style="font-size:14px;color:#000; font-weight: bold;">设备信息</span></br>',
                        width : 200,     // 信息窗口宽度
                        height: 100
               };
  
                $scope.fInstallTimeStart = document.getElementById("fInstallTimeStart").value;  //移交时间-开始
                $scope.fInstallTimeEnd = document.getElementById("fInstallTimeEnd").value;  //移交时间-截止
            
         //进行设备查询
            $scope.infoSearch = function() {
                var fInstallTimeStart = document.getElementById("fInstallTimeStart").value;  //移交时间-开始
                var fInstallTimeEnd = document.getElementById("fInstallTimeEnd").value;  //移交时间-截止
                var data = {
                      
                        "fType": $scope.fType||null, 
                        "fXh": $scope.fXh||null, 
                        "fStatus": $scope.fStatus||null, 
                        "fInstallTimeStart": fInstallTimeStart, 
                        "fInstallTimeEnd":fInstallTimeEnd,
                        "pageNum":pageno,
                        "pageSize": 5
                    };
               
               $scope.infoQuery(data);
            };

         //请求查询接口
            $scope.infoQuery = function(data) {
                    $.ajax({
                    type: "POST",
                    url: "/CQJjFlowSupervise/querySensorList.do",
                    data:data,
                    dataType: "json",
                    async: true,
                    success: function(data) {
                        if (data.message=="成功") {
                        $scope.items = data.data.data;
                        $scope.totalItems=data.data.total;
                        if ($scope.totalItems==0) {
                          jAlert("未查到相关设备！","提示！");
                          return;   
                        }
                        $scope.$digest();
                        $scope.map.clearOverlays();
                           $scope.infoSearchListvisible=true;
                        var point1=new BMap.Point($scope.items[0].fJd,$scope.items[0].fWd);
                        
                        for (var i = 0; i < $scope.items.length; i++) {
                            if ($scope.items[i].fType=="声学传感器") {
                            var myIcon = new BMap.Icon("images/elevatorWarning.gif", new BMap.Size(50, 50));
                            };
                            if ($scope.items[i].fType=="中继器") {
                            var myIcon = new BMap.Icon("images/zhongjiqi.png", new BMap.Size(50, 50));
                            };
                            if ($scope.items[i].fType=="岸边网关") {
                            var myIcon = new BMap.Icon("images/wangguan.png", new BMap.Size(50, 50));
                            };     
                            var marker = new BMap.Marker(new BMap.Point($scope.items[i].fJd, $scope.items[i].fWd),{icon:myIcon}); 
                          // var content = data_info[i][5];
                           $scope.map.addOverlay(marker);  
                           // marker.setAnimation(BMAP_ANIMATION_BOUNCE);
                           var content=$scope.items[i];
                           addClickHandler(content,marker);
                        }
                        $scope.map.panTo(point1); 
                    }else{
                         jAlert("用户未登陆或当前用户登陆超时，请重新登陆！","提示！");
                          return;   
                    }
                    
                    }
                });
          }

           //加载当前页面的结果列表
            $scope.selectPage = function(page) { 
               $.ajax({
                    type: "POST",
                    url: "/CQJjFlowSupervise/querySensorList.do",
                    data: 
                       {"fType": $scope.fType||null, 
                        "fXh": $scope.fXh||null, 
                        "fStatus": $scope.fStatus||null, 
                        "fInstallTimeStart": $scope.fInstallTimeStart, 
                        "fInstallTimeEnd":$scope.fInstallTimeEnd,
                        "pageNum":page,
                        "pageSize": 5},
                    dataType: "json",
                    async: true,
                    success: function(data) {
                        if (data.message=="成功") {
                        $scope.items = data.data.data;
                        $scope.totalItems=data.data.total;
                        $scope.$digest();
                        $scope.map.clearOverlays();
                        $scope.infoSearchListvisible=true;
                        var point1=new BMap.Point($scope.items[0].fJd,$scope.items[0].fWd);
                        
                        for (var i = 0; i < $scope.items.length; i++) {
                           var marker = new BMap.Marker(new BMap.Point($scope.items[i].fJd, $scope.items[i].fWd)); 
                          // var content = data_info[i][5];
                           $scope.map.addOverlay(marker);  
                           marker.setAnimation(BMAP_ANIMATION_BOUNCE);
                           var content=$scope.items[i];
                           addClickHandler(content,marker);
                        }
                        $scope.map.panTo(point1); 
                    }else{
                         jAlert("用户未登陆或当前用户登陆超时，请重新登陆！","提示！");
                          return;   
                    }
                    
                    }
                });
            }

            //结果列表点击定位
            $scope.setPosition = function(resultInfo) {
                $scope.selectTR = resultInfo.fId;
                $scope.selectType=resultInfo.fType;
                $scope.selectCase = resultInfo; //选中的案件信息  
                var editVisible= infoEditService.getController().visible;
                var his=infoSearchHighService.getController().visible;
                if (editVisible) {
                    infoEditService.getController().initOperate();
                    return;
                  }
                if (his) {
                    infoSearchHighService.getController().initSearch();
                    return;
                  }
                           
                $http.get("/CQJjFlowSupervise/getSenesorDetail.do", {
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
                    },
                    params: {
                        "fId": resultInfo.fId
                    }
                }).success(function(responseData) {
                    if (responseData.InfoMessage != "登录超时，请重新登录!") {
                        $scope.result = responseData.data;
                        $scope.map.clearOverlays();
                         var marker = new BMap.Marker(new BMap.Point($scope.result[0].fJd, $scope.result[0].fWd)); 
                          // var content = data_info[i][5];
                           $scope.map.addOverlay(marker);  
                           marker.setAnimation(BMAP_ANIMATION_BOUNCE);
                           var content=$scope.result[0];
                           addClickHandler(content,marker);
                            $scope.map.panTo(new BMap.Point($scope.result[0].fJd, $scope.result[0].fWd));
                    } else {
                        jAlert("用户未登陆或当前用户登陆超时，请重新登陆！", "提示！");
                    }
                });
            };
            $scope.$bus.subscribe({
                channel: 'menu',
                topic: 'menu.onActive',
                callback: function(data, envelope) {
                    var name = data.name;
                    $scope.totalItems = 0;
                    infoSearchHighService.getController().visible=false;
                    infoEditService.getController().visible=false;
                     $scope.map.clearOverlays();
                    if (name === 'infoManager') {
                        
                        $scope.visible = true;
                        $scope.selectMenu = 'sysVerManager';
                        ActiveLeftMenu($scope, 'sysVerManager');

                        // for (var i = 0; i < inputs.length; i++) {
                        //     if (inputs[i].id === 'search_info' || inputs[i].id.indexOf('dept') != -1) {
                        //         inputs[i].disabled = false;
                        //     }
                        // }
                        //getTypeConfigs($http, $q);
                    } else {
                        $scope.visible = false;
                    }
                }
            });

            $scope.$bus.subscribe({
                channel: 'user',
                topic: 'manager',
                callback: function(data, envelope) {
                  $scope.totalItems = 0;
                  infoSearchHighService.getController().visible=false;
                  infoEditService.getController().visible=false;
                    if (data.status == "ok") {

                    } else if (status == "exit") {

                    }
                }
            });

            $scope.activeLeftMenu = function(menuWidgetName) {
                if ($scope.selectMenu != undefined) {
                    if ($scope.selectMenu == menuWidgetName) {
                        $scope.selectMenu = undefined;
                    } else {
                        ActiveLeftMenu($scope, menuWidgetName);
                        $scope.selectMenu = menuWidgetName;
                    }
                } else {
                    ActiveLeftMenu($scope, menuWidgetName);
                    $scope.selectMenu = menuWidgetName;
                }
            }
           function addClickHandler(content,marker){
           marker.addEventListener("click",function(e){
            var point = new BMap.Point(marker.getPosition().lng, marker.getPosition().lat);
            $scope.map.panTo(point); 
            openInfo(content,e)}
           );
        }
        function openInfo(content,e){
        var p = e.target;
        var point = new BMap.Point(p.getPosition().lng, p.getPosition().lat);
        var infoWindow = new BMap.InfoWindow("<div style='line-height:1.8em;font-size:12px;'><b>类型:</b>"+content.fType+"</br><b>ID:</b>"+ content.fId+"</br><b>状态：</b>"+ content.fStatus+ "</div>" ,
        opts);  // 创建信息窗口对象 
        $scope.map.openInfoWindow(infoWindow,point); //开启信息窗口
       /* $("#readmore").click(readmore);*/
    }
      

        $scope.countdown = 10;
            $scope.comet4jheight=315;
            $scope.listStatus="glyphicon-chevron-down";
            $scope.comet4jvisible=true;
            $scope.flushvisible=true;
            $scope.zjq= "获取数据中...";
            $scope.cgq= "获取数据中...";
            $scope.wg= "获取数据中...";
            

          var myTime = setInterval(function() {               
                                 $scope.countdown--;
                                 $scope.setcountdown();
                                 $scope.$digest(); // 通知视图模型的变化
                                 if ($scope.countdown==0) {
                                     $scope.getSenesorCount();
                                      $scope.$digest();
                                 }
                         }, 1000);
      $scope.setcountdown=function()
            {
        
                $scope.countdown<0?$scope.countdown=10:$scope.countdown=$scope.countdown;
                $scope.$digest();
            }

           $scope.getSenesorCount = function(){
                $.ajax({
                    type: "GET",
                    url: "/CQJjFlowSupervise/getSensorCount.do",
                    data: {
                       
                    },
                    dataType: "json",
                    async: true,
                    success: function(data) {
                        $scope.list = data.data;
                        for (var i = 0; i < $scope.list.length; i++) {
                            if ($scope.list[i].type == "中继器") {
                                $scope.zjq= $scope.list[i].num;
                                 $scope.$digest(); 
                            }
                            if ($scope.list[i].type == "声学传感器") {
                                $scope.cgq= $scope.list[i].num;
                                 $scope.$digest(); 
                            }
                            if ($scope.list[i].type == "岸边网关") {
                                $scope.wg= $scope.list[i].num;
                                 $scope.$digest(); 
                            }
                            
                        }
                    }
                });
            }

    $scope.changListStatus=function(){


                $scope.comet4jvisible=!$scope.comet4jvisible;
                if($scope.comet4jvisible){
                    $scope.listStatus="glyphicon-chevron-down";
                    $scope.comet4jheight=315;
                  
                     $scope.mlength=20;
                       }
                     
                   else
                    {
                    $scope.listStatus="glyphicon-chevron-up";
                    $scope.comet4jheight=20;
                    $scope.mlength=560;
                    }
                
                $scope.$bus.publish({
                      channel: 'comet4j',
                      topic: 'comet4j.glyphicon',
                      data: {
                          value:$scope.comet4jvisible,
                         
                        }
                     });
            } 
                 //打开历史数据
            $scope.infoSearchHigh = function(){
                infoSearchHighService.getController().initSearch();
            };
                  //打开操作编辑界面
            $scope.operate = function(){
                infoEditService.getController().initOperate();
            };
            
            
        }
        function init(App) {
            App.controller('infoManagerController', ['$scope', '$cookies','$http', '$q','infoSearchHighService', 'infoEditService','infoManagerService', infoManagerController]);
            return infoManagerController;
        }

        return {
            start: init
        };

    });
 


}).call(this);
