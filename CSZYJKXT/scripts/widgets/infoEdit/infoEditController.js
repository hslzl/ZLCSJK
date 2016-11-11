(function() {
	"use strict";

	define([], function() {
		function infoEditController($scope, $cookies,$http,$q,infoManagerService,infoEditService) {			
		  infoEditService.setController($scope);
      $scope.visible=false;
      $scope.isOpen=false;
       //初始化
      $scope.initOperate = function(){         
                $scope.fId =infoManagerService.getController().selectTR;
                if ($scope.fId=="") {
                    jAlert("请选择要操作的设备", "提示！");
                    return;
                };
                $scope.visible = true;
                $scope.isOpen=false;
                $.ajax({
                    type: "GET",
                    url: "/CQJjFlowSupervise/getSenesorDetail.do",
                    data: {
                      "fId":$scope.fId,
                    },
                    dataType: "json",
                    async: true,
                    success: function(data) {
                    if (data.InfoMessage != "登录超时，请重新登录!") {
                        $scope.result = data.data;
                        $scope.fXh=$scope.result[0].fXh;
                        $scope.fType=$scope.result[0].fType;
                        $scope.fStatus=$scope.result[0].fStatus;
                        $scope.fJd=$scope.result[0].fJd;
                        $scope.fWd=$scope.result[0].fWd;
                        setTimeValue('fInstall',$scope.result[0].fInstallDate);  //安装时间
                        setTimeValue('fRepair',$scope.result[0].fRepairDate); 
                        $scope.fElectric=$scope.result[0].fElectric;
                        setTimeValue('fLastData',$scope.result[0].fLastDataTime);
                        $scope.fOperator=$scope.result[0].fOperator;
                        $scope.fSimNumber=$scope.result[0].fSimNumber;
                         $scope.$digest();
                    } else {
                        jAlert("用户未登陆或当前用户登陆超时，请重新登陆！", "提示！");
                    }
                        $scope.$digest();
                    }
                });
            };

             //设置时间的值
            var setTimeValue = function(did,dvalue){
              if (dvalue) {
                var dAyLasj = new Date(dvalue);
                document.getElementById(did).value=dAyLasj.format("yyyy-MM-dd");
                //document.getElementById(did).value=dAyLasj.format("yyyy-MM-dd");
              } else {
                document.getElementById(did).value = null;
              }
              
             };
             $scope.cancel=function(){
              $scope.visible=false;
             }

             $scope.btnSubmit=function(){

                var data = getFormValue();
               
               var urlPage = "/CQJjFlowSupervise/updateSenesor.do";  //编辑
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
             }

               //获取表单中填写的数据
              var getFormValue = function(){
                //获取时间
                var fInstallDate = document.getElementById("fInstall").value; //立案时间
                var fRepairDate = document.getElementById("fRepair").value; //首次现场检查时间
                var fLastDataTime = document.getElementById("fLastData").value; //实施日期-开始

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
                  
                      };
                  }).error(function(error,status){
                      jAlert("用户未登陆或当前用户登陆超时，请重新登陆！","提示！");
                      return;
                  });
              };

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


              //打开地址解析
               $scope.addMatch = function(){
                   $scope.isOpen=true;
              };
	  }
	function init(app) {
			app.controller('infoEditController', ['$scope', '$cookies','$http','$q',"infoManagerService",'infoEditService', infoEditController]);
			return infoEditController;
		}

		return {
			start: init
		};

	});	

}).call(this);