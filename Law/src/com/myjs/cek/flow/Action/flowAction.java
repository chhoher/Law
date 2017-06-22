package com.myjs.cek.flow.Action;

import com.myjs.commons.AbstractAction;
import com.myjs.commons.DateTimeFormat;
import com.myjs.commons.JsonUtil;

import java.io.IOException;
import java.util.Date;
import java.util.List;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.google.gson.JsonObject;
import com.myjs.cek.checkform.model.LCekFlow;
import com.myjs.cek.checkform.model.LCekFlowsub;
import com.myjs.cek.flow.service.flowService;

/**
 * 2017-03-27 流程設定主要頁面 前半包含流程設定及流程設定內的子流程設定 後半包含申請表單的顯示 紀錄表單內容會另外寫到Record內
 * 這裡後面還需引用Mail寄送
 * 
 * @author JiaJia
 *
 */
public class flowAction extends AbstractAction {
	private static final Logger log = LogManager.getLogger(flowAction.class);

	private static final long serialVersionUID = -1980210843831482763L;
	private flowService flowService;

	public flowService getFlowService() {
		return flowService;
	}

	public void setFlowService(flowService flowService) {
		this.flowService = flowService;
	}

	public String findFlow() {
		try {
			log.debug("findFlow start");
			log.debug("===== flow info =====");
			String iptsearchflowCode = super.getRequest().getParameter("iptsearchflowCode");
			String iptsearchflowType = super.getRequest().getParameter("iptsearchflowType");
			String iptsearchflowName = super.getRequest().getParameter("iptsearchflowName");
			log.debug("iptsearchflowCode = {} ,iptsearchflowType = {} ,iptsearchflowName = {}", iptsearchflowCode,
					iptsearchflowType, iptsearchflowName);
			LCekFlow searchFlow = new LCekFlow();
			searchFlow.setFlowCode(iptsearchflowCode);
			searchFlow.setFlowType(iptsearchflowType);
			searchFlow.setFlowName(iptsearchflowName);

			List<LCekFlow> LCekFlowList = flowService.findByProperty(searchFlow);
			Gson gson = new GsonBuilder().setDateFormat("yyyy-MM-dd HH:mm:ss").create();
			JsonObject jsonResponse = new JsonObject();
			jsonResponse.add("data", gson.toJsonTree(LCekFlowList));
			String responseLCekFlowList = jsonResponse.toString();

			log.debug("responsedata = {}", responseLCekFlowList);
			printToResponse(responseLCekFlowList);
		} catch (Exception e) {
			sendException(e);
			log.error("findFlow error ms=>", e);
		}
		log.debug("findFlow end");
		return NONE;
	}

	public String addFlow() {
		try {
			log.debug("addFlow start");
			log.debug("=====add flow info=====");
			String iptaddflowCode = super.getRequest().getParameter("iptaddflowCode"),
					iptaddflowType = super.getRequest().getParameter("iptaddflowType"),
					iptaddflowName = super.getRequest().getParameter("iptaddflowName");
			log.debug("iptaddflowCode = {} ,iptaddflowType = {} ,iptaddflowName = {}", iptaddflowCode, iptaddflowType,
					iptaddflowName);
			
			Date now = new Date();
			@SuppressWarnings("static-access")
			LCekFlow LCekFlow = new LCekFlow(null, iptaddflowCode, iptaddflowName, iptaddflowType, "N", "Y", now,
					this.getSessionLoginUser().getMemno(), now, this.getSessionLoginUser().getMemno());
			boolean IsaddFlow = flowService.addCekFlow(LCekFlow);
			String result = "";
			if (IsaddFlow) {
				result = JsonUtil.ajaxResultSuccess("新增成功").toString();
			} else {
				result = JsonUtil.ajaxResultSuccess("新增失敗").toString();
			}
			log.debug("addFlow end {}", result);
			printToResponse(result);
		} catch (Exception e) {
			sendException(e);
			log.error("addFlow error msg=>", e);
		}
		return NONE;
	}

