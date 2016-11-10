package com.CQJjFlowSu.dao;

import com.CQJjFlowSu.db.TUsers;
import com.CQJjFlowSu.db.TUsersExample;
import java.util.List;
import org.apache.ibatis.annotations.Param;

public interface TUsersMapper {
    int countByExample(TUsersExample example);

    int deleteByExample(TUsersExample example);

    int insert(TUsers record);

    int insertSelective(TUsers record);

    List<TUsers> selectByExample(TUsersExample example);

    int updateByExampleSelective(@Param("record") TUsers record, @Param("example") TUsersExample example);

    int updateByExample(@Param("record") TUsers record, @Param("example") TUsersExample example);

	TUsers getUserByName(String username);
}