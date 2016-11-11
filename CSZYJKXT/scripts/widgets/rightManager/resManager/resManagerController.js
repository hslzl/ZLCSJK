/**
 * @蒋祝平
 */
/*系统资源 2016-1-28*/
(function() {
    "use strict";

    define([
        'dojo/_base/array',
        'helpers/symbolhelper'
    ], function(array, sym) {

        function resManagerController($scope, $http, $q, resManagerService) {
            resManagerService.setController($scope);
            $scope.currentPosition = "";
            $scope.currentPage = 1;
            $scope.totalItems = 0;
            $scope.itemsPerPage = 12;
            $scope.visible = false;
            $scope.table_visible = false;
            $scope.messages = '';
            $scope.showError = false;
            $scope.isSearch = false;
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

            var setting = {
                check: {
                    enable: true,
                    chkStyle: "radio",
                    radioType: "all",
                    chkboxType: {
                        "Y": "ps",
                        "N": "ps"
                    }
                },
                data: {
                    simpleData: {
                        enable: true,
                        idKey: "fGuid",
                        pIdKey: "fResourceFatherGuid"
                    },
                    key: {
                        name: "fResourceName"
                    }
                },
                callback: {
                    onClick: zTreeOnClick
                }
            };

            $scope.$bus.subscribe({
                channel: 'leftMenu',
                topic: 'leftMenu.onActive',
                callback: function(data, envelope) {
                    var name = data.name;
                    if (name === 'resManager') {
                        $scope.isSearch = false;
                        $scope.visible = true;
                        $scope.table_visible = false;
                        $scope.currentPosition = "";
                        $scope.loadresources(1, "top"); //加载第1页
                    } else {
                        $scope.visible = false;
                    }
                }
            });

            //搜索资源
            $scope.searchSubject = function() {
                $scope.currentPosition = "";
                $scope.loadresources(1, "search");
            }

            //加载系统资源信息，分页返回结果列表
            $scope.loadresources = function(page, showDeptType) {
                $scope.table_visible = false;
                $scope.currentPage = page;
                var url = null;
                if (showDeptType == "top") {
                    url = "/cqsybackstagemanager/ResourceController/selectTopResource.do";
                    $('#topPagetion_res').show(); //防止多个分页控件同时出现
                    $('#searchPagetion_res').hide();
                    $('#sonPagetion_res').hide();
                }
                if (showDeptType == "search") {
                    $('#topPagetion_res').hide(); //防止多个分页控件同时出现
                    $('#searchPagetion_res').show();
                    $('#sonPagetion_res').hide();
                    url = "/CQMarketSupervise/getResourceByCondition.do?";
                }

                var data = {
                        "pageNo": page, //指定返回的是第几页
                        "pageSize": $scope.itemsPerPage, //没有返回的记录条数
                        "fetchNum": 1,
                        "condition": $scope.subjectName
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
                    if (responseData.message != "未登录或登录超时") {
                        $scope.table_visible = true;
                        vm.items = responseData.data.rows;
                        $scope.totalItems = responseData.data.total;
                        if (showDeptType == "top") {
                            $scope.topTotalItems = responseData.data.total;
                        }
                        if (showDeptType == "search") {
                            $scope.searchTotalItems = responseData.data.total;
                        }
                    } else {
                        alert("用户未登陆或当前用户登陆超时，请重新登陆！");
                    }
                });
            }

            //显示下级资源
            $scope.showSonRes = function(page, index) {
                $('#topPagetion_res').hide(); //防止多个分页控件同时出现
                $('#searchPagetion_res').hide();
                $('#sonPagetion_res').show();
                var fGuid = "";
                if (index !== "") { //区别:点击查询子资源，fGuid不为空
                    fGuid = fGuid = vm.items[index].fGuid;
                } else { //区别：分页查询子资源，fGuid为空
                    fGuid = vm.items[0].fResourceFatherGuid;
                }
                $scope.sonCurrentPage = page;
                // $scope.table_visible = false;
                var data = {
                        "pageNo": page,
                        "pageSize": $scope.itemsPerPage,
                        "fetchNum": 1,
                        "fGuid": fGuid
                    },
                    transFn = function(data) {
                        return $.param(data);
                    };
                $http.post("/cqsybackstagemanager/ResourceController/selectChildResource.do?", data, {
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
                    },
                    transformRequest: transFn
                }).success(function(responseData) {
                    if (responseData.message != "未登录或登录超时") {
                        $scope.table_visible = true;
                        if (responseData.data.total > 0) {
                            $scope.sonTotalItems = responseData.data.total;
                            if (index !== "") {
                                $scope.currentPosition += vm.items[index].fResourceName + " / ";
                            } //显示当前部门位置
                            vm.items = responseData.data.rows;
                        } else {
                            $scope.messages = "没有下级资源！"
                            $('#resAlertModal').modal({
                                keyboard: false,
                                backdrop: 'static'
                            });
                            // alert("没有下级资源！", "提示");
                            return;
                        }
                    } else {
                        alert("用户未登陆或当前用户登陆超时，请重新登陆！", "提示");
                    }
                });
            }

            //返回上级资源
            $scope.returnFatherRes = function() {
                $('#topPagetion_res').hide(); //防止多个分页控件同时出现
                $('#searchPagetion_res').hide();
                $('#sonPagetion_res').show();
                if (vm.items.length == 0) return;
                if (vm.items[0].fResourceFatherGuid == undefined) {
                    $scope.messages = "没有上级资源！"
                    $('#resAlertModal').modal({
                        keyboard: false,
                        backdrop: 'static'
                    });
                    return;
                }
                var data = {
                        "pageNo": 1,
                        "pageSize": 99999,
                        "fetchNum": 99999,
                        "fGuid": vm.items[0].fGuid
                    },
                    transFn = function(data) {
                        return $.param(data);
                    };
                $http.post("/cqsybackstagemanager/ResourceController/selectFatherResource.do?", data, {
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
                    },
                    transformRequest: transFn
                }).success(function(responseData) {
                    if (responseData.message != "未登录或登录超时") {
                        $scope.table_visible = true;
                        if (responseData.data.total > 0) {
                            var charPosition = []; //显示当前部门位置(退回上一级)
                            for (var i = 0; i < $scope.currentPosition.length; i++) {
                                if ($scope.currentPosition[i] == "/") {
                                    charPosition.push(i);
                                }
                            }
                            $scope.currentPosition = $scope.currentPosition.slice(0, charPosition[charPosition.length - 2] + 1);
                            vm.items = responseData.data.rows;
                        } else {
                            $scope.messages = "没有上级资源！"
                            $('#resAlertModal').modal({
                                keyboard: false,
                                backdrop: 'static'
                            });
                        }
                        if (responseData.data.rows[0].fResourceIfLeaf == 0) $scope.topTotalItems = responseData.data.total;
                        if (responseData.data.rows[0].fResourceIfLeaf == 1) $scope.sonTotalItems = responseData.data.total;
                    } else {
                        alert("用户未登陆或当前用户登陆超时，请重新登陆！", "提示");
                    }
                });
            }

            function init() {
                $scope.fFatherResGUID = "",
                $scope.fUriNumber = "",
                $scope.resDesc = "",
                $scope.fResId = null;
                $scope.fUri = null;
                $scope.fResName = null;
                $scope.fSysId = null;
                $scope.messages = "";
                $scope.showError = false;
                $scope.showSuccess = false;
            }

            var saveurl = "/cqsybackstagemanager/ResourceController/addResource.do?";
            var updateurl = "/cqsybackstagemanager/ResourceController/updateResource.do?";
            var url = null;
            $scope.addOrModifyStatus = null;
            //响应添加按钮
            $scope.addres = function() {
                    //初始化字段
                    init();
                    $scope.addOrModifyStatus = "add";
                    $scope.modalShowName = "添加系统资源";
                    $scope.selectDisabled = false;
                    $('#editresModal').modal({
                        keyboard: false,
                        backdrop: 'static'
                    });
                }
                //响应编辑按钮
            $scope.editres = function(index) {
                    //初始化字段
                    init();
                    $scope.fUriGuid = vm.items[index]['fGuid'],
                    $scope.fResName = vm.items[index]['fResourceName'];
                    $scope.fUri = vm.items[index]['fResourceUrl'];
                    $scope.fFatherResGUID = vm.items[index]['fResourceFatherGuid'];
                    $scope.fUriNumber = vm.items[index]['F_RESOURCE_NUMBER'],
                    $scope.resDesc = vm.items[index]['F_RESOURCE_DESCRIPTION'],
                    $scope.fResId = vm.items[index]['fResourceId'];
                    $scope.fSysId = vm.items[index]['F_SYSTEM_ID'];
                    $scope.fSystemName = vm.items[index]['fSystemName'];
                    $scope.addOrModifyStatus = "modify";
                    $scope.selectDisabled = true;
                    $scope.modalShowName = "修改系统资源信息";
                    $('#editresModal').modal({
                        keyboard: false,
                        backdrop: 'static'
                    });
                }
                //系统资源基本信息模块框，响应保存按钮
            $scope.addOrModifyresSubmit = function() {
                validate(); //前端验证
                if ($scope.showError) return;
                switch ($scope.addOrModifyStatus) {
                    case "add":
                        url = saveurl;
                        $scope.fSystemName = $('#fSysId option:selected').text();
                        break;
                    case "modify":
                        url = updateurl;
                        break;
                }
                var ifLeaf;
                if ($scope.fFatherResGUID != "" || $scope.fFatherResGUID != null || $scope.fFatherResGUID != undefined) {
                    ifLeaf = 1;
                }
                var date = new Date();

                var data = {
                        "fGuid": $scope.fUriGuid,
                        "fResourceName": $scope.fResName,
                        "fResourceUrl": $scope.fUri,
                        "ifLeaf": ifLeaf,
                        "fResourceFatherGuid": $scope.fFatherResGUID,
                        "fResourceNumber": $scope.fUriNumber,
                        "fResourceDescription": $scope.resDesc,
                        "fSystemId": $scope.fSysId,
                        "fSystemName": $scope.fSystemName,
                        "fResourceUpdateDate": date.getFullYear() + "-" + date.getMonth() + "-" + date.getDate()
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
                    if (responseData.message != "未登录或登录超时") {
                        if (responseData.code == "0") {
                            if ($scope.addOrModifyStatus === "add") {
                                //初始化字段
                                init();
                                $scope.messages = "添加成功";
                            } else {
                                $scope.messages = "修改成功";
                            }
                            $('#editresModal').modal('hide');
                            $('#resAlertModal').modal({
                                keyboard: false,
                                backdrop: 'static'
                            });
                            //重新加载
                            $scope.loadresources(1);
                        } else if (responseData.code == "-1") {
                            $scope.messages += "登录名已存在! ";
                            $scope.showError = true;
                        } else {
                            alert(responseData.message);
                        }

                    } else {
                        alert("用户未登陆或当前用户登陆超时，请重新登陆！");
                    }
                });
            }

            //显示删除提示
            $scope.delres = function(index) {
                $('#delresModal').modal({
                    keyboard: false,
                    backdrop: 'static'
                });
                $scope.selectedItems = [];
                $scope.selectedresNames = [];
                $scope.selectedItems[0] = vm.items[index]['fGuid'];
                $scope.selectedresNames[0] = vm.items[index]['fResourceName'];
            }

            //批量删除按钮操作，显示删除提示
            $scope.delSelected = function() {
                    var selects = vm.selection();
                    if (selects.length <= 0) {
                        return;
                    };
                    $('#delresModal').modal({
                        keyboard: false,
                        backdrop: 'static'
                    });
                    $scope.selectedItems = [];
                    $scope.selectedresNames = [];
                    angular.forEach(selects, function(item) {
                        $scope.selectedItems[$scope.selectedItems.length] = item['fGuid'];
                        $scope.selectedresNames[$scope.selectedresNames.length] = item['fResourceName'];
                    });
                }
                //执行删除操作
            $scope.delresSubmit = function() {
                    $('#delRoleModal').modal('hide');
                    var data = {
                            "fGuid": $scope.selectedItems.join()
                        },
                        transFn = function(data) {
                            return $.param(data);
                        };
                    $http.post("/cqsybackstagemanager/ResourceController/removeResource.do?", data, {
                        headers: {
                            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
                        },
                        transformRequest: transFn
                    }).success(function(responseData) {
                        if (responseData.message != "未登录或登录超时") {
                            if (responseData.code == "20000") {
                                $('#delresModal').modal('hide');
                                $scope.messages = "删除成功!";
                                $('#resAlertModal').modal({
                                    keyboard: false,
                                    backdrop: 'static'
                                });
                                $scope.loadresources(1); //重新加载
                            } else {
                                alert(responseData.message);
                            }
                        } else {
                            alert("用户未登陆或当前用户登陆超时，请重新登陆！");
                        }
                    });
                }
                //点击选择，生成父级资源Tree
            var treeObj;
            $scope.showFatherRes = function() {
                    $('#resModal').modal({
                        keyboard: false,
                        backdrop: 'static'
                    });
                    var data = {
                            "pageNo": 1,
                            "pageSize": 9999,
                            "fetchNum": 999
                        },
                        transFn = function(data) {
                            return $.param(data);
                        };
                    $http.post("/cqsybackstagemanager/ResourceController/selectAllResource.do?", data, {
                        headers: {
                            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
                        },
                        transformRequest: transFn
                    }).success(function(result) {
                        if (result.code == 20000) {
                            treeObj = $.fn.zTree.init($("#srsResTree"), setting, result.data.rows);
                            $scope.tree_visible = true;
                        } else {
                            alert(result.message);
                        }
                    });
                }
                //父级资源Tree确定按钮
            $scope.saveFatherRes = function() {
                    var treeNodes = treeObj.getChangeCheckedNodes()[0];
                    $scope.fFatherResName = treeNodes.fResourceName;
                    $scope.fFatherResGUID = treeNodes.fGuid;
                    $('#resModal').modal('hide');
                }
                //Ztree选择节点文字，选中节点
            function zTreeOnClick(event, treeId, treeNode) {
                if (treeNode.checked == true) {
                    try {
                        treeObj.checkNode(treeNode, false, true);
                    } catch (ex) {}
                } else {
                    try {
                        treeObj.checkNode(treeNode, true, true);
                    } catch (ex) {}
                }
            };
            //验证
            var validate = function() {
                $scope.messages = "";
                $scope.showError = false;
                $scope.showSuccess = false;
                if ($scope.fUri === null || $scope.fUri === '' || $.trim($scope.fUri) === '') {
                    $scope.messages += "资源URL不能为空! ";
                    $scope.showError = true;
                }
                if ($scope.fResName === null || $scope.fResName === '' || $.trim($scope.fResName) === '') {
                    $scope.messages += "\n资源名称不能为空! ";
                    $scope.showError = true;
                }
                if ($scope.fSysId === null || $scope.fSysId === '') {
                    $scope.messages += "\n请选择资源从属系统! ";
                    $scope.showError = true;
                }
            }
        }

        function init(App) {
            App.controller('resManagerController', ['$scope', '$http', '$q', 'resManagerService', resManagerController]);
            return resManagerController;
        }

        return {
            start: init
        };

    });

}).call(this);