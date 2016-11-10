package com.CQJjFlowSu.controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.UUID;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.CQJjFlowSu.common.ReturnData;
import com.CQJjFlowSu.common.Sampler;
import com.CQJjFlowSu.common.SysCodeMsg;
import com.CQJjFlowSu.common.Util;
import com.CQJjFlowSu.db.TSenesor;
import com.CQJjFlowSu.service.TSenesorService;
import com.shcm.bean.SendResultBean;

/**
 * 流量处理的接口类
 * 
 * @author Administrator
 *
 */
@Controller
public class FlowController extends BaseController {

	@Resource
	private TSenesorService tSenesorService;

	@RequestMapping(value = "insertSenesor", produces = { "application/json;charset=UTF-8" })
	@ResponseBody
	public ReturnData insertSenesor(TSenesor senesor) {
		ReturnData returnData = new ReturnData();
		try {
			senesor.setfGuid(Util.getUuid("1"));
			tSenesorService.insertSenesor(senesor);
			returnData.setData("操作成功");
		} catch (Exception e) {
			// TODO: handle exception
			e.printStackTrace();
			returnData.setCode(SysCodeMsg.CODE_20001);
			returnData.setMessage(SysCodeMsg.MSG_20001);
		}
		return returnData;
	}

	@RequestMapping(value = "getSensorCount", produces = { "application/json;charset=UTF-8" })
	@ResponseBody
	public ReturnData getSensorCount() {
		ReturnData returnData = new ReturnData();
		try {
			ArrayList<Map<String, Object>> result = new ArrayList<>();
			result = tSenesorService.getSensorCount();
			returnData.setData(result);
		} catch (Exception e) {
			// TODO: handle exception
			e.printStackTrace();
			returnData.setCode(SysCodeMsg.CODE_20001);
			returnData.setMessage(SysCodeMsg.MSG_20001);
		}
		return returnData;
	}

	/**
	 * 根据条件查询传感器
	 * 
	 * @return
	 */
	@RequestMapping(value = "querySensorList", produces = { "application/json;charset=UTF-8" })
	@ResponseBody
	public ReturnData querySensorList(String fType, String fXh, String fStatus,
			String fInstallTimeStart, String fInstallTimeEnd, String pageNum,
			String pageSize) {
		ReturnData returnData = new ReturnData();
		try {
			Map<String, Object> param = new HashMap<>();
			int start = (Integer.valueOf(pageNum) - 1)
					* Integer.valueOf(pageSize);
			param.put("start", start);
			param.put("end", Integer.valueOf(pageSize));
			if (fType != null && !"".equals(fType)) {
				param.put("fType", fType);
			}
			if (fXh != null && !"".equals(fXh)) {
				param.put("fXh", fXh);
			}
			if (fStatus != null && !"".equals(fStatus)) {
				param.put("fStatus", fStatus);
			}
			if (fInstallTimeStart != null && !"".equals(fInstallTimeStart)) {
				param.put("fInstallTimeStart", fInstallTimeStart);
			}
			if (fInstallTimeEnd != null && !"".equals(fInstallTimeEnd)) {
				param.put("fInstallTimeEnd", fInstallTimeEnd);
			}
			ArrayList<Map<String, Object>> result = new ArrayList<>();
			result = tSenesorService.querySensorList(param);
			int total = tSenesorService.countSensorList(param);
			Map<String, Object> totalres = new HashMap<String, Object>();
			totalres.put("data", result);
			totalres.put("total", total);
			returnData.setData(totalres);
		} catch (Exception e) {
			// TODO: handle exception
			e.printStackTrace();
			returnData.setCode(SysCodeMsg.CODE_20001);
			returnData.setMessage(SysCodeMsg.MSG_20001);
		}
		return returnData;
	}

	/**
	 * 根据条件查询传感器
	 * 
	 * @return
	 */
	@RequestMapping(value = "getSenesorDetail", produces = { "application/json;charset=UTF-8" })
	@ResponseBody
	public ReturnData getSenesorDetail(@RequestParam String fId) {
		ReturnData returnData = new ReturnData();
		try {

			ArrayList<Map<String, Object>> result = new ArrayList<>();
			result = tSenesorService.getSenesorDetail(fId);
			returnData.setData(result);
		} catch (Exception e) {
			// TODO: handle exception
			e.printStackTrace();
			returnData.setCode(SysCodeMsg.CODE_20001);
			returnData.setMessage(SysCodeMsg.MSG_20001);
		}
		return returnData;
	}

