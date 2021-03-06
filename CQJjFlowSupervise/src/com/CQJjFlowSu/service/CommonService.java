package com.CQJjFlowSu.service;


import java.util.List;

import com.CQJjFlowSu.common.PageInfo;
import com.CQJjFlowSu.db.KeyValue;

public interface CommonService {
	/**
	 * 通用分页服务
	 * 
	 * @param detailSqlId
	 * @param countSqlId
	 * @param obj
	 * @param cruuPageNo
	 * @return
	 */
	PageInfo getPage(String detailSqlId, String countSqlId, Object obj,
			int pageNo,int pageSize);
	
	String KVList2ObjectJson(List<KeyValue> kvList);
}
