/**
 * @唐爽
 */
/*部门管理  2015-1-8*/
(function () {
    "use strict";

    define([
        'dojo/_base/array',
        'helpers/symbolhelper'
    ], function (array, sym) {



        function deptManagerController($scope, $http, $q, $cookies, deptManagerService) {

            deptManagerService.setController($scope);
            $scope.subjectName = "";
            $scope.currentPosition="";

            $scope.searchCurrentPage = 1;
            $scope.topCurrentPage = 1;
            $scope.sonCurrentPage = 1;
            $scope.searchTotalItems = null;
            $scope.topTotalItems = null;
            $scope.sonTotalItems = null;

            $scope.itemsPerPage = 12;
            $scope.visible = true;//------------临时----删---后来---
            $scope.table_visible = true;//------------临时----删---后来---
            //部门列表信息
            var vm = $scope.vm = {};
            vm.items = [];

            var showDeptType = "top";
            var saveurl = "/cqsybackstagemanager/RightManageController/addDepartment.do?";//添加部门
            var updateurl = "/cqsybackstagemanager/RightManageController/updateDepartment.do?";//更新
            var deleteurl = "/CQMarketSupervise/deleteDepartmentByFGuids.do?";
            $scope.addOrModifyStatus = null; //添加or编辑部门

            var removeUserIds;//移出用户相关变量
            var removeGuidBofore;

            var zTree = "";
            var zNodes = "";
            $scope.fatherDeptGUID = "";
            var setting = {
                check: {
                    enable: true,
                    chkStyle: "radio",
                    radioType: "all"
                },
                data: {
                    simpleData: {
                        enable: true,
                        idKey: "fGuid",
                        pIdKey: "fFatherGuid"
                    },
                    key: {
                        name: "fDepartmentName"
                    }
                },
                callback: {
                    onClick: zTreeOnClick
                } 
            };

            vm.checkAll = function (checked) {
                angular.forEach(vm.items, function (item) {
                    item.$checked = checked;
                });
            };

            vm.selection = function () {
                return _.where(vm.items, {
                    $checked: true
                });
            };

            $scope.$bus.subscribe({
                channel: 'leftMenu',
                topic: 'leftMenu.onActive',
                callback: function (data, envelope) {
                    var name = data.name;
                    if (name === 'deptManager') {
                        $scope.visible = true;
                        $scope.table_visible = false;
                        $scope.currentPosition="";
                        $scope.loadDepts(1,"top");//加载第1页
                        //getTypeConfigs($http,$q);
                    } else {
                        $scope.visible = false;
                    }
                }
            });

            //搜索
            $scope.searchSubject = function () {
                $scope.currentPosition="";
                $scope.loadDepts(1,"search");
            };

            var urlTopDept = "/cqsybackstagemanager/RightManageController/selectTopDepartment.do?";
            var urlConditionDept = "/CQMarketSupervise/getDepartmentByCondition.do?";//
            $scope.loadDepts = function (page,showDeptType) {
                var urlPage;
                var condition="";
                if (showDeptType == "top"||showDeptType == "condition") {
                    urlPage = urlTopDept;
                    $scope.topCurrentPage = page; 
                    $('#topPagetion').show();//防止多个分页控件同时出现
                    $('#sonPagetion').hide();
                    $('#searchPagetion').hide();                 
                }
                if (showDeptType == "search") {
                    urlPage = urlConditionDept;
                    condition = $scope.subjectName
                    $scope.searchCurrentPage=page;
                    $('#topPagetion').hide();
                    $('#sonPagetion').hide();
                    $('#searchPagetion').show();
                }
                $scope.table_visible = false;
                var data = {
                    "pageNo": page,
                    "pageSize": $scope.itemsPerPage,
                    "fetchNum": 1,
                    "condition": condition
                },
                transFn = function (data) {
                    return $.param(data);
                };
                $http.post(urlPage, data, {
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
                    },
                    transformRequest: transFn
                }).success(function (responseData) {
                    if (responseData.message != "未登录或登录超时") {
                        $scope.table_visible = true;
                        if(responseData.data.total>0){
                            vm.items = responseData.data.rows;
                            if(showDeptType=="top"){$scope.topTotalItems = responseData.data.total;}
                            if(showDeptType=="search"){$scope.searchTotalItems = responseData.data.total;}
                        }else{
                            $scope.messages="没有数据！"
                            $('#deptAlertModal').modal({
                                keyboard: false,
                                backdrop: 'static'
                            });
                        }
                    } else {
                        alert("用户未登陆或当前用户登陆超时，请重新登陆！", "提示");
                    }
                });
            }

            //显示下级部门
            var fatherDeptGUID="";
            $scope.showSonDept = function (page,index) {
                $('#topPagetion').hide();//防止多个分页控件同时出现
                $('#searchPagetion').hide();
                $('#sonPagetion').show();
                var fGuid="";
                if(index!==""){//区别:点击查询，fGuid不为空
                    fGuid=fGuid=vm.items[index].fGuid;
                }
                else{//区别：分页查询，fGuid为空
                    fGuid=vm.items[0].fFatherGuid;
                }
                $scope.sonCurrentPage = page;
                // $scope.table_visible = false;
                var data = {
                    "pageNo": page,
                    "pageSize": $scope.itemsPerPage,
                    "fetchNum": 1,
                    "fGuid": fGuid
                },
                    transFn = function (data) {
                        return $.param(data);
                    };
                $http.post("/cqsybackstagemanager/RightManageController/selectChildDepartment.do?", data, {
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
                    },
                    transformRequest: transFn
                }).success(function (responseData) {
                    if (responseData.message != "未登录或登录超时") {
                        
                        $scope.table_visible = true;
                        if (responseData.data.total > 0) {
                            $scope.sonTotalItems = responseData.data.total;
                            if(index!==""){$scope.currentPosition+=vm.items[index].fDeptName+" / ";}//显示当前部门位置
                            vm.items = responseData.data.rows;
                        } else {
                            $scope.messages="没有下级部门！"
                            $('#deptAlertModal').modal({
                                keyboard: false,
                                backdrop: 'static'
                            });
                            // alert("没有下级部门！", "提示");
                            return;
                        }
                    } else {
                        alert("用户未登陆或当前用户登陆超时，请重新登陆！", "提示");
                    }
                });
            }

            //返回上级部门
            $scope.returnFatherDept = function () {
                if(vm.items.length==0)return;
                if (vm.items[0].fFatherGuid == undefined) {
                    $scope.messages="没有上级部门！"
                    $('#deptAlertModal').modal({
                        keyboard: false,
                        backdrop: 'static'
                    });
                    return;
                }
                var data = {
                    "pageNo": 1,
                    "pageSize": $scope.itemsPerPage,
                    "fetchNum": 1,
                    "fFatherGuid": vm.items[0].fFatherGuid
                },
                    transFn = function (data) {
                        return $.param(data);
                    };
                $http.post("/CQMarketSupervise/getSuperiorDepartmentList.do?", data, {
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
                    },
                    transformRequest: transFn
                }).success(function (responseData) {
                    if (responseData.message != "未登录或登录超时") {
                        $scope.table_visible = true;
                        if (responseData.data.total > 0) {
                            var charPosition=[];//显示当前部门位置(退回上一级)
                            for(var i=0;i<$scope.currentPosition.length;i++){
                                if($scope.currentPosition[i]=="/"){
                                    charPosition.push(i);
                                }
                            }
                            $scope.currentPosition=$scope.currentPosition.slice(0,charPosition[charPosition.length-2]+1);
                            vm.items = responseData.data.rows;
                        } else {
                            $scope.messages="没有上级部门！"
                            $('#deptAlertModal').modal({
                                keyboard: false,
                                backdrop: 'static'
                            });
                            return;
                        }
                        if(responseData.data.rows[0].fIfLeaf==0){
                            $scope.topTotalItems = responseData.data.total;
                            $('#topPagetion').show();//防止多个分页控件同时出现
                            $('#searchPagetion').hide();
                            $('#sonPagetion').hide();
                        }
                        if(responseData.data.rows[0].fIfLeaf==1){
                            $scope.sonTotalItems = responseData.data.total;
                            $('#topPagetion').hide();//防止多个分页控件同时出现
                            $('#searchPagetion').hide();
                            $('#sonPagetion').show();                           
                        }
                    } else {
                        alert("用户未登陆或当前用户登陆超时，请重新登陆！", "提示");
                    }
                });
            }
            //初始化部门字段
            function init() {
                $scope.fatherDeptName = null;
                $scope.fatherDeptGUID = null;
                $scope.deptId = null;
                $scope.deptName = null;
                $scope.deptDuty = null;
                $scope.deptType = null;
                $scope.deptDesc = null;
                $scope.deptPhone = null;
                $scope.messages = "";
                $scope.showError = false;
                $scope.showSuccess = false;
            }

            //添加按钮
            $scope.addDept = function () {
                init();
                $scope.addOrModifyStatus = "add";
                $scope.modalShowName = "添加部门";
                $('#editDeptModal').modal({
                    keyboard: false,
                    backdrop: 'static'
                });
            }

            //编辑按钮
            $scope.editDept = function (index) {
                init();
                var data = {
                    "fGuid": vm.items[index]['fFatherGuid']
                },
                    transFn = function (data) {
                        return $.param(data);
                    };
                $http.post("/CQMarketSupervise/selectDepartmentByFGuid.do?", data, {
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
                    },
                    transformRequest: transFn
                }).success(function (responseData) {
                    if (responseData.message != "未登录或登录超时") {
                        if (responseData.data == null) return;
                        $scope.fatherDeptName = responseData.data.fDepartmentName;
                    } else {
                        alert("用户未登陆或当前用户登陆超时，请重新登陆！", "提示");
                    }
                });
                $scope.fatherDeptGUID = vm.items[index]['fFatherGuid'];
                $scope.deptId = vm.items[index]['id'];
                $scope.deptName = vm.items[index]['orgName'];
                $scope.deptDuty = vm.items[index]['fDepartmentDuty'];
                $scope.deptType = vm.items[index]['fDepartmentType'];
                $scope.deptDesc = vm.items[index]['fDepartmentDescription'];
                $scope.deptPhone = vm.items[index]['fDepartmentTellphone'];
                $scope.addOrModifyStatus = "modify";
                $scope.modalShowName = "修改部门信息";
                $('#editDeptModal').modal({
                    keyboard: false,
                    backdrop: 'static'
                });
            }

            //添加修改部门信息Modal框，保存按钮
            $scope.addOrModifyDeptSubmit = function () {
                var url = null;
                validate();
                if ($scope.showError) return; //显示错误消息时，证明表单验证不通过，因此不向服务器发送请求
                switch ($scope.addOrModifyStatus) {
                    case "add":
                        url = saveurl;
                        break;
                    case "modify":
                        url = updateurl;
                        break;
                    default:
                        break;
                }
                var data = {
                    "fFatherGuid": $scope.fatherDeptGUID,
                    "fDepartmentName": $scope.deptName,
                    "fDepartmentType": $scope.deptType,
                    "fDepartmentDuty": $scope.deptDuty,
                    "fDepartmentDescription": $scope.deptDesc,
                    "fDepartmentTellphone": $scope.deptPhone,
                    "fGuid": $scope.deptId
                },
                transFn = function (data) {
                    return $.param(data);
                };
                $http.post(url, data, {
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
                    },
                    transformRequest: transFn
                }).success(function (responseData) {
                    if (responseData.message != "未登录或登录超时") {
                        if (responseData.code == "20000") {
                            if ($scope.addOrModifyStatus === "add") {
                                init();
                            }
                            $scope.messages = "操作成功!";
                            // $scope.showSuccess = true;
                            $scope.loadDepts(1,"top");//------------------------------------------需要重新载入当前级别的部门信息
                            $('#editDeptModal').modal('hide');
                            $('#deptAlertModal').modal({
                                keyboard: false,
                                backdrop: 'static'
                            });
                        } else if (responseData.code == "20001") {
                            $scope.messages += "部门名称已存在! ";
                            $scope.showError = true;
                        } else {
                            alert(responseData.message, "提示");
                            // $('#editDeptModal').modal('hide');
                            $scope.loadDepts(1,"top")//------------------------------------------需要重新载入当前级别的部门信息
                        }
                    } else {
                        alert("用户未登陆或当前用户登陆超时，请重新登陆！", "提示");
                    }
                });
            }

            //点击父级部门，显示tree
            $scope.showFatherDept = function (titleName) {
                var data = {},
                    transFn = function (data) {
                        return $.param(data);
                    };
                $http.post("/CQMarketSupervise/selectDepartmentTreeList.do", data, {
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
                    },
                    transformRequest: transFn
                }).success(function (responseData) {
                    if (responseData.code == 20000) {
                        $scope.fatherDeptModalName = titleName;
                        $('#fatherDeptModal').modal({
                            keyboard: false,
                            backdrop: 'static'
                        });
                        $scope.tree_visible = true;
                        zNodes = responseData.data;
                        $.fn.zTree.init($("#diskTypeDistrictre"), setting, zNodes);
                        zTree = $.fn.zTree.getZTreeObj("diskTypeDistrictre");
                        var allNodes = zTree.transformToArray(zTree.getNodes());
                    } else {
                        alert("用户未登陆或当前用户登陆超时，请重新登陆！", '提示！');
                    }
                });
            }

            //父级部门tree选择完成，点击确定
            $scope.writeFatherDept = function () {
                var selectedNodes = zTree.getCheckedNodes(true);
                $('#fatherDeptModal').modal('hide');
                $scope.fatherDeptName = selectedNodes[0].fDepartmentName;
                $scope.fatherDeptGUID = selectedNodes[0].fGuid;
                if($scope.fatherDeptModalName=="请选择要移到的部门")
                {
                    optMembersToDept("remove",removeUserIds ,removeGuidBofore,selectedNodes[0].fGuid);
                }
            }

            //删除按钮
            $scope.delDept = function (index) {
                $('#delDeptModal').modal({
                    keyboard: false,
                    backdrop: 'static'
                });
                $scope.selectedItems = [];
                $scope.selectedDeptNames = [];
                $scope.selectedItems[0] = vm.items[index]['fGuid'];
                $scope.selectedDeptNames[0] = vm.items[index]['fDepartmentName'];
            }

            //批量删除按钮操作
            $scope.delSelected = function () {
                var selects = vm.selection();
                if (selects.length <= 0) {
                    return;
                };
                $('#delDeptModal').modal({
                    keyboard: false,
                    backdrop: 'static'
                });
                $scope.selectedItems = [];
                $scope.selectedDeptNames = [];
                angular.forEach(selects, function (item) {
                    $scope.selectedItems[$scope.selectedItems.length] = item['fGuid'];
                    $scope.selectedDeptNames[$scope.selectedDeptNames.length] = item['fDepartmentName'];
                });
            }
            //执行删除操作
            $scope.delDeptSubmit = function () {
                $('#delDeptModal').modal('hide');
                deleteDept($scope.selectedItems.join());
            }
            //删除部门
            function deleteDept(fGuid) {
                var data = {
                    "fGuids": fGuid
                },
                    transFn = function (data) {
                        return $.param(data);
                    };
                $http.post(deleteurl, data, {
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
                    },
                    transformRequest: transFn
                }).success(function (responseData) {
                    if (responseData.message != "未登录或登录超时") {
                        if (responseData.code == "20000") {
                            $scope.messages = "删除成功!";
                            $('#deptAlertModal').modal({
                                keyboard: false,
                                backdrop: 'static'
                            });
                            vm.allChecked = false;
                            $scope.loadDepts(1,"top")//----------需要重新载入当前级别的部门信息
                        } else {
                            alert(responseData.message);
                        }
                    } else {
                        alert("用户未登陆或当前用户登陆超时，请重新登陆！");
                    }

                });

            }
            //----------------部门用户管理----------部门用户管理----------部门用户管理---------部门用户管理----------
            $scope.inCurrentPage = 1;
            $scope.inTotalItems = null;
            $scope.inItemsPerPage = 5;
            //部门用户列表
            var vmIn = $scope.vmIn = {};
            vmIn.items = [];
            vmIn.checkAll = function (checked) {
                angular.forEach(vmIn.items, function (item) {
                    item.$checked = checked;
                });
            };
            vmIn.selection = function () {
                return _.where(vmIn.items, {
                    $checked: true
                });
            };
            $scope.exCurrentPage = 1;
            $scope.exTotalItems = null;
            $scope.exItemsPerPage = 5;
            //非部门未用户列表
            var vmEx = $scope.vmEx = {};
            vmEx.items = [];
            vmEx.checkAll = function (checked) {
                angular.forEach(vmEx.items, function (item) {
                    item.$checked = checked;
                });
            };
            vmEx.selection = function () {
                return _.where(vmEx.items, {
                    $checked: true
                });
            };

            //响应用户管理按钮
            $scope.membersEdit = function (index) {
                $scope.modalShowName = "用户管理";
                $('#optMembersModal').modal({
                    keyboard: false,
                    backdrop: 'static'
                });
                $scope.selectedDeptNames = [];
                $scope.selectedDeptGUIDs = [];
                $scope.selectedDeptNames[0] = vm.items[index]['fDepartmentName'];
                $scope.selectedDeptGUIDs[0] = vm.items[index]['fGuid'];
                $scope.loadMembersByDept('in', 1);
                $scope.loadMembersByDept('ex', 1);
            }
            //加载部门用户信息
            $scope.loadMembersByDept = function (type, page) {
                var urlChildDept;
                if (type === "in") {
                    $scope.table_in = false;
                    urlChildDept = "/CQMarketSupervise/selectDepartmentUsers.do?";
                } else if (type === "ex") {
                    $scope.table_ex = false;
                    urlChildDept = "/CQMarketSupervise/selectNotDepartmentUsers.do?";
                }
                var data = {
                    "fGuid": $scope.selectedDeptGUIDs[0],
                    "pageNo": page, //指定返回的是第几页
                    "pageSize": 5, //没有返回的记录条数
                    "fetchNum": 1
                },
                    transFn = function (data) {
                        return $.param(data);
                    };
                $http.post(urlChildDept, data, {
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
                    },
                    transformRequest: transFn
                }).success(function (responseData) {
                    if (responseData.message != "未登录或登录超时") {
                        if (type === "in") {
                            $scope.table_in = true;
                            $scope.inCurrentPage = page;
                            vmIn.items = responseData.data.rows;
                            $scope.inTotalItems = responseData.data.total;
                        } else if (type === "ex") {
                            $scope.table_ex = true;
                            $scope.exCurrentPage = page;
                            vmEx.items = responseData.data.rows;
                            $scope.exTotalItems = responseData.data.total;
                        }
                    } else {
                        alert("用户未登陆或当前用户登陆超时，请重新登陆！");
                    }
                });
            }
            //添加移除部门员工事件
            $scope.optMembers = function (opt) {
                if (opt === "add") {
                    var exSelects = vmEx.selection();
                    if (exSelects.length <= 0) {
                        return;
                    };
                    $scope.exSelectedItems = [];
                    $scope.exGuids1 = [];
                    angular.forEach(exSelects, function (item) {
                        $scope.exSelectedItems[$scope.exSelectedItems.length] = item['fUserGuid'];
                        $scope.exGuids1[$scope.exGuids1.length] = item['fDepartmentGuid'];
                    });
                    optMembersToDept(opt, $scope.exSelectedItems.join(),$scope.exGuids1.join(),$scope.selectedDeptGUIDs[0]);
                } else if (opt === "remove") {
                    var inSelects = vmIn.selection();
                    if (inSelects.length <= 0) {
                        return;
                    };
                    $scope.inSelectedItems = [];                   
                    angular.forEach(inSelects, function (item) {
                        $scope.inSelectedItems[$scope.inSelectedItems.length] = item['fUserGuid'];
                    });
                    $scope.showFatherDept("请选择要移到的部门");
                    removeUserIds=$scope.inSelectedItems.join();
                    removeGuidBofore=$scope.selectedDeptGUIDs[0];
                }
            }
            //移动员工（添加和移出部门）
            function optMembersToDept(opt, userids,beforeGuids,afterGuids) {
                if (opt == "add") {
                    var data = {
                        "opt":"add",
                        "fUserGuids": userids,
                        "fDepartmentGuidBefores": beforeGuids,
                        "fDepartmentGuidAfter": afterGuids
                    },
                        transFn = function (data) {
                            return $.param(data);
                        };
                    $http.post("/CQMarketSupervise/insertDepartmentUser.do?", data, {
                        headers: {
                            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
                        },
                        transformRequest: transFn
                    }).success(function (responseData) {
                        if (responseData.message != "未登录或登录超时") {
                            if (responseData.code == "20000") {
                                //重新加载
                                $scope.loadMembersByDept('in', 1);
                                $scope.loadMembersByDept('ex', 1);
                            } else {
                                alert(responseData.message);
                            }
                        } else {
                            alert("用户未登陆或当前用户登陆超时，请重新登陆！");
                        }
                    });
                }else if (opt == "remove") {
                    var data = {
                        "opt":"remove",
                        "fUserGuids": userids,
                        "fDepartmentGuidBefores": beforeGuids,
                        "fDepartmentGuidAfter": afterGuids
                    },
                        transFn = function (data) {
                            return $.param(data);
                        };
                    $http.post("/CQMarketSupervise/insertDepartmentUser.do?", data, {
                        headers: {
                            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
                        },
                        transformRequest: transFn
                    }).success(function (responseData) {
                        if (responseData.message != "未登录或登录超时") {
                            if (responseData.code == "20000") {
                                //重新加载
                                $scope.loadMembersByDept('in', 1);
                                $scope.loadMembersByDept('ex', 1);
                            } else {
                                alert(responseData.message);
                            }
                        } else {
                            alert("用户未登陆或当前用户登陆超时，请重新登陆！");
                        }
                    });
                }
            }
            //Ztree选择节点文字，选中节点
            function zTreeOnClick(event, treeId, treeNode) {
                if(treeNode.checked==true){
                    try{zTree.checkNode(treeNode, false, true);}catch(ex){}
                }else{                  
                    try{zTree.checkNode(treeNode, true, true);}catch(ex){}
                }
            };
            //前端验证信息填写完整状态
            var validate = function () {
                $scope.messages = "";
                $scope.showError = false;
                $scope.showSuccess = false;
                // if ($scope.fatherDeptName === null || $scope.fatherDeptName === '') {
                //     $scope.messages += "上级部门不能为空! ";
                //     $scope.showError = true;
                //     return;
                // }
                if ($scope.deptName === null || $scope.deptName === '') {
                    $scope.messages += "部门名称不能为空! ";
                    $scope.showError = true;
                    return;
                }
                if ($scope.deptDuty === null || $scope.deptDuty === '') {
                    $scope.messages += "职责不能为空! ";
                    $scope.showError = true;
                    return;
                }
                if ($scope.deptType === null) {
                    $scope.messages += "请选择类型! ";
                    $scope.showError = true;
                    return;
                }

                var telPatrn = /^1[3|4|5|7|8][0-9]\d{8}$/;
                var officeTelPatrn = /^\d{8}$/;
                if ($scope.deptPhone == null || $scope.deptPhone == "") 
                {
                    $scope.messages += "部门电话不能为空! ";
                    $scope.showError = true;
                    return;
                }else if(!telPatrn.exec($scope.deptPhone) && !officeTelPatrn.exec($scope.deptPhone))
                {
                    $scope.messages += "部门电话格式不正确! ";
                    $scope.showError = true;
                    return;                    
                }
            }
            //获取父级部门GUID
            var getFatherGUID=function(guid){
            // function getFatherGUID(guid) {
                var data = {
                    "fGuid": guid
                },
                transFn = function (data) {
                    return $.param(data);
                };
                $http.post("/CQMarketSupervise/selectDepartmentByFGuid.do?", data, {
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
                    },
                    transformRequest: transFn
                }).success(function (responseData) {
                    if (responseData.message != "未登录或登录超时") {
                        return responseData.data.fFatherGuid;
                    } else {
                        alert("用户未登陆或当前用户登陆超时，请重新登陆！");
                        return;
                    }
                });
            }
            // //权限控制
            // var systemPermission = false;
            // if ($cookies.permission != "" && $cookies.permission != undefined) {
            //     var permission = $cookies.permission.split(",");
            //     for (var i = 0; i < permission.length; i++) {
            //         if (permission[i].split("")[0] != 4) {
            //             $scope.visible = false;
            //         } else {
            //             systemPermission = true;
            //             break;
            //         }

            //     }
            //     if (systemPermission) {
            //         $scope.visible = false;
            //         var permissionThis = [];
            //         for (var i = 0; i < permission.length; i++) {
            //             if (permission[i].split("")[0] == 4) {
            //                 permissionThis.push(permission[i]);
            //             }
            //         }
            //         var maxCode = "";
            //         for (var i = 0; i < permissionThis.length; i++) {
            //             if (permissionThis[i] > maxCode) {
            //                 maxCode = permissionThis[i];
            //             }
            //         }
            //         if (maxCode == "400003") {
            //             $scope.visible = true;
            //             $scope.table_visible = false;
            //             //加载第1页
            //             $scope.loadDepts(1,"top");
            //         }
            //     }

            // }

        }

        function init(App) {
            App.controller('deptManagerController', ['$scope', '$http', '$q', '$cookies', 'deptManagerService', deptManagerController]);
            return deptManagerController;
        }

        return {
            start: init
        };

    });

}).call(this);