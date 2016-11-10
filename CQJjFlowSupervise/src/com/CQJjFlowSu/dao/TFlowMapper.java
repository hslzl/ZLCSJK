package com.CQJjFlowSu.dao;

import com.CQJjFlowSu.db.TFlow;
import com.CQJjFlowSu.db.TFlowExample;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Param;

public interface TFlowMapper {
    int countByExample(TFlowExample example);

    int deleteByExample(TFlowExample example);

    int deleteByPrimaryKey(String fGuid);

    int insert(TFlow record);

    int insertSelective(TFlow record);

    List<TFlow> selectByExample(TFlowExample example);

    TFlow selectByPrimaryKey(String fGuid);

    int updateByExampleSelective(@Param("record") TFlow record, @Param("example") TFlowExample example);

    int updateByExample(@Param("record") TFlow record, @Param("example") TFlowExample example);

    int updateByPrimaryKeySelective(TFlow record);

    int updateByPrimaryKey(TFlow record);

	ArrayList<Map<String, Object>> getSensorCount();

	ArrayList<Map<String, Object>> querySensorList(Map<String, Object> param);

	ArrayList<Map<String, Object>> getSenesorDetail(String fId);

	int countSensorList(Map<String, Object> param);

	ArrayList<Map<String, Object>> getSensorFlowList(Map<String, Object> param);

	int countSensorFlowList(String fId);

	ArrayList<Map<String, Object>> getSensorFlowDataList(
			Map<String, Object> param);

	int countSensorFlowDataList(String fId);

	void insertRecord(String uuid, String tel, String fId,String status);
}