/**
 * @唐爽
 */
/*角色管理  2015-1-23*/
(function() {
    "use strict";

    define([
        'dojo/_base/array',
        'helpers/symbolhelper'
    ], function(array, sym) {



        function roleManagerController($scope, $http, $q, roleManagerService) {

            var inputs = document.getElementsByTagName("input");

            roleManagerService.setController($scope);
            $scope.currentPage = 1;
            $scope.totalItems = null;
            $scope.itemsPerPage = 12;
            $scope.visible = false;
            $scope.table_visible = false;
            $scope.messages = '';
            $scope.showError = false;
            $scope.subjectName = "";
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
            //搜索
            $scope.searchSubject = function() {
                $scope.loadRoles(1, "search");
            }

            $scope.$bus.subscribe({
                channel: 'leftMenu',
                topic: 'leftMenu.onActive',
                callback: function(data, envelope) {
                    var name = data.name;
                    if (name === 'roleManager') {
                        $scope.visible = true;
                        $scope.table_visible = false;
                        //加载第1页
                        $scope.loadRoles(1, "all");
                        // getSystems($http,$q);

                        for (var i = 0; i < inputs.length; i++) {
                            if (inputs[i].id === 'search_r' || inputs[i].id === 'roleName' || inputs[i].id === 'roleCode') {
                                inputs[i].disabled = false;
                            }
                        }
                    } else {
                        $scope.visible = false;
                    }
                }
            });

            //加载人员信息，分页返回结果列表
            $scope.loadRoles = function(page, showDeptType) {
                var urlPage;
                if (showDeptType == "all") {
                    urlPage = "/cqsybackstagemanager/RoleController/selectAllRole.do?";
                }
                if (showDeptType == "search") {
                    urlPage = "/CQMarketSupervise/selectRoleByCondition.do?";
                }
                $scope.table_visible = false;
                $scope.currentPage = page;
                var data = {
                    "keyWord": $scope.subjectName,
                    "pageNo": page, //指定返回的是第几页
                    "pageSize": $scope.itemsPerPage, //没有返回的记录条数
                    "fetchNum": 1,
                    "condition": $scope.subjectName
                },
                    transFn = function(data) {
                        return $.param(data);
                    };
                $http.post(urlPage, data, {
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
                    },
                    transformRequest: transFn
                }).success(function(responseData) {
                    if (responseData.message != "未登录或登录超时") {
                        $scope.table_visible = true;
                        vm.items = responseData.data.rows;
                        $scope.totalItems = responseData.total;
                    } else {
                        alert("用户未登陆或当前用户登陆超时，请重新登陆！");
                    }
                });
            }
            //查看所选系统下的角色
            $('#roleSysName').change(function() {
                if ($('#roleSysName').val() == "") {
                    $scope.loadRoles(1, "all")
                } else {
                    var data = {
                        "pageNo": 1,
                        "pageSize": 10,
                        "fetchNum": 1,
                        "fSystemId": $('#roleSysName').val()
                    },
                        transFn = function(data) {
                            return $.param(data)
                        };
                    $http.post("/CQMarketSupervise/selectRolesByFSystemId.do?", data, {
                        headers: {
                            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
                        },
                        transformRequest: transFn
                    }).success(function(responseData) {
                        if (responseData.message != "未登录或登录超时") {
                            $scope.table_visible = true;
                            vm.items = responseData.data.rows;
                            $scope.totalItems = responseData.total;
                        } else {
                            alert("用户未登陆或当前用户登陆超时，请重新登陆！");
                        }
                    });
                }
            })

            function init() {
                $scope.roleId = null;
                $scope.roleName = null;
                $scope.sys = null;
                $scope.roleDesc = null;
                $scope.messages = "";
                $scope.showError = false;
                $scope.showSuccess = false;
                $scope.roleCode = null;
            }
            //获取现有多少系统，填充所属系统select【目前只有两个】
            // var getSystemsUrl = "/LJMarketSupervise/getSystems.do?";
            // function  getSystems(http, q) {
            //     var delay = q.defer();
            //     http.get(getSystemsUrl, {
            //         header: {
            //             'Content-Type': 'application/json; charset=UTF-8'
            //         }
            //     }).success(function(response, status, headers, config) {
            //         delay.resolve(response);
            //     }).error(function(error, status, headers, config) {
            //         delay.reject(error);
            //     });
            //     delay.promise.then(function(ConfigObj) {
            //      $scope.syss = ConfigObj;
            //     });
            // }
            //响应添加按钮
            $scope.addRole = function() {
                //初始化字段
                init();
                $scope.addOrModifyStatus = "add";
                $scope.modalShowName = "添加角色";
                $scope.selectDisabled = false;
                $('#editRoleModal').modal({
                    keyboard: false,
                    backdrop: 'static'
                });
            }
            //响应编辑按钮
            $scope.editRole = function(index) {
                //初始化字段
                init();
                $scope.roleId = vm.items[index]['fGuid'];
                $scope.roleName = vm.items[index]['fRoleName'];
                $scope.roleCode = vm.items[index]['fRoleNumber'];
                $scope.roleState = vm.items[index]['fState'];
                $scope.roleType = vm.items[index]['fRoleType'];
                $scope.sysName = vm.items[index]['fSystemName'];
                $scope.roleDesc = vm.items[index]['fRoleDescription'];
                $scope.addOrModifyStatus = "modify";
                $scope.selectDisabled = true;
                $scope.modalShowName = "修改角色信息";
                $('#editRoleModal').modal({
                    keyboard: false,
                    backdrop: 'static'
                });
            }

            var saveurl = "/CQMarketSupervise/insertOneRole.do?";
            var updateurl = "/CQMarketSupervise/updateOneRole.do?";
            var url = null;
            $scope.addOrModifyStatus = null;
            //角色基本信息模块框，响应保存按钮
            $scope.addOrModifyRoleSubmit = function() {
                validate(); //前端验证
                //显示错误消息时，证明表单验证不通过，因此不向服务器发送请求
                if ($scope.showError) return;
                switch ($scope.addOrModifyStatus) {
                    case "add":
                        url = saveurl;
                        break;
                    case "modify":
                        url = updateurl;
                        break;
                }
                var data = {
                    "fGuid": $scope.roleId,
                    "fRoleName": $scope.roleName,
                    "fRoleNumber": $scope.roleCode,
                    "fRoleDescription": $scope.roleDesc,
                    "fSystemName": $scope.sysName,
                    "fSystemId": $('#sysName').val(),
                    "fState": $scope.roleState,
                    "fRoleType": $scope.roleType
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
                        if (responseData.code == "20000") {
                            if ($scope.addOrModifyStatus === "add") {
                                init(); //初始化字段
                            }
                            // $scope.messages = "操作成功!";
                            // $scope.showSuccess = true;
                            $('#editRoleModal').modal('hide');
                            $scope.messages = "操作成功!";
                            $('#roleAlertModal').modal({
                                keyboard: false,
                                backdrop: 'static'
                            });
                            $scope.loadRoles(1, "all"); //重新加载----------------当前级别------------
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
            $scope.delRole = function(index) {
                $('#delRoleModal').modal({
                    keyboard: false,
                    backdrop: 'static'
                });
                $scope.selectedRoleIds = [];
                $scope.selectedRoleNames = [];
                $scope.selectedRoleIds[0] = vm.items[index]['fGuid'];
                $scope.selectedRoleNames[0] = vm.items[index]['fRoleName'];
            }

            //批量删除按钮操作，显示删除提示
            $scope.delSelected = function() {
                var selects = vm.selection();
                if (selects.length <= 0) {
                    return;
                };
                $('#delRoleModal').modal({
                    keyboard: false,
                    backdrop: 'static'
                });
                $scope.selectedRoleIds = [];
                $scope.selectedRoleNames = [];
                angular.forEach(selects, function(item) {
                    $scope.selectedRoleIds[$scope.selectedRoleIds.length] = item['fGuid'];
                    $scope.selectedRoleNames[$scope.selectedRoleNames.length] = item['fRoleName'];
                });
            }

            //执行删除操作
            $scope.delRoleSubmit = function() {
                $('#delRoleModal').modal('hide');
                var deleteurl;
                if ($scope.selectedRoleIds.length <= 1) {
                    deleteurl = "/CQMarketSupervise/deleteRoleByFGuid.do?";
                }
                if ($scope.selectedRoleIds.length > 1) {
                    deleteurl = "/CQMarketSupervise/deleteRoleByFGuids.do?";
                }
                var data = {
                    "fGuid": $scope.selectedRoleIds.join(),
                    "fGuids": $scope.selectedRoleIds.join()
                },
                    transFn = function(data) {
                        return $.param(data);
                    };
                $http.post(deleteurl, data, {
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
                    },
                    transformRequest: transFn
                }).success(function(responseData) {
                    if (responseData.message != "未登录或登录超时") {
                        if (responseData.code == "20000") {
                            $scope.messages = "删除成功!";
                            $('#roleAlertModal').modal({
                                keyboard: false,
                                backdrop: 'static'
                            });
                            //重新加载
                            $scope.loadRoles(1, "all");
                            vm.allChecked = false;
                        } else {
                            alert(responseData.message);
                        }
                    } else {
                        alert("用户未登陆或当前用户登陆超时，请重新登陆！");
                    }
                });

            }
            //-----------------------角色资源分配管理----------------------角色资源分配管理-------------------角色资源分配管理-----------------------
            var roleRightIds = []; //角色已有资源
            var treeObj = null;
            var rightNodes = []; //所有资源列表
            var setting = {
                check: {
                    enable: true,
                    chkStyle: "checkbox",
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

            //响应资源分配按钮
            $scope.rightsEdit = function(index) {
                $scope.tree_visible = false;
                $scope.modalShowName = "角色资源分配";
                $('#optRightsModal').modal({
                    keyboard: false,
                    backdrop: 'static'
                });
                $scope.roleId = vm.items[index]['id'];
                loadRoleRights(); //加载角色资源
            }

            //加载角色资源
            function loadRoleRights() {
                var data = {
                    "pageNo":1,
                    "pageSize":9999,
                    "fetchNum":9999,
                    "fGuid":$scope.roleId,
                },
                    transFn = function(data) {
                        return $.param(data);
                    };
                $http.post("/cqsybackstagemanager/RoleController/getResourceByRole.do?", data, {
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
                    },
                    transformRequest: transFn
                }).success(function(userRoleData) {
                    if (userRoleData.message != "未登录或登录超时") {
                        userRoleData=userRoleData.data.rows;//~.data.rows是数组
                        roleRightIds = [];
                        for (var i = 0; i < userRoleData.length; i++) {
                            if (userRoleData[i].fResourceFatherGuid !== null && userRoleData[i].fResourceFatherGuid !== "") {
                                var roleid = userRoleData[i].fGuid;
                                roleRightIds[roleRightIds.length] = roleid;
                            }
                        }
                       loadRightTree(); //加载所有角色列表
                    } else {
                        alert("用户未登陆或当前用户登陆超时，请重新登陆！");
                    }
                }).error(function() {
                    console.log("请求地址URL未找到！");
                    loadRightTree(); //加载所有角色列表
                });
            }

            //加载所有资源
            function loadRightTree() {
                var data = {
                    "pageNo": 1,
                    "pageSize": 9999,
                    "fetchNum": 9999
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
                        rightNodes = result.data.rows
                        for (var i = 0; i < rightNodes.length; i++) {
                            if ($.inArray(rightNodes[i].fGuid, roleRightIds) >= 0) {
                                rightNodes[i].checked = true;
                                rightNodes[i].open = true;
                            }
                        }
                        treeObj = $.fn.zTree.init($("#rightTree"), setting,rightNodes);
                        $scope.tree_visible = true;
                    } else {
                        alert(result.message);
                    }
                });
            }

            //保存角色资源
            $scope.saveRoleRights = function() {
                var changeNodes = treeObj.getChangeCheckedNodes();
                //有改变
                if (changeNodes.length > 0) {
                    var nodes = treeObj.getCheckedNodes(true);
                    var checkedRightIds = [];
                    for (var i = 0; i < nodes.length; i++) {
                        // if (nodes[i].fResourceFatherGuid != null) {
                            checkedRightIds[checkedRightIds.length] = nodes[i].fGuid;
                        // }
                    }
                    optRightsToRole(checkedRightIds.join());
                }

            }
            //向指定角色分配或移除资源
            function optRightsToRole(rightids) {
                var data = {
                    "resourceIds": rightids,
                    "fRoleGuid": $scope.roleId
                },
                    transFn = function(data) {
                        return $.param(data);
                    };
                $http.post("/cqsybackstagemanager/RoleController/addResourceToRole.do?", data, {
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
                    },
                    transformRequest: transFn
                }).success(function(responseData) {
                    if (responseData.message != "未登录或登录超时") {
                        if (responseData.code == "20000") {
                            $scope.messages = "修改成功!";
                            $('#optRightsModal').modal('hide');
                            $('#roleAlertModal').modal({
                                keyboard: false,
                                backdrop: 'static'
                            });
                        } else {
                            alert(responseData.message);
                        }
                    } else {
                        alert("用户未登陆或当前用户登陆超时，请重新登陆！");
                    }
                });
            }
            //Ztree选择节点文字，选中节点
            function zTreeOnClick(event, treeId, treeNode) {
                if(treeNode.checked==true){
                    try{treeObj.checkNode(treeNode, false, true);}catch(ex){}
                }else{                  
                    try{treeObj.checkNode(treeNode, true, true);}catch(ex){}
                }
            };
            //验证
            var validate = function() {
                $scope.messages = "";
                $scope.showError = false;
                $scope.showSuccess = false;
                if ($scope.roleName === null || $scope.roleName === '') {
                    $scope.messages += "姓名不能为空! ";
                    $scope.showError = true;
                }
                if ($scope.sysName === null || $scope.sysName === '') {
                    $scope.messages += "请选择所属系统! ";
                    $scope.showError = true;
                }

                var roleCodePattern = /^\d{2}$/;
                if (!roleCodePattern.exec($scope.roleCode)) {
                    $scope.messages += "角色编号只能为6位纯数字 ！";
                    $scope.showError = true;
                }
            }
        }

        function init(App) {
            App.controller('roleManagerController', ['$scope', '$http', '$q', 'roleManagerService', roleManagerController]);
            return roleManagerController;
        }

        return {
            start: init
        };

    });

}).call(this);