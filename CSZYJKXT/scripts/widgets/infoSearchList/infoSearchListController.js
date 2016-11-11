/**
 * @徐杨航 2016-1-11修改
 */
/*搜索结果展示，占用全div 2014-8-25*/
(function() {
    "use strict";

    define([
        'angular',
        'esri/geometry/Extent',
        'esri/SpatialReference',
        "esri/graphic","esri/layers/GraphicsLayer","dojo/on",'helpers/PositionAddInterFace',
        "dojo/dom-construct","esri/dijit/InfoWindow"
    ], function(angular,Extent, SpatialReference,Graphic,GraphicsLayer,on,PositionAddInterFace,domConstruct,InfoWindow) {


        function infoSearchListController($scope, $http, $q, $compile,$log, SearchSrvc,infowindowService, infoSearchListService) {
            $scope.infoSearchListvisible = false;
            
            $scope.maxSize = 3;
            $scope.table_visible = false;
            $scope.itemsPerPage=10;
            $scope.itemPage=0;
            $scope.eveWarning = false;
            $scope.exportHigh = false;

            var urlCaseByGuid = "/CQJjFlowSupervise/querySensorList.do";

            var allFeatures = [];
            var vm = $scope.vm = {};
            vm.currentPage = 1;
            var _listResult= [];
            var _isLoaded = false;
            var map = null;
            var searchGraphic = null;
            var _graphicClickHandler = null;
            var _graphicMoveOverHandler = null;
            var _graphicMoveOutHandler = null;
            var content=null;
            var positionAddInterFace = null;  //地图叠加实例对象
            
            var qData=null;
            var queryurl=null;
            var searchType = null;  //查询类型，0为基本查询和定制查询，1为特殊主体查询
            var  locorg=window.location.origin;
            
            //定义infowindow
            var _infoWindow = new InfoWindow();
            _infoWindow.setFixedAnchor(InfoWindow.ANCHOR_UPPERRIGHT);
            _infoWindow.fixedAnchor = InfoWindow.ANCHOR_UPPERRIGHT;
            _infoWindow.startupDijits();
            _infoWindow.resize(400,365);
            _infoWindow.hide();
            
            //定义关闭infowindow的关闭按钮
            var _closeButton = domConstruct.create("div",{"class": "close", "title": "关闭"}, _infoWindow.domNode);
            on(_closeButton,"click",function(evt){
                _infoWindow.hide();                
            });
            
            $scope.$bus.subscribe({
                channel: 'map',
                topic: 'map.created',
                callback: function(data, envelope) {
                    map = data.map;
                    //map.addLayer(_getPointLayer); //添加查询结构symbol图层
                    _infoWindow.setMap(map);
                    getPartyTypes();
                    //document.getElementById("infoSearchListContainer").style.top="435px";
                    //angular.element("#infoSearchListContent").height(window.innerHeight-538);
                    infoSearchListService.setController($scope);
                    positionAddInterFace = new PositionAddInterFace(map);   //创建地图叠加类的实例对象
                }
            });

       

            $scope.toHome = function() {
                $scope.$bus.publish({
                    channel: 'menu',
                    topic: 'menu.onActive',
                    data: {
                        name: "infoSearch"
                    }
                });
            }
            $scope.show = function() {
                $scope.infoSearchListvisible = true;
                $scope.listHeight = angular.element("#ContentContainer").height() -376;
                angular.element("#infoSearchListContent").height($scope.listHeight - 80);
            };
           $scope.exshow = function(h) {
                $scope.infoSearchListvisible = true;
                $scope.listHeight = angular.element("#ContentContainer").height()-h;
                angular.element("#infoSearchListContent").height($scope.listHeight - 80);
                return $scope.listHeight;
            };
            $scope.hide = function() {
                $scope.infoSearchListvisible = false;
                //_getPointLayer.clear();
                positionAddInterFace.clearmap(); //清空标注
            };
            //进行查询结果展示
            $scope.setResult = function(_listResultRows, _listResultTotal, url, qdatea, type,exportHigh) {
                getSelectFieldsList();  //获取导出字段选择项

                $scope.itemPage = 0;
                qData = qdatea;
                queryurl = url;
                
                $scope.exportHigh = exportHigh; //综合查询导出按钮
                _listResult = _listResultRows;
                $scope.searchType = type;  //查询类型，0为基本查询和定制查询，1为特殊主体查询，2为特种设备查询
                content = $compile("<infowindow></infowindow>")($scope);
                if (!_isLoaded) {
                    vm.currentPage = 1;
                    $scope.totalItems = _listResultTotal;
                    if ($scope.totalItems == 0) {
                        if (url != "") {
                            jAlert("没有查询到数据!", "提示！");
                        }
                        _infoWindow.hide();
                        $scope.table_visible = false;
                        $scope.features = "";
                        //_getPointLayer.clear();
                        positionAddInterFace.clearmap(); //清空标注
                    } else {
                        allFeatures = _listResult;
                        $scope.features = allFeatures;
                        idToModel($scope.features,$scope.typeNameArray);  //案件领域
                        getFWflx($scope.features,$scope.transgressArray);  //违法类型
                        //addPointToMap(_listResult,isEqpt);  //地图叠加方法
                        positionAddInterFace.addPointToMap(_listResult,"FId");
                        $scope.table_visible = true;
                        $scope.ids = getIdsForExport();  //获取ids
                    }
                }
                
                if (positionAddInterFace._getPointLayer != null) {
                    //响应用户对地图上标记的点击。
                    if (_graphicClickHandler != null) {
                        _graphicClickHandler.remove();
                    }
                    _graphicClickHandler = positionAddInterFace._getPointLayer.on("click", function(evt) {
                        var fGuid = evt.graphic.attributes.split(',')[0];
                        $http.get(urlCaseByGuid, {
                            headers: {
                                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
                            },
                            params:{
                                "FId": fGuid
                            }
                        }).success(function(responseData) {
                            if (responseData.InfoMessage != "登录超时，请重新登录!") {
                                _listResult = responseData.object;
                                //查询结果添加到infowindow
                                addToInfo(_listResult, fGuid);
                                positionAddInterFace.showInfowindow(_infoWindow,evt.graphic.geometry,content[0],_listResult.FDsrMc);
                            } else {
                                jAlert("用户未登陆或当前用户登陆超时，请重新登陆！", "提示！");
                            }
                        });
                    });
                    // _graphicMoveOverHandler = _getPointLayer.on("mouse-over", function(evt) {
                    //     map.setMapCursor("pointer");
                    // });
                    // _graphicMoveOutHandler = _getPointLayer.on("mouse-out", function(evt) {
                    //     map.setMapCursor("default");
                    // });
                    _graphicMoveOverHandler = positionAddInterFace._getPointLayer.on("mouse-over", function(evt) {
                        map.setMapCursor("pointer");
                    });
                    _graphicMoveOutHandler = positionAddInterFace._getPointLayer.on("mouse-out", function(evt) {
                        map.setMapCursor("default");
                    });
                }
            };
            //加载当前页面的结果列表
            $scope.selectPage = function(page) {
            	//qData.pageno=Math.ceil(page/3);
            	//$scope.itemPage=(page-1)%3;
                $scope.selectTR = "";
                _infoWindow.hide();
                qData.pageNum = page;
                var data = qData,
                    transFn = function(data) {
                        return $.param(data);
                    };
                $http.post(queryurl, data, {
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
                    },
                    transformRequest: transFn
                }).success(function(responseData) {
                    if (responseData.InfoMessage != "登录超时，请重新登录!") {
                        _listResult = responseData.object.data;
                        createsInfo();
                        //查询结果叠加到地图,展示结果列表
                        allFeatures = _listResult.rows;
                        $scope.features = allFeatures;
                        idToModel($scope.features,$scope.typeNameArray);  //案件领域
                        getFWflx($scope.features,$scope.transgressArray);  //违法类型
                        positionAddInterFace.addPointToMap(allFeatures,"FId");
                        $scope.table_visible = true;
                        $scope.ids = getIdsForExport();  //获取ids
                    } else {
                        jAlert("用户未登陆或当前用户登陆超时，请重新登陆！", "提示！");
                    }
                });
            }

            $scope.$bus.subscribe({
                    channel: 'close',
                    topic: 'closeInfoWindow',
                    callback: function(data, envelope) {
                        if (data.close == 'closeInfoWindow') {
                            _infoWindow.hide();
                            $scope.selectTR = "";
                        }
                    }
                });

          

            //结果列表点击定位
            $scope.setPosition = function(resultInfo) {
                $scope.selectTR = resultInfo.FId;
                $scope.selectCase = resultInfo; //选中的案件信息
                $http.get(urlCaseByGuid, {
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
                    },
                    params: {
                        "FId": resultInfo.FId
                    }
                }).success(function(responseData) {
                    if (responseData.InfoMessage != "登录超时，请重新登录!") {
                        _listResult = responseData.object;
                        var windowPoint = new esri.geometry.Point(Number(resultInfo.sInfo.x), Number(resultInfo.sInfo.y), new SpatialReference(Number(resultInfo.sInfo.spatialReference)));
                        //查询结果添加到infowindow
                        addToInfo(_listResult, resultInfo.FId);
                        positionAddInterFace.showInfowindow(_infoWindow,windowPoint,content[0],_listResult.FDsrMc);
                    } else {
                        jAlert("用户未登陆或当前用户登陆超时，请重新登陆！", "提示！");
                    }
                });
            };
            //添加查询的基本信息和信用信息到infowindow中       
            function addToInfo(resultInfo,key) {
            	infowindowService.getController().readcurrentPage(resultInfo,key);
            }

            $scope.setHeight = function(height) {
                $scope.listHeight = $scope.listHeight + height;
                //$scope.listHeight = angular.element("#ContentContainer").height() - 94;
                angular.element("#infoSearchListContent").height($scope.listHeight - 80);
            }

            //点击查看按钮
            $scope.infoEnter = function(optype) {
                if (optype == "update") {
                    if ($scope.selectTR) {
                        ActivelawCase(optype);
                    } else {
                        jAlert("请选择要查看的案件！", "提示！");
                        return;
                    }
                }
            };

            //获取当前列表的案件id拼成字符串
            var getIdsForExport = function(){
                var ids = "";
                for (var i = 0; i < $scope.features.length; i++) {
                    ids += $scope.features[i].FId;
                    if (i != $scope.features.length-1) {
                        ids += ",";
                    };
                };
                return ids;
            };

            function ActivelawCase(optype) {
                $scope.$bus.publish({ //发布事件，进入到右侧的案件控制模块，优先显示案源基本信息添加编辑页面
                    channel: 'lawCase',
                    topic: 'lawCase.onActive',
                    data: {
                        //sender: "lawSourceManager",
                        // ajname: _ajname,
                        wname: "lawCaseContent",
                        optype: optype, //  表示操作的类型（添加/编辑/查看详情
                        value: $scope.selectTR //FId 案源信息的唯一标识，此处删除valueObj参数以及不用的FLcsl参数，与lawCaseInfo里面的参数保持一致 @徐杨航 2015-11-17
                    }
                });
            }

  

         




         

            $("#highDown").click(function(){
            });

            $scope.$bus.subscribe({
                channel: 'menu',
                topic: 'menu.onActive',
                callback: function(data, envelope) {
                    var name = data.name;
                    if (name === 'infoSearchList') {
                        $scope.infoSearchListvisible = true;
                    } else {
                        $scope.infoSearchListvisible = false;
                        _infoWindow.hide();
                        $scope.selectTR = "";
                        // _getPointLayer.clear();
                        positionAddInterFace.clearmap(); //清空标注
                        $scope.features = [];
                        if (_graphicClickHandler != null) {
                            _graphicClickHandler.remove();
                        }
                    }
                }
            });
        }

        function init(App) {
            App.controller('infoSearchListController', ['$scope', '$http', '$q', '$compile','$log', 'mapService', 'infowindowService','infoSearchListService', infoSearchListController]);
            return infoSearchListController;
        }

        return {
            start: init
        };

    });

}).call(this);