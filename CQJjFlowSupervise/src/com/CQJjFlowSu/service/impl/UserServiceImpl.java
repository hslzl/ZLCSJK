package com.CQJjFlowSu.service.impl;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Service;

import com.CQJjFlowSu.dao.TUsersMapper;
import com.CQJjFlowSu.db.TUsers;
import com.CQJjFlowSu.service.UserService;

@Service
public class UserServiceImpl  extends CommonServiceImpl implements UserService {
   
	@Resource
	private TUsersMapper tUsersMapper;
	
    @Override
	public boolean login(String username, String password, HttpServletRequest request) {
		// TODO Auto-generated method stub
    	boolean flag=false;
         TUsers user=tUsersMapper.getUserByName(username);
	     if (user!=null) {
			 if (user.getfPassword().equals(password)) {//验证成功
				request.getSession().setAttribute("user", user);
			    flag=true;
			 }
		 }
	     return flag;
    }

}
