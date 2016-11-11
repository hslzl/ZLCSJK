/*
    用于统一的图层数据查询方法，支持分页查询；
    参数：查询图层URL，查询返回字段字段，
*/

(function () {
    "use strict";
    define([
        "esri/layers/FeatureLayer","esri/tasks/query","esri/tasks/QueryTask"
    ], function (FeatureLayer, Query, QueryTask) {

        dojo.declare("LayerQueryInterFace", null, {
            constructor: function(queryContent, featureLayer){
                this._featureLayer = featureLayer
                this._queryContent = dojo.mixin({}, queryContent);
                if(!dojo.exists("featureLayerUrl", this._queryContent)){
                    window.console.log("查询图层设置出错");
                }
                if(!dojo.exists("outFields", this._queryContent)){
                    this._queryContent.outFields  = ["*"];
                }
                if(!dojo.exists("where", this._queryContent)){
                    this._queryContent.where = "1=1";
                }
                if(!dojo.exists("returnGeometry", this._queryContent)){
                    this._queryContent.returnGeometry = false;   
                }
            },

            getAllResults:function(callbackFun){
                var _query = new Query();
                    _query = dojo.mixin(_query, this._queryContent);
                if(dojo.exists("featureLayerUrl", this._queryContent)){
                    var _queryTask = new QueryTask(this._queryContent.featureLayerUrl);
                    _queryTask.execute(_query, callbackFun);    
                }else if(this._featureLayer != null){
                    this._featureLayer.queryFeatures(_query, callbackFun);
                }
                
            }
        });
        return LayerQueryInterFace;
    });
}).call(this);