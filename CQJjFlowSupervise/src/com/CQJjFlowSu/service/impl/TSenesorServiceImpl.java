package com.CQJjFlowSu.service.impl;

import java.util.ArrayList;
import java.util.Map;

import javax.annotation.Resource;

import oracle.net.aso.s;

import org.springframework.stereotype.Service;

import com.CQJjFlowSu.dao.TFlowMapper;
import com.CQJjFlowSu.dao.TSenesorMapper;
import com.CQJjFlowSu.db.TSenesor;
import com.CQJjFlowSu.db.TSenesorExample;
import com.CQJjFlowSu.service.TSenesorService;

@Service
public class TSenesorServiceImpl extends CommonServiceImpl implements TSenesorService{
     @Resource
	 private TSenesorMapper tSenesorMapper;
     
     @Resource 
     private TFlowMapper tFlowMapper;
	
	@Override
	public void insertSenesor(TSenesor senesor) {
		// TODO Auto-generated method stub
		tSenesorMapper.insert(senesor);
		
	}

	@Override
	public ArrayList<Map<String, Object>> getSensorCount() {
		// TODO Auto-generated method stub
		 
		return  tFlowMapper.getSensorCount();
	}

	@Override
	public ArrayList<Map<String, Object>> querySensorList(Map<String,Object>param) {
		// TODO Auto-generated method stub
		return tFlowMapper.querySensorList(param);
	}

	@Override
	public ArrayList<Map<String, Object>> getSenesorDetail(String fId) {
		// TODO Auto-generated method stub
		return tFlowMapper.getSenesorDetail(fId);
	}

	@Override
	public int countSensorList(Map<String, Object> param) {
		// TODO Auto-generated method stub
		return tFlowMapper.countSensorList(param);
	}


	@Override
	public int countSensorFlowList(String fId) {
		// TODO Auto-generated method stub
		return tFlowMapper.countSensorFlowList(fId);
	}

	@Override
	public ArrayList<Map<String, Object>> getSensorFlowList(
			Map<String, Object> param) {
		// TODO Auto-generated method stub
		return tFlowMapper.getSensorFlowList(param);
	}

	@Override
	public void updateSenesor(TSenesor senesor) {
		// TODO Auto-generated method stub
		TSenesorExample ex=new TSenesorExample();
		ex.createCriteria().andFIdEqualTo(senesor.getfId());
		tSenesorMapper.updateByExample(senesor, ex);
	}

	@Override
	public ArrayList<Map<String, Object>> getSensorFlowDataList(
			Map<String, Object> param) {
		// TODO Auto-generated method stub
		return tFlowMapper.getSensorFlowDataList(param);
	}

	@Override
	public int countSensorFlowDataList(String fId) {
		// TODO Auto-generated method stub
		return tFlowMapper.countSensorFlowDataList(fId);
	}

	@Override
	public void insertRecord(String uuid, String tel, String fId,String fStatus) {
		// TODO Auto-generated method stub
		tFlowMapper.insertRecord(uuid,tel,fId,fStatus);
	}

}
