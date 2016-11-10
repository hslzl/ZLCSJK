package com.CQJjFlowSu.dao;

import com.CQJjFlowSu.db.TSenesor;
import com.CQJjFlowSu.db.TSenesorExample;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Param;

public interface TSenesorMapper {
    int countByExample(TSenesorExample example);

    int deleteByExample(TSenesorExample example);

    int insert(TSenesor record);

    int insertSelective(TSenesor record);

    List<TSenesor> selectByExample(TSenesorExample example);

    int updateByExampleSelective(@Param("record") TSenesor record, @Param("example") TSenesorExample example);

    int updateByExample(@Param("record") TSenesor record, @Param("example") TSenesorExample example);


}