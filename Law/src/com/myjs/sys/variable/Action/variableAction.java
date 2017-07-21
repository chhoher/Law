package com.myjs.sys.variable.Action;

import java.io.IOException;
import java.util.Date;
import java.util.List;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

import com.myjs.sys.variable.model.LSysVariable;
import com.myjs.sys.variable.service.variableService;
import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.google.gson.JsonObject;
import com.myjs.commons.AbstractAction;
import com.myjs.commons.DateTimeFormat;
import com.myjs.commons.JsonUtil;

/**
 * 2017-03-31 資料字典設定、系統參數
 * @author JiaJia
 *
 */
public class variableAction extends AbstractAction {

	private static final long serialVersionUID = -7952995672476548155L;

	private static final Logger log = LogManager.getLogger(variableAction.class);
	private variableService variableService;
	
	public variableService getVariableService() {
		return variableService;
	}
	public void setVariableService(variableService variableService) {
		this.variableService = variableService;
	}
	
	/**
	 * 查詢資料類型(大類)
	 * @return
	 */
	public String findVariable() {
		try {
			log.debug("findVariable start");
			log.debug("===== variable info =====");
			String iptsearchvariableName = super.getRequest().getParameter("iptsearchvariableName");
			log.debug("iptsearchvariableName = {}", iptsearchvariableName);

			LSysVariable inputSysVariable = new LSysVariable();
			inputSysVariable.setVariableName(iptsearchvariableName);

			List<LSysVariable> LSysVariableList = variableService.findByProperty(inputSysVariable);
			Gson gson = new GsonBuilder().setDateFormat("yyyy-MM-dd HH:mm:ss").create();
			JsonObject jsonResponse = new JsonObject();
			jsonResponse.add("data", gson.toJsonTree(LSysVariableList));
			String responseLCekColumnList = jsonResponse.toString();

			log.debug("responsedata = {}", responseLCekColumnList);
			printToResponse(responseLCekColumnList);
		} catch (Exception e) {
			sendException(e);
			log.error("findVariable error msg=>", e);
		}
		log.debug("findVariable end");
		return NONE;
	}
	
	/**
	 * 新增資料(大類)
	 * @return
	 */
	public String addVariable() {
		try {
			log.debug("add Variable start");
			log.debug("=====add variable info=====");
			String iptaddvariableName = super.getRequest().getParameter("iptaddvariableName");
			log.debug("iptaddvariableName = {}", iptaddvariableName);

			Date now = new Date();
			LSysVariable LSysVariable = new LSysVariable(null, null, iptaddvariableName, now,
					"createUserId", now, "modifyUserId", "N", null);
			boolean IsaddVariable = variableService.addVariable(LSysVariable);
			String result = "";
			if (IsaddVariable) {
				result = JsonUtil.ajaxResultSuccess("新增成功").toString();
			} else {
				result = JsonUtil.ajaxResultSuccess("新增失敗").toString();
			}
			log.debug("addVariable end {}", result);
			printToResponse(result);

		} catch (Exception e) {
			sendException(e);
			log.error("add Variable error msg=>", e);
		}
		return NONE;
	}
	
