/**
 * Created by zhang on 2015/10/27.

 */
(function() {
    "use strict";

    define([
        'dojo/_base/array',
        'helpers/symbolhelper'
    ], function(array, sym) {

        function sysTimeSpanSettingsController($scope, $http, $sce, sysTimeSpanSettingsService) {
            
            var inputs = document.getElementsByTagName("input");
            sysTimeSpanSettingsService.setController($scope);
            $scope.currentPosition="";
            $scope.currentPage = 1;
            $scope.totalItems = 0;
            $scope.itemsPerPage = 12;
            $scope.visible = false;
            $scope.table_visible = false;
            $scope.messages = '';
            $scope.showError = false;
            $scope.isSearch=false;
            var vm = $scope.vm = {};
            vm.items = [];
            $scope.syss = [];

            vm.checkAll = function(checked) {
                angular.forEach(vm.items, function(item) {
                    item.$checked = checked;
                });
            };

            vm.selection = function() {
                return _.where(vm.items, {
                    $checked: true
                });
            };

            $scope.$bus.subscribe({
                channel: 'leftMenu',
                topic: 'leftMenu.onActive',
                callback: function(data, envelope) {
                    var name = data.name;
                    if (name === 'timeSpanSetting') {
                        $scope.isSearch=false;
                        $scope.visible = true;
                        $scope.table_visible = false;
                        $scope.currentPosition="";
                       $scope.loadSysVerources(); //加载第1页
                        for(var i=0;i<inputs.length;i++){
                            if(inputs[i].id === 'search_sys' || inputs[i].id === 'fResName' || inputs[i].id === 'fUri'){
                                inputs[i].disabled = false;
                            }
                        }
                    } else {
                        $scope.visible = false;
                    }
                }
            });

            //搜索资源
            $scope.searchSubject=function(){
                $scope.currentPosition="";
                $scope.loadSysVerources(1,"search");
            }


            //加载系统资源信息
            $scope.loadSysVerources = function()
            {
                $scope.table_visible = false;
                var url = "/cqsybackstagemanager/SysTimeDefaultController/getSysTimeSpan.do";
                var data = {
                    },
                    transFn = function(data) {
                        return $.param(data);
                    };
                $http.post(url, data, {
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
                    },
                    transformRequest: transFn
                }).success(function(responseData) {
                    if(responseData.message != "未登录或登录超时"){
                        $scope.table_visible = true;
                        vm.items = responseData.data;
                        for(var i=0;i<responseData.data.length;i++){
                            if(responseData.data[i].fTimeType === 1){
                                vm.items[i].fTimeTypeMes = '天'
                            }
                            else if(responseData.data[i].fTimeType === 2){
                                vm.items[i].fTimeTypeMes = '周'
                            }
                            else if(responseData.data[i].fTimeType === 3){
                                vm.items[i].fTimeTypeMes = '月'
                            }
                        }
                    }
                    else{
                        alert("用户未登陆或当前用户登陆超时，请重新登陆");
                    }
                });
            }

            function init(){
                $scope.fTimeSpanName = "";
                $scope.fTimeNum = "";
                $scope.fTimeType = 1; //天
                $scope.fGuid = null;
                $scope.messages = "";
                $scope.showError = false;
                $scope.showSuccess = false;
            }

            var saveurl = "/cqsybackstagemanager/SysTimeDefaultController/addSysTimeSpan.do?";
            var updateUrl = "/cqsybackstagemanager/SysTimeDefaultController/updateSysTimeSpan.do?"
            var url = null;
            $scope.addOrModifyStatus = null;

            //响应添加按钮
            $scope.addSysTimeSpanSetting = function(){
                //初始化字段
                init();
                $scope.addOrModifyStatus = "add";
                $scope.modalShowName = "添加查询时间范围";
                //$scope.modalShowName = "Add Version Update Information";
                $scope.selectDisabled = false;
                $('#editSysTimeSpanModal').modal({
                    keyboard: false,
                    backdrop: 'static'
                });
                $("#fTimeSpanName").attr("disabled",false) //回复fTimeSpanName 使其可输入
            }
            //响应编辑按钮
            $scope.editSysVer = function(index){
                //初始化字段
                init();
                $scope.fGuid = vm.items[index]['fGuid'];
                $scope.fTimeSpanName = vm.items[index]['fTimeSpanName'];
                $scope.fTimeNum = vm.items[index]['fTimeNum'];
                $scope.fTimeType = vm.items[index]['fTimeType']
                $scope.addOrModifyStatus = "modify";
                $scope.selectDisabled = true;
                $scope.modalShowName = "修改版本更新信息";
                $('#editSysTimeSpanModal').modal({
                    keyboard: false,
                    backdrop: 'static'
                });

                $("#fTimeSpanName").attr("disabled","disabled") //禁止修改fTimeSpanName
            }

            //版本更新信息基本信息模块框，响应保存按钮
            $scope.addOrModifySysVerSubmit= function(){
                validate();//前端验证
                if($scope.showError) return;
                var data = {}
                if($scope.addOrModifyStatus === "add"){
                    url = saveurl;
                    data = {
                        "fTimeSpanName" : $scope.fTimeSpanName,
                        "fTimeNum" : $scope.fTimeNum,
                        "fTimeType" : $scope.fTimeType
                    }
                }else if($scope.addOrModifyStatus === "modify"){
                    url = updateUrl
                    data = {
                        "fGuid":$scope.fGuid,
                        "fTimeSpanName" : $scope.fTimeSpanName,
                        "fTimeNum" : $scope.fTimeNum,
                        "fTimeType" : $scope.fTimeType
                    }
                }

                var date = new Date();

                var transFn = function(data) {
                    return $.param(data);
                };
                $http.post(url, data, {
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
                    },
                    transformRequest: transFn
                }).success(function(responseData) {
                    if (responseData.message != "未登录或登录超时") {
                        if(responseData.code ==  "20000"){
                            $scope.showSuccess = true;
                            if($scope.addOrModifyStatus === "add"){                                
                                init();//初始化字段
                                $scope.messages = "添加成功";
                            }else{
                                $scope.messages ="修改成功";
                            }
                            var timer,countdown=3;
                            clearTimeout(timer);
                            timer = setInterval(function() {
                                $scope.messages = countdown--;
                                if (countdown < 1) {
                                    clearTimeout(timer);
                                    $('#editSysVerModal').modal('hide');
                                    $scope.loadSysVerources();//重新加载
                                }
                            },500);
                        }else if(responseData.code == "-1"){
                            $scope.messages += "登录名已存在! ";
                            $scope.showError = true;
                        }else{
                            $scope.showError = true;
                            $scope.messages=responseData.message;
                        }
                    } else {
                        alert("用户未登陆或当前用户登陆超时，请重新登陆！");
                    }
                });
            }

            //显示删除提示
            $scope.delSysVer = function(index){
                $('#delSysVerModal').modal({
                    keyboard: false,
                    backdrop: 'static'
                });
                $scope.selectedItems = [];
                $scope.selectedSysVers = [];
                $scope.selectedItems[0] = vm.items[index]['fGuid'];
                $scope.selectedSysVers[0] = vm.items[index]['fTimeSpanName'];
            }

            //批量删除按钮操作，显示删除提示
            $scope.delSelected = function(){
                var selects = vm.selection();
                if (selects.length <= 0) {
                    return;
                };
                $('#delSysVerModal').modal({
                    keyboard: false,
                    backdrop: 'static'
                });
                $scope.selectedItems = [];
                $scope.selectedSysVers = [];
                angular.forEach(selects, function(item) {
                    $scope.selectedItems[$scope.selectedItems.length] = item['fGuid'];
                    $scope.selectedSysVers[$scope.selectedSysVers.length] = item['fTimeSpanName'];
                });
            }

            //执行删除操作
            $scope.delSysVerSubmit = function(){
                $('#delSysVerModal').modal('hide');
                var data = {
                        "fGuid": $scope.selectedItems.join()
                    },
                    transFn = function(data) {
                        return $.param(data);
                    };
                $http.post("/cqsybackstagemanager/SysTimeDefaultController/removeSysTimeSpan.do?", data, {
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
                    },
                    transformRequest: transFn
                }).success(function(responseData) {
                    if (responseData.message !="未登录或登录超时") {
                        if(responseData.code == "20000"){
                            $('#delSysVerModal').modal('hide');
                            $scope.messages ="删除成功!";
                            $('#sysVerAlertModal').modal({
                                keyboard: false,
                                backdrop: 'static'
                            });
                            $scope.loadSysVerources();//重新加载
                        }else{
                            alert(responseData.message);
                        }
                    } else {
                        alert("用户未登陆或当前用户登陆超时，请重新登陆！");
                    }
                });
            }

            //将查询时间范围绑定到所有用户
            $scope.bindUser = function (index) {
                var data = {
                    "fTimeSpanName" : vm.items[index].fTimeSpanName,
                    "fTimeNum" : vm.items[index].fTimeNum,
                    "fTimeType" : vm.items[index].fTimeType
                    },
                    transFn = function(data) {
                        return $.param(data);
                    };
                $http.post("/cqsybackstagemanager/SysTimeDefaultController/slideConfig.do?", data, {
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
                    },
                    transformRequest: transFn
                }).success(function(responseData) {
                    if (responseData.message != "未登录或登录超时") {
                        alert("绑定成功！")
                    } else {
                        alert("用户未登陆或当前用户登陆超时，请重新登陆！");
                    }
                });
            }
            //验证
            var validate = function(){
                $scope.messages = "";
                $scope.showError = false;
                $scope.showSuccess = false;
            }
        }

        function init(App) {
            App.controller('sysTimeSpanSettingsController', ['$scope', '$http', '$sce', 'sysTimeSpanSettingsService', sysTimeSpanSettingsController]);
            return sysTimeSpanSettingsController;
        }

        return {
            start: init
        };

    });

}).call(this);