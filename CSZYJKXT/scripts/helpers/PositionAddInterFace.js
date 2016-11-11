/*
    用于统一的地图点位叠加；
    参数：
*/

(function() {
    "use strict";
    define([
        "esri/dijit/InfoWindow", "esri/layers/GraphicsLayer",
        'esri/geometry/Extent',
        'esri/SpatialReference',
        "esri/graphic"
    ], function(InfoWindow, GraphicsLayer, Extent, SpatialReference, Graphic) {

        dojo.declare("PointAddInterFace", null, {
            _map: null,
            _infoWindow: null,
            _closeButton: null,
            _getPointLayer: null,
            //构造函数
            constructor: function(map) {
                //定义infowindows
                // this._infoWindow = new InfoWindow();
                // this._infoWindow.setFixedAnchor(InfoWindow.ANCHOR_UPPERRIGHT);
                // this._infoWindow.fixedAnchor = InfoWindow.ANCHOR_LOWERRIGHT;
                // this._infoWindow.startupDijits();
                // this._infoWindow.hide();
                // this._infoWindow.setMap(map);

                this._map = map;
                this.getGraphicLayer();

            },
            /*
             * tempinfowindow地图中展示的infowindow
             * tempPoint是infowindow定位点
             * content是infowindow展示的内容
             * titleName是infowindow的名称
             */
            showInfowindow: function(tempinfowindow, tempPoint, content, titleName) {
                ShowInfowindow(tempinfowindow, tempPoint, content, titleName, this._map);
            },
            getGraphicLayer: function() {
                var _graphicids = this._map.graphicsLayerIds;
                var _layerCount = _graphicids.length;
                if (_layerCount > 0) {
                    this._getPointLayer = this._map.getLayer(_graphicids[0]);
                    // for (var i = 0; i < _layerCount; i++) {
                    //     if (_graphicids[i] == "graphicfronlhb") {
                    //         alert("HAHA");
                    //     };
                    // };
                } else {
                    this._getPointLayer = null;
                };
            },
            /*
             * attribute是symbol的attributes需要读取的字段名，多字段用逗号分隔
             */
            addPointToMap: function(resultInfo, attribute) {
                AddPointToMap(this._infoWindow, this._getPointLayer, resultInfo, this._map, attribute);
            },
            clearmap: function() {
                var _layerids = this._map.graphicsLayerIds;
                var _layerCount = _layerids.length;
                if (_layerCount > 0) {
                    for (var i = 0; i < _layerCount; i++) {
                        var temp = this._map.getLayer(_layerids[i]);
                        temp.clear();
                    }
                };
                this._map.graphics.clear();
            },
            removeGraphicLayer: function() {
                if (this._getPointLayer != null) {
                    var teteet = this._map.graphicsLayerIds;
                    var _layerCount = teteet.length;
                    if (_layerCount > 0) {
                        for (var i = 0; i < _layerCount; i++) {
                            var temp = this._map.getLayer(teteet[i]);
                            this._map.removeLayer(temp);
                        }
                    };
                    //this._infoWindow.hide();
                }
                this._map = null;
            }
        });

        var searchGraphic = null;
        //添加点位到地图
        function AddPointToMap(_infoWindow, _getPointLayer, resultInfo, map, attribute) {
            _getPointLayer.clear();
            var tempPoint = null;
            for (var i = 0; i < resultInfo.length; i++) {

                var pointInfo = angular.fromJson(resultInfo[i]["sInfo"]);
                var windowPoint = new esri.geometry.Point(pointInfo.x, pointInfo.y, new SpatialReference(Number(pointInfo.spatialReference)));
                //var mapExtent = new Extent(shareContent.xmin, shareContent.ymin, shareContent.xmax, shareContent.ymax, new SpatialReference(Number(shareContent.geometry.spatialReference.wkid)));

                var symbol = new esri.symbol.PictureMarkerSymbol("images/hot.png", 40, 43);
                symbol.yoffset="10";
                searchGraphic = new Graphic(windowPoint, symbol);
                searchGraphic.attributes = "";
                for (var j = 0; j < attribute.split(',').length; j++) {
                    if ((j + 1) != attribute.split(',').length) {
                        searchGraphic.attributes += resultInfo[i][attribute.split(',')[j]] + ",";
                    } else {
                        searchGraphic.attributes += resultInfo[i][attribute.split(',')[j]];
                    }
                }
                tempPoint = windowPoint;
                _getPointLayer.add(searchGraphic);
            };
            _getPointLayer.redraw(); //地图刷新

            if (_getPointLayer.graphics.length >= 2) {
                //移动到结果区域
                var zoomExtent = esri.graphicsExtent(_getPointLayer.graphics);
                if (zoomExtent != null) {
                    zoomExtent.xmax += 0.02;
                    zoomExtent.xmin -= 0.02;
                    zoomExtent.ymax += 0.01;
                    zoomExtent.xmin -= 0.03; //增加查询结果的外围边界，使插叙结果全部显示到当前窗口中。
                    map.setExtent(zoomExtent);
                }
            } else {
                //移动到结果区域
                map.setLevel(6);
                map.centerAt(tempPoint);
            }
        };

        //结果列表点击定位
        var ShowInfowindow = function(tempInfowindow, tempPoint, content, titleName, map) {
            tempInfowindow.hide();
            var windowPoint = tempPoint;
            map.centerAt(windowPoint).then(function() {
                tempInfowindow.setTitle("<div style='font-size: 16px;font-family: 微软雅黑;color: #005794;'><img style='width:19px' src='images/infowindow/infotitle.png'/>" + "  " + titleName + "</div>");
                tempInfowindow.setContent(content);
                tempInfowindow.show(windowPoint);
            });
        };
        return PointAddInterFace;
    });
}).call(this);