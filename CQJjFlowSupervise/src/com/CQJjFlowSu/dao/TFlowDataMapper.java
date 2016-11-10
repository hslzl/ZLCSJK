package com.CQJjFlowSu.dao;

import com.CQJjFlowSu.db.TFlowData;
import com.CQJjFlowSu.db.TFlowDataExample;
import java.util.List;
import org.apache.ibatis.annotations.Param;

public interface TFlowDataMapper {
    int countByExample(TFlowDataExample example);

    int deleteByExample(TFlowDataExample example);

    int deleteByPrimaryKey(String fId);

    int insert(TFlowData record);

    int insertSelective(TFlowData record);

    List<TFlowData> selectByExample(TFlowDataExample example);

    TFlowData selectByPrimaryKey(String fId);

    int updateByExampleSelective(@Param("record") TFlowData record, @Param("example") TFlowDataExample example);

    int updateByExample(@Param("record") TFlowData record, @Param("example") TFlowDataExample example);

    int updateByPrimaryKeySelective(TFlowData record);

    int updateByPrimaryKey(TFlowData record);
}