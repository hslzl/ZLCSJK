/**
 * Created by zhang on 2015/10/27.

 */
(function() {
    "use strict";

    define([
        'dojo/_base/array',
        'helpers/symbolhelper'
    ], function(array, sym) {

        function sysVerManagerController($scope, $http, $sce, sysVerManagerService) {
            var inputs = document.getElementsByTagName("input");
            sysVerManagerService.setController($scope);
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
                    if (name === 'sysVerManager') {
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
                var url = "/cqsybackstagemanager/SysVersionController/getVersionInfo.do";
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
                        for (var i = responseData.data.length - 1; i >= 0; i--) {
                            vm.items[i].fContentHtml=$sce.trustAsHtml(vm.items[i].fContent);
                        };
                        $scope.totalItems = responseData.data.total;
                    }
                    else{
                        alert("用户未登陆或当前用户登陆超时，请重新登陆");
                    }
                });
            }

            function init(){
                $scope.fVersion = "";
                $scope.fContent = "";
                $scope.fUpdateDate = "";
                $scope.fGuid = null;
                $scope.messages = "";
                $scope.showError = false;
                $scope.showSuccess = false;
            }

            var saveurl = "/cqsybackstagemanager/SysVersionController/addSysVersion.do?";
            var updateUrl = "/cqsybackstagemanager/SysVersionController/updateSysVersion.do?"
            var url = null;
            $scope.addOrModifyStatus = null;

            //响应添加按钮
            $scope.addSysVer = function(){
                //初始化字段
                init();
                $scope.addOrModifyStatus = "add";
                $scope.modalShowName = "添加版本更新信息";
                //$scope.modalShowName = "Add Version Update Information";
                $scope.selectDisabled = false;
                $('#editSysVerModal').modal({
                    keyboard: false,
                    backdrop: 'static'
                });
            }
            //响应编辑按钮
            $scope.editSysVer = function(index){
                //初始化字段
                init();
                $scope.fGuid = vm.items[index]['fGuid'];
                $scope.fVersion = vm.items[index]['fVersion'];
                $scope.fContent = vm.items[index]['fContent'];
                $scope.fUpdateDate = vm.items[index]['fUpdateDate'];
                $scope.addOrModifyStatus = "modify";
                $scope.selectDisabled = true;
                $scope.modalShowName = "修改版本更新信息";
                $('#editSysVerModal').modal({
                    keyboard: false,
                    backdrop: 'static'
                });
            }

            //版本更新信息基本信息模块框，响应保存按钮
            $scope.addOrModifySysVerSubmit= function(){
                validate();//前端验证
                if($scope.showError) return;
                var data = {}
                $scope.fUpdateDate = $("#fUpdateDate").val()
                if($scope.addOrModifyStatus === "add"){
                    url = saveurl;
                    data = {
                        "fVersion" : $scope.fVersion,
                        "fContent" : $scope.fContent,
                        "fUpdateDate" : $scope.fUpdateDate
                    }
                }else if($scope.addOrModifyStatus === "modify"){
                    url = updateUrl
                    data = {
                        "fGuid":$scope.fGuid,
                        "fVersion" : $scope.fVersion,
                        "fContent" : $scope.fContent,
                        "fUpdateDate" : $scope.fUpdateDate
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
                $scope.selectedSysVers[0] = vm.items[index]['fVersion'];
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
                    $scope.selectedSysVers[$scope.selectedSysVers.length] = item['fVersion'];
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
                $http.post("/cqsybackstagemanager/SysVersionController/removSysVersion.do?", data, {
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

            //验证
            var validate = function(){
                $scope.messages = "";
                $scope.showError = false;
                $scope.showSuccess = false;
            }
        }

        function init(App) {
            App.controller('sysVerManagerController', ['$scope', '$http', '$sce', 'sysVerManagerService', sysVerManagerController]);
            return sysVerManagerController;
        }

        return {
            start: init
        };

    });

}).call(this);