	public String deleteVariable() {
		try {
			log.debug("deleteVariable start");

			log.debug("===== variable info =====");

			String deletevariableId = super.getRequest().getParameter("deletevariableId"),
					deletevariableType = super.getRequest().getParameter("deletevariableType"),
					deletevariableName = super.getRequest().getParameter("deletevariableName"),
					deletevariablecreateDatetime = super.getRequest().getParameter("deletevariablecreateDatetime"),
					deletevariablecreateUserId = super.getRequest().getParameter("deletevariablecreateUserId"),
					deletevariablemodifyDatetime = super.getRequest().getParameter("deletevariablemodifyDatetime"),
					deletevariablemodifyUserId = super.getRequest().getParameter("deletevariablemodifyUserId"),
					deletevariableisDelete = super.getRequest().getParameter("deletevariableisDelete");
			log.debug(
					"deletevariableId = {} , deletevariableType = {} , deletevariableName = {} , deletevariablecreateDatetime = {} , deletevariablecreateUserId = {} , "
							+ "deletevariablemodifyDatetime = {} , deletevariablemodifyUserId = {} , deletevariableisDelete = {}",
							deletevariableId, deletevariableType, deletevariableName, deletevariablecreateDatetime, deletevariablecreateUserId,
							deletevariablemodifyDatetime, deletevariablemodifyUserId, deletevariableisDelete);

			Date variableCreatedatetime = DateTimeFormat.getTime(deletevariablecreateDatetime);
			Date variableModifydatetime = DateTimeFormat.getTime(deletevariablemodifyDatetime);

			LSysVariable LSysVariable = new LSysVariable(deletevariableId, deletevariableType, deletevariableName, variableCreatedatetime,
					deletevariablecreateUserId, variableModifydatetime, deletevariablemodifyUserId, deletevariableisDelete, null);

			boolean Isdelete = variableService.deleteVariable(LSysVariable);
			String result = "";
			if (Isdelete) {
				result = JsonUtil.ajaxResultSuccess("刪除成功").toString();
			} else {
				result = JsonUtil.ajaxResultFalse("刪除失敗").toString();
			}

			log.debug("deleteVariable end {}", result);
			printToResponse(result);

		} catch (Exception e) {
			sendException(e);
			String result = JsonUtil.ajaxResultFalse("刪除失敗:" + e).toString();
			try {
				printToResponse(result);
			} catch (IOException e1) {
				e1.printStackTrace();
				log.error("deleteVariable IOException ms=>", e1);
			}
			log.error("deleteVariable error ms=>", e);
		}
		return NONE;
	}
	
	/**
	 * 查詢資料名稱(小類)
	 * @return
	 */
	public String findVariableSub() {
		try {
			log.debug("findVariableSub start");
			log.debug("===== variable info =====");
			String selectedvariableId = super.getRequest().getParameter("selectedvariableId");
			log.debug("selectedvariableId = {}", selectedvariableId);

			LSysVariable inputSysVariable = new LSysVariable();
			inputSysVariable.setVariableType(selectedvariableId);

			List<LSysVariable> LSysVariableSubList = variableService.findVariableSubByProperty(inputSysVariable);
			Gson gson = new GsonBuilder().setDateFormat("yyyy-MM-dd HH:mm:ss").create();
			JsonObject jsonResponse = new JsonObject();
			jsonResponse.add("data", gson.toJsonTree(LSysVariableSubList));
			String responseLCekColumnList = jsonResponse.toString();

			log.debug("responsedata = {}", responseLCekColumnList);
			printToResponse(responseLCekColumnList);
		} catch (Exception e) {
			sendException(e);
			log.error("findVariableSub error msg=>", e);
		}
		log.debug("findVariableSub end");
		return NONE;
	}
	
	/**
	 * 新增資料名稱(小類)
	 * @return
	 */
	public String addVariableSub() {
		try {
			log.debug("addVariableSub start");
			log.debug("=====add variable info=====");
			String selectedvariableId = super.getRequest().getParameter("selectedvariableId");
			String iptaddvariablesubName = super.getRequest().getParameter("iptaddvariablesubName");
			log.debug("selectedvariableId = {}, iptaddvariablesubName = {}", selectedvariableId, iptaddvariablesubName);

			Date now = new Date();
			LSysVariable LSysVariable = new LSysVariable(null, selectedvariableId, iptaddvariablesubName, now,
					"createUserId", now, "modifyUserId", "N", null);
			boolean IsaddVariable = variableService.addVariable(LSysVariable);
			String result = "";
			if (IsaddVariable) {
				result = JsonUtil.ajaxResultSuccess("新增成功").toString();
			} else {
				result = JsonUtil.ajaxResultSuccess("新增失敗").toString();
			}
			log.debug("addVariableSub end {}", result);
			printToResponse(result);

		} catch (Exception e) {
			sendException(e);
			log.error("addVariableSub error msg=>", e);
		}
		return NONE;
	}
	
	/**
	 * add By Jia 2017-07-21
	 * 新增查詢Variable的子項目(直接抓出不查詢DB)
	 * @return
	 */
	public String findVariableParameterByVariableId(){
		try{
			log.debug("findVariableParameterByVariableId start");
			String variableId = super.getRequest().getParameter("variableId");
			String responseString = variableService.findVariableParameterByVariableId(variableId);
			log.debug("responseString = {}", responseString);
			printToResponse(responseString);
		}catch(Exception e){
			sendException(e);
			log.error("findVariableParameterByVariableId error msg=>", e);
		}
		return NONE;
	}
}
