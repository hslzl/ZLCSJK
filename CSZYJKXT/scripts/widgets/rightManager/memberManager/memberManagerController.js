
(function() {
	"use strict";
	define(
		['dojo/_base/array', 'helpers/symbolhelper'],
		function(array, sym) {

			function memberManagerController($scope, $http, $q, memberManagerService) {
             
				//确定提交
				$scope.btnSubmit = function(){
	                var data = getFormValue();
	             
	                var urlPage = "/CQJjFlowSupervise/insertSenesor.do";  //编辑
	            var attrValues = [data.fId,data.fXh,data.fType,data.fStatus,data.fJd,data.fWd,data.fInstallDate,data.fRepairDate];
                var attribute = ["设备ID","序号","设备类型","设备状态","经度","纬度","安装时间","维修时间"];
	             if (simulation(attrValues,attribute)) {
	                  infoSubmit(data,urlPage,function(response){  //请求查询接口
	                    if (response.message == '成功') {
	                      jAlert(response.message,"提示！");
	                      return;
	                    } else {
	                      jAlert("用户未登陆或当前用户登陆超时，请重新登陆！","提示！");
	                      return;
	                    }
	                  });
	                  };
	                };
	        //必填项验证  attrValues是需要验证的必填项字段的值，attribute是需要验证的必填项字段名，两个参数都是数组对象
            var simulation =  function(attrValues,attribute){
                var mess = "请填写以下必填项：";
                for (var i = 0; i < attribute.length; i++) {
                    if ((attrValues[i]==undefined || attrValues[i]=="" || attrValues[i]==null) && attrValues[i]!==0) {
                        mess = mess + attribute[i] + "、";
                    };
                };
                if (mess == "请填写以下必填项：") { 
                    return true;
                } else { 
                    var notCompleteMess = mess.substring(0,mess.length-1);  //去掉最后一个字符“、”
                    jAlert(notCompleteMess, '提示！');
                    return;
                }
            };

	            //获取表单中填写的数据
	            var getFormValue = function(){
	              //获取时间
	              var fInstallDate = document.getElementById("fInstallDate").value; //立案时间
	              var fRepairDate = document.getElementById("fRepairDate").value; //首次现场检查时间
	              var fLastDataTime = document.getElementById("fLastDataTime").value; //实施日期-开始

	              var data = {
	              	 "fId": $scope.fId,
	                "fXh": $scope.fXh,  
	                "fType": $scope.fType||null,  
	                "fStatus": $scope.fStatus,  
	                "fJd": $scope.fJd,  
	                "fWd": $scope.fWd,  
	                "fInstallDate": fInstallDate,  
	                "fRepairDate": fRepairDate,
	                "fElectric": $scope.fElectric,
	                "fLastDataTime":fLastDataTime,       
	                "fOperator":$scope.fOperator,    
	                "fSimNumber": $scope.fSimNumber, 
	              };

	              return data;
	            }; 



	            //请求提交接口
	            var infoSubmit = function(data,urlPage,callback){
	              var transFn = function(data) {
	                        return $.param(data);
	                    };
	                $http.post(urlPage, data, {
	                    headers: {
	                        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
	                    },
	                    transformRequest: transFn
	                }).success(function(response) {
	                    if (typeof callback == 'function') {
	                     
	                      callback(response);
	                       $scope.clearForm(); 
	                      
	                    };
	                }).error(function(error,status){
	                    jAlert("用户未登陆或当前用户登陆超时，请重新登陆！","提示！");
	                    return;
	                });
	            };
                  //清空
	              $scope.clearForm=function(){
                  document.getElementById("fInstallDate").value=null; //立案时间
	              document.getElementById("fRepairDate").value=null; //首次现场检查时间
	             document.getElementById("fLastDataTime").value=null; //实施日期-开始
		             	 $scope.fId="";
		                $scope.fXh="";  
		              $scope.fType="";
		                 $scope.fStatus="";  
		              $scope.fJd=""; 
		              $scope.fWd="";
		               
		               $scope.fElectric="";
		             
		             $scope.fOperator=""; 
		               $scope.fSimNumber="";
	             }
	            //主菜单监听事件
	            $scope.$bus.subscribe({
	                channel: 'leftMenu',
                    topic: 'leftMenu.onActive',
	                callback: function(data, envelope) {
	                    var name = data.name;
	                    if (name === 'memberManager') {
	                        $scope.visible = true;
	                    } else {
	                        $scope.visible = false;
	                    }
	                }
	            });
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