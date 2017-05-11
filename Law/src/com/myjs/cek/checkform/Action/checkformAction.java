package com.myjs.cek.checkform.Action;

import java.io.IOException;
import java.util.Date;
import java.util.List;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

import com.myjs.commons.AbstractAction;
import com.myjs.commons.DateTimeFormat;
import com.myjs.commons.JsonUtil;
import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.google.gson.JsonObject;
import com.myjs.cek.checkform.model.LCekCheckform;
import com.myjs.cek.checkform.service.checkformService;

/**
 * 製作可以配置的表單 This Class can support user to manager form it include form setting
 * and columns setting and organize setting
 * 
 * @author JiaJia
 *
 */
public class checkformAction extends AbstractAction {
	private static final Logger log = LogManager.getLogger(checkformAction.class);

	private static final long serialVersionUID = 2007228571110351047L;

	private checkformService checkformService;

	public checkformService getCheckformService() {
		return checkformService;
	}

	public void setCheckformService(checkformService checkformService) {
		this.checkformService = checkformService;
	}

	public String findCekForm() {
		try {
			log.debug("findCekForm start");
			log.debug("===== checkform info =====");
			String iptsearchformCode = super.getRequest().getParameter("iptsearchformCode");
			String iptsearchformType = super.getRequest().getParameter("iptsearchformType");
			String iptsearchformName = super.getRequest().getParameter("iptsearchformName");
			log.debug("iptsearchformCode = {} ,iptsearchformType = {} ,iptsearchformName = {}", iptsearchformCode,
					iptsearchformType, iptsearchformName);
			LCekCheckform inputCheckform = new LCekCheckform();
			inputCheckform.setCheckformCode(iptsearchformCode);
			inputCheckform.setCheckformType(iptsearchformType);
			inputCheckform.setCheckformName(iptsearchformName);

			List<LCekCheckform> LCekCheckformList = checkformService.findByProperty(inputCheckform);
			Gson gson = new GsonBuilder().setDateFormat("yyyy-MM-dd HH:mm:ss").create();
			JsonObject jsonResponse = new JsonObject();
			jsonResponse.add("data", gson.toJsonTree(LCekCheckformList));
			String responseLCekCheckformList = jsonResponse.toString();

			log.debug("responsedata = {}", responseLCekCheckformList);
			printToResponse(responseLCekCheckformList);
		} catch (Exception e) {
			log.error("findCekForm error ms=>", e);
		}
		log.debug("findCekForm end");
		return NONE;
	}

	public String addCekform() {
		try {
			log.debug("addCekform start");

			log.debug("===== checkform info =====");
			String iptcheckformCode = super.getRequest().getParameter("iptcheckformCode"),
					iptcheckformType = super.getRequest().getParameter("iptcheckformType"),
					iptcheckformName = super.getRequest().getParameter("iptcheckformName");
			log.debug("iptcheckformCode = {} , iptcheckformType = {} , iptcheckformName = {}", iptcheckformCode,
					iptcheckformType, iptcheckformName);

			LCekCheckform inputCheckform = new LCekCheckform();
			inputCheckform.setCheckformCode(iptcheckformCode);
			inputCheckform.setCheckformType(iptcheckformType);
			inputCheckform.setCheckformName(iptcheckformName);
			Date now = new Date();
			inputCheckform.setCreateDatetime(now);
			inputCheckform.setCreateUserId("asdasdasaa");
			inputCheckform.setFlowId("asdasd");
			inputCheckform.setModifyDatetime(now);
			inputCheckform.setModifyUserId("asdasdasdaa");
			inputCheckform.setStatus("Y");
			checkformService.addCheckform(inputCheckform);

			String result = JsonUtil.ajaxResultSuccess("新增成功").toString();
			log.debug("addCekform end {}", result);
			printToResponse(result);

		} catch (Exception e) {
			String result = JsonUtil.ajaxResultFalse("新增失敗:" + e).toString();
			try {
				printToResponse(result);
			} catch (IOException e1) {
				e1.printStackTrace();
				log.error("addCekform IOException ms=>", e1);
			}
			log.error("addCekform error ms=>", e);
		}
		return NONE;
	}