	@RequestMapping(value = "getSensorFlowList", produces = { "application/json;charset=UTF-8" })
	@ResponseBody
	public ReturnData getSensorFlowList(@RequestParam String fId,
			String pageNum, String pageSize) {
		ReturnData returnData = new ReturnData();
		try {
			Map<String, Object> param = new HashMap<>();
			int start = (Integer.valueOf(pageNum) - 1)
					* Integer.valueOf(pageSize);
			param.put("start", start);
			param.put("fId", fId);
			param.put("end", Integer.valueOf(pageSize));
			ArrayList<Map<String, Object>> result = new ArrayList<>();
			result = tSenesorService.getSensorFlowList(param);
			int total = tSenesorService.countSensorFlowList(fId);
			Map<String, Object> totalres = new HashMap<String, Object>();
			totalres.put("data", result);
			totalres.put("total", total);
			returnData.setData(totalres);
		} catch (Exception e) {
			// TODO: handle exception
			e.printStackTrace();
			returnData.setCode(SysCodeMsg.CODE_20001);
			returnData.setMessage(SysCodeMsg.MSG_20001);
		}
		return returnData;
	}

	@RequestMapping(value = "updateSenesor", produces = { "application/json;charset=UTF-8" })
	@ResponseBody
	public ReturnData updateSenesor(TSenesor senesor) {
		ReturnData returnData = new ReturnData();
		try {
			tSenesorService.updateSenesor(senesor);
			returnData.setData("操作成功");
		} catch (Exception e) {
			// TODO: handle exception
			e.printStackTrace();
			returnData.setCode(SysCodeMsg.CODE_20001);
			returnData.setMessage(SysCodeMsg.MSG_20001);
		}
		return returnData;
	}

	@RequestMapping(value = "getSensorFlowDataList", produces = { "application/json;charset=UTF-8" })
	@ResponseBody
	public ReturnData getSensorFlowDataList(@RequestParam String fId,
			String pageNum, String pageSize) {
		ReturnData returnData = new ReturnData();
		try {
			Map<String, Object> param = new HashMap<>();
			int start = (Integer.valueOf(pageNum) - 1)
					* Integer.valueOf(pageSize);
			param.put("start", start);
			param.put("fId", fId);
			param.put("end", Integer.valueOf(pageSize));
			ArrayList<Map<String, Object>> result = new ArrayList<>();
			result = tSenesorService.getSensorFlowDataList(param);
			int total = tSenesorService.countSensorFlowDataList(fId);
			Map<String, Object> totalres = new HashMap<String, Object>();
			totalres.put("data", result);
			totalres.put("total", total);
			returnData.setData(totalres);
		} catch (Exception e) {
			// TODO: handle exception
			e.printStackTrace();
			returnData.setCode(SysCodeMsg.CODE_20001);
			returnData.setMessage(SysCodeMsg.MSG_20001);
		}
		return returnData;
	}

	@RequestMapping(value = "doWarming", produces = { "application/json;charset=UTF-8" })
	@ResponseBody
	public ReturnData doWarming(String tel, String fId, String fContent) {
		ReturnData returnData = new ReturnData();
		try {
			ArrayList<Map<String, Object>> result = tSenesorService
					.getSenesorDetail(fId);
			if (result.size() > 0) {
				Map<String, Object> detail = result.get(0);
				String status = "";
				List<SendResultBean> listItem = Sampler.sendOnce(tel,
						"【采砂监控系统】尊敬的用户," + "ID为" + detail.get("fId") + ""
								+ detail.get("fType") + "监测到异常，请及时查看！");
				if (listItem != null) {
					for (SendResultBean t : listItem) {
						if (t.getResult() < 1) {
							System.out.println("发送提交失败: " + t.getErrMsg());
							status="失败，"+t.getErrMsg();
							tSenesorService.insertRecord(Util.getUuid("1"),
									tel, fId, status);
						} else {
							status="发送成功: 消息编号<" + t.getMsgId()
									+ "> 总数<" + t.getTotal() + "> 余额<"
									+ t.getRemain() + ">";
							tSenesorService.insertRecord(Util.getUuid("1"),
									tel, fId, status);
						}
					}
				}
			}
		} catch (Exception e) {
			// TODO: handle exception
			e.printStackTrace();
			returnData.setCode(SysCodeMsg.CODE_20001);
			returnData.setMessage(SysCodeMsg.MSG_20001);
		}
		return returnData;
	}
}
