/**
 * @唐爽
 */
/* 用户管理 2015-1-13 */
(function() {
	"use strict";
	define(
		['dojo/_base/array', 'helpers/symbolhelper'],
		function(array, sym) {

			function memberManagerController($scope, $http, $q, memberManagerService) {

				var inputs = document.getElementsByTagName("input");

				memberManagerService.setController($scope);
				$scope.currentPage = 1;

				$scope.topTotalItems = 0;
				$scope.searchTotalItems = 0;
				$scope.sonTotalItems = 0;

				$scope.itemsPerPage = 10;
				$scope.visible = false;
				$scope.messages = '';
				$scope.showError = false;
				$scope.table_visible = false;
				$scope.tempPsw = "******";
				var vm = $scope.vm = {};
				vm.items = [];
				$scope.deptNames = [];

				var fatherDeptTree;
				var fatherDeptNodes;
				$scope.deptGUID = "";
				var deptSetting = {
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
						if (name === 'memberManager') {
							getTypeConfigs($http, $q); //加载配置文件
							$scope.visible = true;
							$scope.table_visible = false;
							if ($scope.mmDeptGUID == "" || $scope.mmDeptGUID == undefined || $scope.mmDeptGUID == null) {
								$scope.loadMembers(1, "current"); // 加载第1页
							} else {
								$scope.showUserByDept(1);
							}
							for (var i = 0; i < inputs.length; i++) {
								if (inputs[i].id === 'search_m' || inputs[i].id === 'realName' || inputs[i].id === 'memberName' || inputs[i].id === 'memberAge' || inputs[i].id === 'memberPassword' || inputs[i].id === 'againPassword' || inputs[i].id === 'memberTel' || inputs[i].id === 'memberDuty' || inputs[i].id === 'memberOfficeTel') {
									inputs[i].disabled = false;
								}
							}
						} else {
							$scope.visible = false;
						}
					}
				});

				//快速查找
				$scope.searchSubject = function() {
					$scope.loadMembers(1, "search");
					$scope.mmDeptName = "";
				}

				// 加载用户信息，分页返回结果列表
				$scope.loadMembers = function(page, showDeptType) {
					var urlPage;
					vm.items = null;
					if (showDeptType == "top") //?????
					{
						$("#topPagetion_mm").show();
						$("#searchPagetion_mm").hide();
						$("#sonPagetion_mm").hide();
					}
					if (showDeptType == "search" || showDeptType == "current") {
						if ($scope.subjectName == null || $scope.subjectName == "" || $scope.subjectName == undefined) {
							//查询框为空，则显示顶级部门
							urlPage = "/cqsybackstagemanager/SysUserController/getUserRole.do?";
							$("#topPagetion_mm").show();
							$("#searchPagetion_mm").hide();
							$("#sonPagetion_mm").hide();
						} else {
							urlPage = "/CQMarketSupervise/getUsersByCondition.do?";
							$("#topPagetion_mm").hide();
							$("#searchPagetion_mm").show();
							$("#sonPagetion_mm").hide();
						}
					}
					$scope.searchCurrentPage = page;
					$scope.topCurrentPage = page;
					$scope.table_visible = false;
					var data = {
							"pageNo": page, // 指定返回的是第几页
							"pageSize": 10, // 没有返回的记录条数
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
							if (responseData.data.total > 0) {
								vm.items = responseData.data.rows;
								if (showDeptType == "top") {
									$scope.topTotalItems = responseData.data.total;
								}
								if (showDeptType == "search") {
									$scope.searchTotalItems = responseData.data.total;
								}
							} else {
								$scope.messages = "没有数据!";
								$('#memberAlertModal').modal({
									keyboard: false,
									backdrop: 'static'
								});
							}
						} else {
							alert("用户未登陆或当前用户登陆超时，请重新登陆！");
						}
					});
				}

				//选择要查看的部门，显示该部门下的用户
				$scope.showUserByDept = function(page) {
						$("#topPagetion_mm").hide();
						$("#searchPagetion_mm").hide();
						$("#sonPagetion_mm").show();
						$scope.table_visible = false;
						$scope.currentPage = page;
						var data = {
								"pageNo": page, // 指定返回的是第几页
								"pageSize": $scope.itemsPerPage, // 没有返回的记录条数
								"fetchNum": 1,
								"fGovernOrg": $scope.fGovernOrg,
								"fStation": $scope.fStation
							},
							transFn = function(data) {
								return $.param(data);
							};
						$http.post("/CQMarketSupervise/selectUsersByDepartmentGuid.do?", data, {
							headers: {
								'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
							},
							transformRequest: transFn
						}).success(function(responseData) {
							if (responseData.message != "未登录或登录超时") {
								$scope.table_visible = true;
								vm.items = responseData.data.rows;
								$scope.sonTotalItems = responseData.data.total;
							} else {
								alert("用户未登陆或当前用户登陆超时，请重新登陆！");
							}
						});
					}
					//初始化
				function init() {
						$scope.memberId = null;
						$scope.realName = null;
						$scope.memberName = null;
						$scope.memberAge = 18;
						$scope.memberGender = 1;
						$scope.memberPassword = null;
						$scope.againPassword = null;
						$scope.deptName = null;
						$scope.memberTel = null;
						$scope.memberDuty = null;
						$scope.memberDesc = null;
						$scope.memberOfficeTel = null;
						$scope.messages = "";
						$scope.showError = false;
						$scope.showSuccess = false;
					}
					//添加用户按钮
				$scope.addMember = function() {
						// 初始化字段
						init();
						$scope.addOrModifyStatus = "add";
						$scope.modalShowName = "添加用户";
						$('#editMemberModal').modal({
							keyboard: false,
							backdrop: 'static'
						});

					}
					//点击父级部门，显示tree
				$scope.showDept = function(titleName) {
						var data = {},
							transFn = function(data) {
								return $.param(data);
							};
						$http.post("/CQMarketSupervise/selectDepartmentTreeList.do", data, {
							headers: {
								'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
							},
							transformRequest: transFn
						}).success(function(responseData) {
							if (responseData.code == 20000) {
								$scope.deptModalName = titleName;
								$('#fatherDeptModal2').modal({
									keyboard: false,
									backdrop: 'static'
								});
								fatherDeptNodes = responseData.data;
								$.fn.zTree.init($("#diskTypeDistrictre2"), deptSetting, fatherDeptNodes);
								fatherDeptTree = $.fn.zTree.getZTreeObj("diskTypeDistrictre2");
							} else {
								alert("用户未登陆或当前用户登陆超时，请重新登陆！", '提示！');
							}
						});
					}
					//父级部门tree选择完成，点击确定
				$scope.writeDept = function() {
						var selectedNodes = fatherDeptTree.getCheckedNodes(true);
						$('#fatherDeptModal2').modal('hide');
						if ($scope.deptModalName == "选择上级部门") {
							$scope.deptName = selectedNodes[0].fDepartmentName;
							$scope.deptGUID = selectedNodes[0].fGuid;
						}
						if ($scope.deptModalName == "请选择要查看的部门") {
							$scope.mmDeptName = selectedNodes[0].fDepartmentName;
							$scope.mmDeptGUID = selectedNodes[0].fGuid;

							if (selectedNodes[0].level == 2) {
								//所
								$scope.fGovernOrg = selectedNodes[0].getParentNode().fDepartmentName;
								$scope.fStation = selectedNodes[0].fDepartmentName;
								$scope.showUserByDept(1);
							}
							if (selectedNodes[0].level == 1) {
								//局
								$scope.fGovernOrg = selectedNodes[0].fDepartmentName;
								$scope.showUserByDept(1);
							}
							if (selectedNodes[0].level == 0) {
								//顶级，调用另一个接口
								$scope.loadMembers(1, "current");
							}
							$scope.subjectName = ""; //清空“选择部门查看角色”输入框
						}
					}
				// 响应编辑按钮
				$scope.editMember = function(index) {
					// 初始化字段
					init();
					$scope.memberId = vm.items[index]['fUserId'];
					$scope.memberName = vm.items[index]['fUserName'];
					$scope.realName = vm.items[index]['fRealName'];
					$scope.memberPassword = "******";
					$scope.againPassword = "******";
					$scope.orginPsw = vm.items[index]['fPassword'];
					$scope.memberAge = parseInt(vm.items[index]['fAge']);
					$scope.memberGender = 0;
					if (vm.items[index]['fGender'] === "男") {
						$scope.memberGender = 1;
					}
					$scope.deptName = vm.items[index]['fDepartmentName'];
					$scope.deptGUID = vm.items[index]['fDepartmentGuid'];
					$scope.memberOfficeTel = vm.items[index]['fOfficeTel'];
					$scope.memberTel = vm.items[index]['fTelephone'];
					$scope.memberDuty = vm.items[index]['fDuty'];
					$scope.memberDesc = vm.items[index]['fDesc'];

					$scope.addOrModifyStatus = "modify";
					$scope.modalShowName = "修改用户信息";
					$('#editMemberModal').modal({
						keyboard: false,
						backdrop: 'static'
					});
				}

				// 用户信息模块框，响应保存按钮					
				$scope.addOrModifyStatus = null;
				$scope.addOrModifyMemberSubmit = function() {
					var url = null
					validate(); // 前端验证
					if ($scope.showError)
						return; // 显示错误消息时，证明表单验证不通过，因此不向服务器发送请求
					switch ($scope.addOrModifyStatus) {
						case "add":
							url = "/CQMarketSupervise/addUser.do?";
							break;
						case "modify":
							url = "/CQMarketSupervise/updateUser.do?";
							break;
					}
					var data = {
							"fUserName": $scope.memberName,
							"fPassword": $scope.orginPsw,
							"fRealName": $scope.realName,
							"fAge": $scope.memberAge,
							"fGender": $scope.memberGender,
							"fDepartmentGuid": $scope.deptGUID,
							"fTelephone": $scope.memberTel,
							"fDuty": $scope.memberDuty,
							"fDesc": $scope.memberDesc,
							"fOfficeTel": $scope.memberOfficeTel,
							"fGovernOrg": $scope.mdistrictg.name,
							"fStation": $scope.mdistrict.name,
							"fUserGuid": $scope.memberId
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
						if (responseData.code == "20000") {
							if ($scope.addOrModifyStatus === "add") {
								init();
							}
							// $scope.messages = "操作成功!";
							// $scope.showSuccess = true;
							$('#editMemberModal').modal('hide');
							$scope.messages = "操作成功!";
							$('#memberAlertModal').modal({
								keyboard: false,
								backdrop: 'static'
							});
							$scope.loadMembers(1, "current"); // 重新加载
						} else if (responseData.code == "20001") {
							$scope.messages += "用户名称已存在! ";
							$scope.showError = true;
						} else {
							$scope.messages = responseData.message;
							$('#memberAlertModal').modal({
								keyboard: true,
								backdrop: 'static'
							});
						}
					});
				}

				//删除、恢复用户（失效/恢复）
				$scope.disableUser = function(index) {
						$scope.message = "是否将用户【" + vm.items[index]['fUserName'] + "】" + (vm.items[index]['fUserStatus'] == 1 ? '设置为失效' : '恢复使用');
						$("#diableMemberModal").modal({
							keyboard: false,
							backdrop: 'static'
						});
						$scope.selectedItems = [];
						$scope.selectedItems[0] = vm.items[index]['fUserId'];
					}
					//批量将用户置为失效/恢复使用
				$scope.batDisableUser = function() {

						var selects = vm.selection();
						if (selects.length <= 0) {
							return;
						}

						$('#diableMemberModal').modal({
							keyboard: false,
							backdrop: 'static'
						});

						$scope.selectedItems = [];
						$scope.selectedDisbleNames = [];
						$scope.selectedEnableNames = [];
						angular.forEach(
							selects,
							function(item) {
								$scope.selectedItems[$scope.selectedItems.length] = item['fUserId'];
								if (item['fUserStatus'] == 1) {
									$scope.selectedDisbleNames[$scope.selectedDisbleNames.length] = item['fUserName'];
								} else {
									$scope.selectedEnableNames[$scope.selectedEnableNames.length] = item['fUserName'];
								}

							});
						if ($scope.selectedDisbleNames.length > 0) {
							$scope.message = "是否将用户【" + $scope.selectedDisbleNames.join() + "】设置为失效";
							if ($scope.selectedEnableNames.length > 0) {
								$scope.message += "是否将用户【" + $scope.selectedEnableNames.join() + "】恢复使用";
							}
						} else {
							$scope.message = "是否将用户【" + $scope.selectedEnableNames.join() + "】恢复使用";
						}
					}
					//执行删除/恢复用户
				$scope.disableMemberSubmit = function() {
					$('#diableMemberModal').modal('hide');

					var data = {
							"fUserId": $scope.selectedItems.join()
						},
						transFn = function(data) {
							return $.param(data);
						};
					$http.post("/CQMarketSupervise/deleteUser.do?", data, {
						headers: {
							'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
						},
						transformRequest: transFn
					}).success(function(responseData) {
						if (responseData.message != "未登录或登录超时") {
							if (responseData.code == "20000") {
								// 重新加载
								if ($scope.mmDeptName == "" || $scope.mmDeptName == "" || $scope.mmDeptName == undefined) { //选择部门查看用户的输入框没有内容，显示
									$scope.loadMembers(1, "current");
								} else { //选择部门查看用户的输入框有内容，显示当前部门下的用户
									$scope.showUserByDept(1);
								}
								$scope.messages = "设置成功!";
								$('#memberAlertModal').modal({
									keyboard: false,
									backdrop: 'static'
								});
								vm.allChecked = false;
							} else {
								alert(responseData.message);
							}
						} else {
							alert("用户未登陆或当前用户登陆超时，请重新登陆！");
						}
					});

				}

				// ------------------用户角色分配管理------------------用户角色分配管理----------------用户角色分配管理---------------
				var userRoleIds = []; // 用户已有角色		            
				var roleTree = "";
				var roleNodes = []; // 所有角色列表
				var roleTreeSetting = {
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
							// idKey: "fGuid",
							// pIdKey: "fSystemId"
						},
						key: {
							name: "fRoleName"
						}
					},
					callback: {
						onClick: zTreeOnClick
					}
				};

				// 响应角色分配按钮
				$scope.rolesEdit = function(index) {
					$scope.tree_visible = false;
					$scope.modalShowName = "用户角色分配";
					$('#optRolesModal').modal({
						keyboard: false,
						backdrop: 'static'
					});
					$scope.memberId = vm.items[index]['fUserId'];
					loadUserRole();
				}

				function loadUserRole() {
					var data = {
							"pageNo": 1,
							"pageSize": 99999,
							"fetchNum": 9999,
							"fUserGuid": $scope.memberId
						},
						transFn = function(data) {
							return $.param(data);
						};
					$http.post("/CQMarketSupervise/getRoleByUser.do?", data, {
						headers: {
							'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
						},
						transformRequest: transFn
					}).success(function(userRoleData) {
						if (userRoleData.message != "未登录或登录超时") {
							userRoleIds = [];
							for (var i = 0; i < userRoleData.data.rows.length; i++) {
								userRoleIds[userRoleIds.length] = userRoleData.data.rows[i].fGuid;
							}
							loadRolesList(); // 加载所有角色列表
						} else {
							alert("用户未登陆或当前用户登陆超时，请重新登陆！");
						}
					});
				}

				// 加载所有角色列表
				function loadRolesList() {
					var data = {
							"pageNo": 1,
							"pageSize": 99999,
							"fetchNum": 9999
						},
						transFn = function(data) {
							return $.param(data);
						};
					$http.post("/CQMarketSupervise/selectAllRole.do?", data, {
						headers: {
							'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
						},
						transformRequest: transFn
					}).success(function(roleData) {
						if (roleData.message != "未登录或登录超时") {
							roleNodes = roleData.data.rows;
							for (var i = 0; i < roleNodes.length; i++) {
								if ($.inArray(roleNodes[i].fGuid, userRoleIds) >= 0) {
									roleNodes[i].checked = true;
									roleNodes[i].open = true;
								}
							}
							roleTree = $.fn.zTree.init($("#roleTree"), roleTreeSetting, roleNodes); //初始化用户角色树

							$scope.tree_visible = true;
						} else {
							alert("用户未登陆或当前用户登陆超时，请重新登陆！");
						}
					});
				}

				// 保存角色修改
				$scope.saveUserRoles = function() {
					var changeNodes = roleTree.getChangeCheckedNodes();
					// 有改变
					if (changeNodes.length > 0) {
						var nodes = roleTree.getCheckedNodes(true);
						var checkedRoleIds = [];
						for (var i = 0; i < nodes.length; i++) {
							// if (nodes[i].pId !== null && nodes[i].pId !== "") {
							checkedRoleIds[checkedRoleIds.length] = nodes[i].fGuid;
							// }
						}
						optRolesToMember(checkedRoleIds.join()); // 向服务器发送请求
					}
				}

				// 向指定用户分配或移除角色
				function optRolesToMember(roleids) {
						var data = {
								"roleId": roleids,
								"fUserGuid": $scope.memberId,
							},
							transFn = function(data) {
								return $.param(data);
							};
						$http.post("/CQMarketSupervise/addRoleToUser.do?", data, {
							headers: {
								'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
							},
							transformRequest: transFn
						}).success(function(responseData) {
							if (responseData.message != "未登录或登录超时") {
								if (responseData.code == "20000") {
									$scope.messages = "修改成功!";
									$('#memberAlertModal').modal({
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
					if (treeNode.checked == true) {
						try {
							fatherDeptTree.checkNode(treeNode, false, true);
						} catch (ex) {}
						try {
							roleTree.checkNode(treeNode, false, true);
						} catch (ex) {}
					} else {
						try {
							fatherDeptTree.checkNode(treeNode, true, true);
						} catch (ex) {}
						try {
							roleTree.checkNode(treeNode, true, true);
						} catch (ex) {}
					}
				};

				//选择不同局所
				$scope.regionChange = function(type) {
					if (type == "org") {
						$scope.mdistrict = $scope.mdistrictg.station[0]; //将所下拉框重置为“全部”并清空
						$scope.mdistrictp = $scope.mdistrict.place[0]; //将片区下拉框重置为“全部”并清空                    
					}
				}

				//读取配置文件
				function getTypeConfigs() {
						//读取配置文件
						dojo.xhrGet({
							url: "/cqsybackstagemanager/SysUserController/getUserRole.do",
							handleAs: "json",
							sync: true,
							load: function(response) {
								if (response.code == "10002") {
									jAlert("用户未登录或当前用户登录超时，请重新登录！", "提示");
								} else {
									$scope.org = response.data;
									// 为有多个下级的区域添加"全部"
									if (response.data.length > 1) {
										response.data.unshift({
											"name": "重庆市工商行政管理局",
											"alias": "重庆市",
											"code": "500",
											"station": [{
												"name": "全部",
												"code": "000000000"
											}]
										});
									}
									for (var i = 0; i < response.data.length; i++) {
										if (response.data[i].station.length > 1) {
											response.data[i].station.unshift({
												"name": "全部",
												"code": "000000000"
											});
										}
									}
									$scope.mdistrictg = $scope.org[0];
									$scope.mdistrict = $scope.org[0].station[0];
								}
							}
						});
					}
					//验证------
				var validate = function() {
						$scope.messages = "";
						$scope.showError = false;
						$scope.showSuccess = false;
						if ($scope.realName === null || $scope.realName === '') {
							$scope.messages += "姓名不能为空! ";
							$scope.showError = true;
						}
						if ($scope.realName.replace(/[^\x00-\xff]/g, 'xx').length > 12) {
							$scope.messages += "姓名不能超过12个字符! ";
							$scope.showError = true;
						}
						if ($scope.memberName === null || $scope.memberName === '') {
							$scope.messages += "登录名不能为空! ";
							$scope.showError = true;
						}
						var namePatrn = /^[A-Za-z]{1}[0-9A-Za-z_]{2,29}$/;
						if (!namePatrn.exec($scope.memberName)) {
							$scope.messages += "登录名应该为由字母、数字、下划线组成，以字母开头的3-30个字符组成! ";
							$scope.showError = true;
						}

						if ($scope.memberAge === undefined) {
							$scope.messages += "年龄需为18-99的整数! ";
							$scope.showError = true;
						}
						if ($scope.memberPassword === null || $scope.memberPassword === '') {
							$scope.messages += "密码不能为空! ";
							$scope.showError = true;
						}
						if ($scope.againPassword !== $scope.memberPassword) {
							$scope.messages += "两次密码不一致! ";
							$scope.showError = true;
						}

						if ($scope.memberPassword != "******") {
							// $scope.orginPsw = $.md5($.md5($scope.memberPassword));
							$scope.orginPsw = ($scope.memberPassword);
						}

						if ($scope.deptName === null) {
							$scope.messages += "请选择部门! ";
							$scope.showError = true;
						}

						var telPatrn = /^1[3|4|5|7|8][0-9]\d{8}$/;
						if (!telPatrn.exec($scope.memberTel)) {
							$scope.messages += "手机号格式不正确! ";
							$scope.showError = true;
						}
						var officeTelPatrn = /^\d{8}$/;
						if (($scope.memberOfficeTel != null && $scope.memberOfficeTel != "") && !officeTelPatrn.exec($scope.memberOfficeTel)) {
							$scope.messages += "部门电话格式不正确! ";
							$scope.showError = true;
						}
					}
					// 获取现有多少部门，填充所属部门select
				var getDeptNamesUrl = "/LJMarketSupervise/getDeptNames.do?";

				function getDeptNames(http, q) {
					var delay = q.defer();
					http.get(getDeptNamesUrl, {
						header: {
							'Content-Type': 'application/json; charset=UTF-8'
						}
					}).success(function(response, status, headers, config) {
						delay.resolve(response);
					}).error(function(error, status, headers, config) {
						delay.reject(error);
					});
					delay.promise.then(function(ConfigObj) {
						$scope.deptNames = ConfigObj;
					});
				}

			}

			function init(App) {
				App.controller('memberManagerController', ['$scope', '$http', '$q', 'memberManagerService', memberManagerController]);
				return memberManagerController;
			}
			return {
				start: init
			};

		});

}).call(this);