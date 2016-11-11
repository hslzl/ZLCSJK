(function() {
    "use strict";

    define([

    ], function() {

        function infowindowController($scope, $http, $cookies, $q, mapService, infowindowService,infoWinMoreService) {
        		$scope.drugVisible = false;  //药品信息标题显示属性
                $scope.baseVisible = true;  //基本信息标题显示属性
                $scope.checkVisible = false; //抽检信息标题显示属性
                $scope.infovisible = true;
                $scope.isBasevisible=true;
                $scope.eqptVisible=false;
                $scope.equiBasevisible=false;
                $scope.elevatorWarning=false;
                $scope.normalvisible = false;
                $scope.isCreditvisible=false;
                $scope.isCreditCollapsed=true;
                $scope.isBusinessvisible=false;
                $scope.entityTags=true;
                $scope.entityTagsother=true;
                $scope.isColltionvisible=true;

                var specialTag = "";   //存储基本信息的显示方式，"无证无照"表示特殊主体，"特种设备"表示特种设备
                
                var collectionurl="/LJMarketSupervise/operateUserEntity.do?"//添加、取消收藏接口
                var urlCountWei="/LJMarketSupervise/micro/getMicroKindTotal.do?"//微企优惠政策数量
                var expCreditInfourl="/LJMarketSupervise/expCreditInfo.do?"//导出信用报告接口
                
                $scope.baseclass="#f5fbfe";
                $scope.tabclass="#c8e5f6";
                $scope.creditCollapsClass ="glyphicon-info-right";
                $scope.creditData=["投诉举报记录","行政处罚记录","监管信息记录","异常名录记录","金融税务记录","信用良好记录","抽检信息记录"];
                $scope.creditDataValue=null;
                var thisold=null;
                var queryKey;  
                var pricountguid;
                
                infowindowService.setController($scope);
                
                $scope.$bus.subscribe({
                    channel: 'map',
                    topic: 'map.created',
                    callback: function(data, envelope) {
                    }
                });
                
                
                //切换到信用信息
                $scope.tabCreditInfo = function() {
                	 $scope.isBasevisible=false;
                     $scope.isCreditvisible=true;
                     $scope.isBusinessvisible=false;
                     $scope.baseclass="#c8e5f6";
                     $scope.creditclass="#f5fbfe";
                     $scope.Businessclass="#c8e5f6";
                }
                
                //切换到药品信息
                $scope.tabDrugBaseInfo = function() {
                	 $scope.isBasevisible=false;
                     $scope.isCreditvisible=false;
                     $scope.isBusinessvisible=false;
                     $scope.drugBasevisible= true;
                     $scope.drugEntityVisible = false;
                     $scope.drugbaseclass="#f5fbfe";
                     $scope.drugentityclass="#c8e5f6";
                     $scope.baseclass="#c8e5f6";
                     $scope.creditclass="#c8e5f6";
                     $scope.Businessclass="#c8e5f6";
                }
                $scope.tabDrugEntityInfo = function() {
                	 $scope.isBasevisible=false;
                     $scope.isCreditvisible=false;
                     $scope.isBusinessvisible=false;
                     $scope.drugBasevisible= false;
                     $scope.drugEntityVisible = true;
                     $scope.drugbaseclass="#c8e5f6";
                     $scope.drugentityclass="#f5fbfe";
                     $scope.baseclass="#c8e5f6";
                     $scope.creditclass="#c8e5f6";
                     $scope.Businessclass="#c8e5f6";
                }
                //切换到抽检信息
                $scope.tabCheckBaseInfo = function() {
                     $scope.isBasevisible=false;
                     $scope.isCreditvisible=false;
                     $scope.isBusinessvisible=false;
                     $scope.checkBasevisible= true;    //抽检信息详情
                     $scope.checkEntityVisible = false;  //主体信息详情
                     $scope.checkbaseclass="#f5fbfe";  //抽检信息标题颜色
                     $scope.checkentityclass="#c8e5f6";  //主体信息标题颜色
                     $scope.baseclass="#c8e5f6";
                     $scope.creditclass="#c8e5f6";
                     $scope.Businessclass="#c8e5f6";
                }
                //切换到停车场信息
                $scope.tabParkBaseInfo = function() {
                     $scope.isBasevisible=false;
                     $scope.isCreditvisible=false;
                     $scope.isBusinessvisible=false;
                     $scope.parkBasevisible= true;    //抽检信息详情
                     $scope.checkEntityVisible = false;  //主体信息详情
                     $scope.checkbaseclass="#f5fbfe";  //抽检信息标题颜色
                     $scope.baseclass="#c8e5f6";
                     $scope.creditclass="#c8e5f6";
                     $scope.Businessclass="#c8e5f6";
                }
                $scope.tabHouseBaseInfo = function() {
                     $scope.isBasevisible=false;
                     $scope.isCreditvisible=false;
                     $scope.isBusinessvisible=false;
                     $scope.houseBasevisible= true;    //抽检信息详情
                     $scope.checkEntityVisible = false;  //主体信息详情
                     $scope.checkbaseclass="#f5fbfe";  //抽检信息标题颜色
                     $scope.baseclass="#c8e5f6";
                     $scope.creditclass="#c8e5f6";
                     $scope.Businessclass="#c8e5f6";
                }
                $scope.tabEduBaseInfo = function() {
                     $scope.isBasevisible=false;
                     $scope.isCreditvisible=false;
                     $scope.isBusinessvisible=false;
                     $scope.eduBasevisible= true;    //抽检信息详情
                     $scope.checkEntityVisible = false;  //主体信息详情
                     $scope.checkbaseclass="#f5fbfe";  //抽检信息标题颜色
                     $scope.baseclass="#c8e5f6";
                     $scope.creditclass="#c8e5f6";
                     $scope.Businessclass="#c8e5f6";
                }
                $scope.tabmortgageBaseInfo = function() {
                    $scope.isBasevisible=false;
                    $scope.isCreditvisible=false;
                    $scope.isBusinessvisible=false;
                    $scope.mortgageBasevisible= true;
                    $scope.checkEntityVisible = false;
                    $scope.checkbaseclass="#f5fbfe"; 
                    $scope.baseclass="#c8e5f6";
                    $scope.creditclass="#c8e5f6";
                    $scope.Businessclass="#c8e5f6";
               }
                
                $scope.tabCheckEntityInfo = function() {
                     $scope.isBasevisible=false;
                     $scope.isCreditvisible=false;
                     $scope.isBusinessvisible=false;
                     $scope.checkBasevisible= false;
                     $scope.checkEntityVisible = true;
                     $scope.checkbaseclass="#c8e5f6";
                     $scope.checkentityclass="#f5fbfe";
                     $scope.baseclass="#c8e5f6";
                     $scope.creditclass="#c8e5f6";
                     $scope.Businessclass="#c8e5f6";
                }
                //切换到业务信息
                $scope.tabBusinessInfo = function() {
                	 $scope.isBasevisible=false;
                     $scope.isCreditvisible=false;
                     $scope.isBusinessvisible=true;
                     $scope.baseclass="#c8e5f6";
                     $scope.creditclass="#c8e5f6";
                     $scope.Businessclass="#f5fbfe";
                }
                //切换到详情展示
                $scope.tabEqptDetails = function() {
                	
                    $scope.equiDetailvisible=true;
                    $scope.equiBasevisible=false;
                    $scope.eqptDetailclass="#f5fbfe";
                    $scope.baseclass="#c8e5f6";
                }
                //切换到基本信息
                $scope.tabBaseInfo = function() {
                    if (specialTag == "特种设备") {
                        $scope.isBasevisible=false;
                        $scope.equiBasevisible = true;
                    } else{
                        $scope.isBasevisible=true;
                        $scope.equiBasevisible = false;
                        
                        if (specialTag == "无照无证") {
                            $scope.normalvisible = false;        
                        } else {
                            $scope.normalvisible = true;
                        }
                    };
                	
                    $scope.isCreditvisible=false;
                    $scope.isBusinessvisible=false;
                    $scope.baseclass="#f5fbfe";
                    $scope.creditclass="#c8e5f6";
                    $scope.Businessclass="#c8e5f6";
                    $scope.eqptDetailclass="#c8e5f6";
                }

                //显示更多信息
                $scope.more = function(index,dataall) {
                 $scope.$bus.publish({
                     channel: 'infoWindow',
                     topic: 'infoWindow.onMore',
                     data: {
                    	 queryvalue:queryKey,
                    	 name:dataall[index].name,
                    	 value:dataall[index].value,
                         key: "showmoremess"
                       }
                    });
                }
                
              //显示非公党建信息
                $scope.moreDang = function(index,dataall) {
                 $scope.$bus.publish({
                     channel: 'infoWindow',
                     topic: 'infoWindow.onMore',
                     data: {
                    	 queryvalue:queryKey,
                    	 name:"非公党建",
                    	 value:"非公党建",
                         key: "showmoremess"
                       }
                    });
                }

                //导出信用报告信息
                // $scope.reportExport = function() {
                //     var delay = $q.defer();
                //     $scope.queryKey=queryKey;
                //     $http.get("/LJMarketSupervise/expCreditInfo.do", {
                //         header: {
                //             'Content-Type': 'application/json; charset=UTF-8'
                //         },
                //         params: {
                //             "fEntityGuid": queryKey //主体ID
                //         }
                //     }).success(function(response, status, headers, config) {
                //         delay.resolve(response);
                //     }).error(function(error, status, headers, config) {
                //         jAlert("请求错误！", "提示！");
                //         delay.reject(error);
                //     });
                //     delay.promise.then(function(ConfigObj) {
                //         console.log(ConfigObj.msg);
                //     });
                // }

                $scope.getEqptDetail = function(categoryInfo){
                	if(categoryInfo.count > 0){
                		$scope.$bus.publish({
                            channel: 'infoWindow',
                            topic: 'infoWindow.eqptDetails',
                            data: {
                           	 	info: categoryInfo
                              }
                           });
                	}else{
                		jAlert("没有对应的信息！","提示！")
                	}
                	
                }
                //添加、取消收藏
                $scope.collection=function(ctype)
                {
                	var data = {
                            "fEntityGuid": queryKey, //收藏企业的Guid
                            "type": ctype //判断添加或取消的参数
                        },
                        transFn = function(data) {
                            return $.param(data);
                        };
                    $http.post(collectionurl, data, {
                        headers: {
                            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
                        },
                        transformRequest: transFn
                    }).success(function(responseData) {
                        if (responseData.message == "操作成功") 
                        {
                        	if(ctype==0)
                        		{
                            	jAlert("添加收藏成功!","提示!");
                            	$scope.isColltionvisible=false;
                        		}
                        	else
                        		{
                        		jAlert("取消收藏成功!","提示!");
                        		$scope.isColltionvisible=true;
                        		 $scope.$bus.publish({
                                     channel: 'infoWindow',
                                     topic: 'infoWindow.colltion',
                                     data: {
                                    	 type:ctype,
                                       }
                                    });
                        		}
                         } 
                        else
                        {
                        	if(ctype==0)
                    		{
                        	jAlert("添加收藏失败!","提示!");
                    		}
                    	else
                    		{
                    		jAlert("取消收藏失败!","提示!");
                    		}
                        } 
                    });
                }
                //信用信息收缩功能
                $scope.CollapsGroup = function(thisnow)
                {
                	thisnow.creditCollapsClass =="glyphicon-info-right" ? thisnow.creditCollapsClass = "glyphicon-info-down" : thisnow.creditCollapsClass = "glyphicon-info-right";
                	if(thisold===thisnow)
                		{
                		thisnow.isCreditCollapsed=!thisnow.isCreditCollapsed;
                		return;
                		}
                	else
                		{
                	thisnow.isCreditCollapsed=false;
                		}
                	if(thisold!=null){
                		thisold.isCreditCollapsed=true;
                		thisold.creditCollapsClass ="glyphicon-info-right";
                     }
                	thisold=thisnow;
                }
                $scope.creditInfo=function(index,num,year)
                {
                    // if ($scope.creditData[index] == "监管信息记录") {       //由于监管记录没有数据，因此这里暂时不对监管记录的数量进行判断，而是直接查详情方便测试
                    //     $scope.$bus.publish({
                    //         channel: 'infoWindow',
                    //         topic: 'infoWindow.onMore',
                    //         data: {
                    //             queryvalue: queryKey,
                    //             name: $scope.creditData[index],
                    //             value: year,
                    //             key: "showmoremess"
                    //         }
                    //     });
                    //     return;
                    // };
                	//if(num!=0 && index<4)
                    if (num!=0)
                		{
             	     $scope.$bus.publish({
                      channel: 'infoWindow',
                      topic: 'infoWindow.onMore',
                      data: {
                     	 queryvalue:queryKey,
                     	 name:$scope.creditData[index],
                     	 value:year,
                         key: "showmoremess"
                        }
                     });
                		}
                	else
                		{
                		jAlert("没有详细信息！","提示！");
                		return;
                		}
                }
                //业务信息详情展示
                $scope.businessMore = function(bvalue,bnum) {
                    if(bnum!=0){
                            $scope.$bus.publish({
                                channel: 'infoWindow',
                                topic: 'infoWindow.onMore',
                                data: {
                                    queryvalue:queryKey,
                                    name:bvalue,
                                    value:bvalue,
                                    entityName:$scope.readdata[0].value,
                                    key: "showmoremess"
                                }
                            });
                        }
                        else{
                            jAlert("没有业务信息详情！","提示！");
                            return;
                        }
                	
                }

                 //物价教育机构，停车场信息详情展示
                $scope.priMore = function(bvalue,bnum) {
                    if(bnum!=0){
                            $scope.$bus.publish({
                                channel: 'infoWindow',
                                topic: 'infoWindow.onMore',
                                data: {
                                    queryvalue:queryKey,
                                    name:bvalue,
                                    value:bvalue,
                                    key: "showmoremess"
                                }
                            });
                        }
                        else{
                            jAlert("没有业务信息详情！","提示！");
                            return;
                        }
                	
                }

                //显示当前点击查询结果
                $scope.readcurrentPage = function(resultInfo,key,creditValue) {
                    if (resultInfo.data!=undefined && resultInfo.data.fTags=="无照无证") { //特殊主体  只显示基本信息
                    	$scope.drugVisible = false;
                        specialTag = "无照无证";
                        $scope.tabBaseInfo();
                        $scope.normalvisible = false;
                        $scope.isBasevisibleCredit = true;
                        $scope.CreditDvisible = false;
                        $scope.baseHeight = 280;
                        $scope.readdata = resultInfo.data;

                    } else {
                        if (creditValue =="") {               //特种设备  只显示基本信息，且展示字段不一样，区别方法为修改不同div的ng-show
                        	$scope.drugVisible = false;
                            specialTag = "特种设备";
                            $scope.tabBaseInfo();
                            if(resultInfo.data.fCategory == "电梯"){
                            	 $scope.elevatorWarning=true;
                            }else{
                            	$scope.elevatorWarning=false;
                            }
                           
                            $scope.eqptVisible = true;
                            $scope.normalvisible = false;
                            $scope.isBasevisibleCredit = true;
                            $scope.CreditDvisible = false;
                            $scope.baseHeight = 280;
                            $scope.readdata = resultInfo.data;
                        } else if(creditValue == "drug"){
                        	$scope.tabDrugBaseInfo();
                        	$scope.drugVisible = true;   //药品信息标题显示属性
                            $scope.baseVisible = false;  //基本信息标题显示属性
                        	$scope.normalvisible = false;
                            $scope.isBasevisibleCredit = false;
                            $scope.CreditDvisible = false;
                            $scope.baseHeight = 248;
                            $scope.readdataDrug = resultInfo.data[0];
                            $scope.readdataEntity = resultInfo.data[1];
                        } else if(creditValue == "check"){        //抽检记录
                            $scope.tabCheckBaseInfo();
                            $scope.checkVisible = true;  //抽检信息标题的显示属性
                            $scope.baseVisible = false;  //基本信息标题显示属性
                            $scope.normalvisible = false;
                            $scope.isBasevisibleCredit = false;
                            $scope.CreditDvisible = false;
                            $scope.baseHeight = 248;
                            $scope.readdataCheck = resultInfo.data[0];   //抽检基本信息
                            $scope.readdataEntity = resultInfo.data[1];  //被抽检单位信息
                        }else if(creditValue == "house"){        //抽检记录
                            $scope.tabHouseBaseInfo();
                            $scope.houseVisible = true;  //抽检信息标题的显示属性
                            $scope.baseVisible = false;  //基本信息标题显示属性
                            $scope.normalvisible = false;
                            $scope.isBasevisibleCredit = false;
                            $scope.CreditDvisible = false;
                            $scope.baseHeight = 248;
                            $scope.readdataHouse = resultInfo; 
                            $scope.queryKey=queryKey=$scope.readdataHouse.fId;
                        }else if(creditValue == "park"){        
                            $scope.tabParkBaseInfo();
                            $scope.parkVisible = true;  
                            $scope.baseVisible = false;  
                            $scope.normalvisible = false;
                            $scope.isBasevisibleCredit = false;
                            $scope.CreditDvisible = false;
                            $scope.baseHeight = 248;
                            $scope.readdataPark = resultInfo;
                            $scope.queryKey=queryKey=$scope.readdataPark.fType;
                        }else if(creditValue == "edu"){        
                            $scope.tabEduBaseInfo();
                            $scope.eduVisible = true;  
                            $scope.baseVisible = false;  
                            $scope.normalvisible = false;
                            $scope.isBasevisibleCredit = false;
                            $scope.CreditDvisible = false;
                            $scope.baseHeight = 248;
                            $scope.readdataEdu = resultInfo;   
							$scope.queryKey=queryKey=$scope.readdataEdu.fId;
                        }else if(creditValue == "mortgage"){
                            $scope.tabmortgageBaseInfo();
                            $scope.mortgageVisible=true;
                            $scope.baseVisible = false;  
                            $scope.normalvisible = false;
                            $scope.isBasevisibleCredit = false;
                            $scope.CreditDvisible = false;
                            $scope.baseHeight = 248;
                            $scope.readdatamortgage = resultInfo;   
                        }
                        else{
                        	$scope.drugVisible = false;
                            $scope.baseVisible = true;  //基本信息标题显示属性
                            if (creditValue == "D" || creditValue == "Z") { 
                                $scope.tabBaseInfo();
                                $scope.normalvisible = true;
                                $scope.isBasevisibleCredit = true;
                                $scope.CreditDvisible = false;
                                $scope.baseHeight = 280;
                                $scope.readdata = resultInfo[0].EntityInfo;
                            } else {
                                $scope.normalvisible = true;
                                $scope.CreditDvisible = true;
                                $scope.isBasevisibleCredit = false;
                                $scope.baseHeight = 250;
                                $scope.queryKey=queryKey = key;
                                var entityData = resultInfo[0].EntityInfo;
                                $scope.readdata = resultInfo[0].EntityInfo;
                                $scope.$bus.publish({
                                    channel: 'infoWindowEntity',
                                    topic: 'infoWindowEntity.onMore',
                                    data: {
                                        value: entityData,
                                    }
                                });
                                if ($scope.readdata[4].value != "" && $scope.readdata[4].value.split(',').length > 0) {
                                    $scope.readdata[4].value = "共" + $scope.readdata[4].value.split(',').length + "个";
                                } else {
                                    $scope.readdata[4].value = "共0个";
                                }
                                for (var i = 0; i < $scope.readdata.length; i++) {
                                    if ($scope.readdata[i].name == "地址") {
                                        $scope.readdata[i].name = "注册地址";
                                    } else if ($scope.readdata[i].name == "联系方式") {
                                        $scope.readdata[i].name = "注册电话";
                                    }
                                };
                                $scope.creditDataValue = resultInfo[0].CreditInfo;
                                $scope.BusinessDataValue = resultInfo[0].BizInfo;
                                if (resultInfo[0].store == 1) {
                                    $scope.isColltionvisible = false;

                                } else {
                                    $scope.isColltionvisible = true;
                                }
                                $scope.entityWeiTags = false;
                                $scope.entityWaiTags = false;
                                $scope.entityXianTags = false;
                                $scope.entityDangTags = false;
                                $scope.enttityInternet = false;
                                $scope.entityTechnical = false;
                                $scope.creditReport = false;
                                if ($cookies.userName == "admin" || $cookies.userName == "xiangqw" || $cookies.userName == "zhaog") {
                                        $scope.creditReport = true;
                                    }
                                var ftags = resultInfo[0].EntityInfo[9].value.split(",");
                                for (var i = 0; i < ftags.length; i++) {
                                    if (ftags[i] == "微企") {
                                        $scope.entityWeiTags = true;
                                    } else if (ftags[i] == "外企") {
                                        $scope.entityWaiTags = true;
                                    } else if (ftags[i] == "先照后证") {
                                        if (creditValue == "AB") {
                                            $scope.entityXianTags = true;
                                        } else {
                                            $scope.entityXianTags = false;
                                        }
                                    } else if (ftags[i] == "非公党建") {
                                        $scope.entityDangTags = true;
                                    } else if (ftags[i] == "互联网金融") {
                                        $scope.enttityInternet = true;
                                    } else if (ftags[i] == "科技型企业") {
                                        $scope.entityTechnical = true;
                                    };
                                }
                            }
                        };    
                    }    
                }
            }

        function init(App) {
            App.controller('infowindowController', ['$scope', '$http', '$cookies', '$q', 'mapService', 'infowindowService','infoWinMoreService',infowindowController]);
        }

        return {
            start: init
        };
    });
}).call(this);