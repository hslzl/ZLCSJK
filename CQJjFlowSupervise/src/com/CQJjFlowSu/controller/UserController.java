package com.CQJjFlowSu.controller;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.CQJjFlowSu.common.ReturnData;
import com.CQJjFlowSu.common.SysCodeMsg;
import com.CQJjFlowSu.service.UserService;

@Controller
public class UserController extends BaseController{
	
	@Resource
    private	UserService userService;
    
	@RequestMapping(value = "login", produces = { "application/json;charset=UTF-8" })
	@ResponseBody
	public ReturnData login(String username,String password,HttpServletRequest request){
	   ReturnData returnData=new ReturnData();
	   try {
		 boolean flag= userService.login(username,password,request);
	     if (flag) {
		    returnData.setData(request.getSession().getAttribute("user"));	
		 }else{
			 returnData.setCode(SysCodeMsg.CODE_10004);
			 returnData.setMessage(SysCodeMsg.MSG_10004);
		 }  
	   } catch (Exception e) {
		// TODO: handle exception
		   e.printStackTrace();
		   returnData.setCode(SysCodeMsg.CODE_10000);
		   returnData.setMessage(SysCodeMsg.MSG_10000);
	  }
	   return returnData;
	}
	
	@RequestMapping(value = "logout", produces = { "application/json;charset=UTF-8" })
	@ResponseBody
	public ReturnData logout(HttpServletRequest request){
		ReturnData returnData=new ReturnData();
		request.getSession().removeAttribute("user");
	    return returnData;
		
	}
	
}
