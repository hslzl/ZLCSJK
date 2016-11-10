package com.CQJjFlowSu.service;

import javax.servlet.http.HttpServletRequest;

public interface UserService {

	boolean login(String username, String password, HttpServletRequest request);

}