	public String deleteFlow() {
		try {
			log.debug("deleteFlow start");

			log.debug("===== Flow info =====");
			String deleteflowId = super.getRequest().getParameter("deleteflowId"),
					deleteflowCode = super.getRequest().getParameter("deleteflowCode"),
					deleteflowName = super.getRequest().getParameter("deleteflowName"),
					deleteflowType = super.getRequest().getParameter("deleteflowType"),
					deleteisDelete = super.getRequest().getParameter("deleteisDelete"),
					deleteavaliable = super.getRequest().getParameter("deleteavaliable"),
					deletecreateDatetime = super.getRequest().getParameter("deletecreateDatetime"),
					deletecreateUserId = super.getRequest().getParameter("deletecreateUserId"),
					deletemodifyDatetime = super.getRequest().getParameter("deletemodifyDatetime"),
					deletemodifyUserId = super.getRequest().getParameter("deletemodifyUserId");
			log.debug(
					"deleteflowId = {} , deleteflowCode = {} , deleteflowName = {} , deleteflowType = {} , deleteisDelete = {} , "
							+ "deleteavaliable = {} , deletecreateDatetime = {} , deletecreateUserId = {} , "
							+ "deletemodifyDatetime = {} , deletemodifyUserId = {}",
					deleteflowId, deleteflowCode, deleteflowName, deleteflowType, deleteisDelete, deleteavaliable,
					deletecreateDatetime, deletecreateUserId, deletemodifyDatetime, deletemodifyUserId);

			Date flowCreateDatetime = DateTimeFormat.getTime(deletecreateDatetime);
			Date flowModifyDatetime = DateTimeFormat.getTime(deletemodifyDatetime);

			LCekFlow LCekFlow = new LCekFlow(deleteflowId, deleteflowCode, deleteflowName, deleteflowType,
					deleteisDelete, deleteavaliable, flowCreateDatetime, deletecreateUserId, flowModifyDatetime,
					deletemodifyUserId);

			boolean Isdelete = flowService.deleteCekFlow(LCekFlow);
			String result = "";
			if (Isdelete) {
				result = JsonUtil.ajaxResultSuccess("刪除成功").toString();
			} else {
				result = JsonUtil.ajaxResultFalse("刪除失敗").toString();
			}
			log.debug("deleteCekFlow end {}", result);
			printToResponse(result);
		} catch (Exception e) {
			sendException(e);
			String result = JsonUtil.ajaxResultFalse("刪除失敗:" + e).toString();
			try {
				printToResponse(result);
			} catch (IOException e1) {
				e1.printStackTrace();
				log.error("deleteFlow IOException ms=>", e1);
			}
			log.error("deleteFlow error ms=>", e);
		}
		return NONE;
	}
	
	// 查詢子流程內容
	public String findFlowSub() {
		try {
			log.debug("findFlowSub start");
			log.debug("===== flow info =====");
			String selectedflowId = super.getRequest().getParameter("selectedflowId");
			log.debug("selectedflowId = {}", selectedflowId);
			LCekFlowsub selectedFlow = new LCekFlowsub();
			selectedFlow.setFlowId(selectedflowId);

			List<LCekFlowsub> LCekFlowList = flowService.findFlowsubByProperty(selectedFlow);
			Gson gson = new GsonBuilder().setDateFormat("yyyy-MM-dd HH:mm:ss").create();
			JsonObject jsonResponse = new JsonObject();
			jsonResponse.add("data", gson.toJsonTree(LCekFlowList));
			String responseLCekFlowList = jsonResponse.toString();

			log.debug("responsedata = {}", responseLCekFlowList);
			printToResponse(responseLCekFlowList);
		} catch (Exception e) {
			sendException(e);
			log.error("findFlowSub error ms=>", e);
		}
		log.debug("findFlowSub end");
		return NONE;
	}
}
