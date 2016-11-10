package com.CQJjFlowSu.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import com.CQJjFlowSu.db.TSenesor;

public interface TSenesorService {

	void insertSenesor(TSenesor senesor);

	ArrayList<Map<String, Object>> getSensorCount();

	ArrayList<Map<String, Object>> querySensorList(Map<String,Object>param);

	ArrayList<Map<String, Object>> getSenesorDetail(String fId);

	int countSensorList(Map<String, Object> param);


	int countSensorFlowList(String fId);

	ArrayList<Map<String, Object>> getSensorFlowList(Map<String, Object> param);

	void updateSenesor(TSenesor senesor);

	ArrayList<Map<String, Object>> getSensorFlowDataList(
			Map<String, Object> param);

	int countSensorFlowDataList(String fId);

	void insertRecord(String uuid, String tel, String fId,String fStatus);
	
	
}