	public String deleteCekform() {
		try {
			log.debug("deleteCekform start");

			log.debug("===== checkform info =====");

			String iptcheckformId = super.getRequest().getParameter("deleteformId"),
					iptcheckformCode = super.getRequest().getParameter("deleteformCode"),
					iptcheckformType = super.getRequest().getParameter("deleteformType"),
					iptcheckformName = super.getRequest().getParameter("deleteformName"),
					iptcheckformCreatedatetime = super.getRequest().getParameter("deleteformCreatedatetime"),
					iptcheckformCreateuserId = super.getRequest().getParameter("deleteformCreateuserId"),
					iptcheckformFlowId = super.getRequest().getParameter("deleteformFlowId"),
					iptcheckformModifydatetime = super.getRequest().getParameter("deleteformModifydatetime"),
					iptcheckformModifyuserId = super.getRequest().getParameter("deleteformModifyuserId"),
					iptcheckformStatus = super.getRequest().getParameter("deleteformstatus");
			log.debug(
					"iptcheckformId = {} , iptcheckformCode = {} , iptcheckformType = {} , iptcheckformName = {} , iptcheckformCreatedatetime = {} , "
							+ "iptcheckformCreateuserId = {} , iptcheckformFlowId = {} , iptcheckformModifydatetime = {} , iptcheckformModifyuserId = {} , iptcheckformStatus = {}",
					iptcheckformId, iptcheckformCode, iptcheckformType, iptcheckformName, iptcheckformCreatedatetime,
					iptcheckformCreateuserId, iptcheckformFlowId, iptcheckformModifydatetime, iptcheckformModifyuserId,
					iptcheckformStatus);

			Date checkformCreatedatetime = DateTimeFormat.getTime(iptcheckformCreatedatetime);
			Date checkformModifydatetime = DateTimeFormat.getTime(iptcheckformModifydatetime);

			LCekCheckform inputCheckform = new LCekCheckform(iptcheckformId, iptcheckformName, iptcheckformType,
					iptcheckformCreateuserId, checkformCreatedatetime, iptcheckformModifyuserId,
					checkformModifydatetime, iptcheckformStatus, iptcheckformFlowId, iptcheckformCode);

			boolean Isdelete = checkformService.deleteCheckform(inputCheckform);
			String result = "";
			if (Isdelete) {
				result = JsonUtil.ajaxResultSuccess("刪除成功").toString();
			} else {
				result = JsonUtil.ajaxResultFalse("刪除失敗").toString();
			}

			log.debug("deleteCekform end {}", result);
			printToResponse(result);

		} catch (Exception e) {
			String result = JsonUtil.ajaxResultFalse("刪除失敗:" + e).toString();
			try {
				printToResponse(result);
			} catch (IOException e1) {
				e1.printStackTrace();
				log.error("deleteCekform IOException ms=>", e1);
			}
			log.error("deleteCekform error ms=>", e);
		}
		return NONE;
	}

	/**
	 * 查詢選擇表單的所有欄位 左欄為系統內該表單沒選擇欄位 右欄為該表單選擇的欄位
	 * 
	 * @return
	 */
	public String findCheckformColumn() {
		try {
			log.debug("findCheckformColumn start");
			log.debug("===== checkform info =====");
			String selectedformId = super.getRequest().getParameter("selectedformId");
			log.debug("selectedformId = {}", selectedformId);

			JsonObject jsonResponse = checkformService.findAllColumn(selectedformId);

			String responseLCekCheckformList = jsonResponse.toString();

			log.debug("responsedata = {}", responseLCekCheckformList);
			printToResponse(responseLCekCheckformList);
		} catch (Exception e) {
			log.error("findCekForm error ms=>", e);
		}
		log.debug("findCekForm end");
		return NONE;
	}

	/**
	 * 查詢選擇表單的所有附件 左欄為系統內該表單沒選擇附件 右欄為該表單選擇的附件
	 * 
	 * @return
	 */
	public String findCheckformFile() {
		try {
			log.debug("findCheckformColumn start");
			log.debug("===== checkform info =====");
			String selectedformId = super.getRequest().getParameter("selectedformId");
			log.debug("selectedformId = {}", selectedformId);

			JsonObject jsonResponse = checkformService.findAllFile(selectedformId);

			String responseLCekCheckformFileList = jsonResponse.toString();

			log.debug("responsedata = {}", responseLCekCheckformFileList);
			printToResponse(responseLCekCheckformFileList);
		} catch (Exception e) {
			log.error("findCekForm error ms=>", e);
		}
		log.debug("findCekForm end");
		return NONE;
	}
	
	public String saveSelectedColumn() {
		try {
			log.debug("saveSelectedColumn start");
			log.debug("===== checkformcolumn info =====");
			String saveColumns = super.getRequest().getParameter("saveColumns"),
					saveCheckform = super.getRequest().getParameter("saveCheckform"),
					removeColumns = super.getRequest().getParameter("removeColumns");

			log.debug("saveColumns = {}, saveCheckform = {}, removeColumns = {}", saveColumns, saveCheckform,
					removeColumns);

			JsonObject jsonResponse = checkformService.saveSelectedColumns(saveColumns, saveCheckform,removeColumns);

			String responseLCekCheckformList = jsonResponse.toString();

			log.debug("responsedata = {}", responseLCekCheckformList);
			printToResponse(responseLCekCheckformList);
		} catch (Exception e) {
			log.error("saveSelectedColumn error ms=>", e);
		}
		log.debug("saveSelectedColumn end");
		return NONE;
	}
	
	public String saveSelectedFile() {
		try {
			log.debug("saveSelectedFile start");
			log.debug("===== checkformfile info =====");
			String saveFiles = super.getRequest().getParameter("saveFiles"),
					saveCheckform = super.getRequest().getParameter("saveCheckform"),
					removeFiles = super.getRequest().getParameter("removeFiles");

			log.debug("saveFiles = {}, saveCheckform = {}, removeFiles = {}", saveFiles, saveCheckform,
					removeFiles);

			JsonObject jsonResponse = checkformService.saveSelectedFiles(saveFiles, saveCheckform,removeFiles);

			String responseLCekCheckformList = jsonResponse.toString();

			log.debug("responsedata = {}", responseLCekCheckformList);
			printToResponse(responseLCekCheckformList);
		} catch (Exception e) {
			log.error("saveSelectedFile error ms=>", e);
		}
		log.debug("saveSelectedFile end");
		return NONE;
	}
	
}
