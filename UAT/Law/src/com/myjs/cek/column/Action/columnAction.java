package com.myjs.cek.column.Action;

import java.io.IOException;
import java.util.Date;
import java.util.List;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.google.gson.JsonObject;
import com.myjs.cek.checkform.model.LCekColumn;
import com.myjs.cek.column.service.columnService;
import com.myjs.commons.AbstractAction;
import com.myjs.commons.DateTimeFormat;
import com.myjs.commons.JsonUtil;

/**
 * 製作表單的預設欄位
 * 
 * @author JiaJia
 *
 */
public class columnAction extends AbstractAction {

	private static final long serialVersionUID = -1779417131168546737L;

	private static final Logger log = LogManager.getLogger(columnAction.class);
	private columnService columnService;

	public columnService getColumnService() {
		return columnService;
	}

	public void setColumnService(columnService columnService) {
		this.columnService = columnService;
	}

	public String findColumn() {
		try {
			log.debug("findColumn start");
			log.debug("===== column info =====");
			String iptsearchcolumnName = super.getRequest().getParameter("iptsearchcolumnName"),
					iptsearchcolumnType = super.getRequest().getParameter("iptsearchcolumnType");
			log.debug("iptsearchcolumnName = {} ,iptsearchcolumnType = {}", iptsearchcolumnName, iptsearchcolumnType);

			LCekColumn inputCekColumn = new LCekColumn();
			inputCekColumn.setColumnName(iptsearchcolumnName);
			inputCekColumn.setColumnType(iptsearchcolumnType);

			List<LCekColumn> LCekColumnList = columnService.findByProperty(inputCekColumn);
			Gson gson = new GsonBuilder().setDateFormat("yyyy-MM-dd HH:mm:ss").create();
			JsonObject jsonResponse = new JsonObject();
			jsonResponse.add("data", gson.toJsonTree(LCekColumnList));
			String responseLCekColumnList = jsonResponse.toString();

			log.debug("responsedata = {}", responseLCekColumnList);
			printToResponse(responseLCekColumnList);
		} catch (Exception e) {
			log.error("findColumn error msg=>", e);
		}
		log.debug("findColumn end");
		return NONE;
	}

	public String addColumn() {
		try {
			log.debug("add Column start");
			log.debug("=====add column info=====");
			String iptaddcolumnName = super.getRequest().getParameter("iptaddcolumnName"),
					iptaddcolumnSize = super.getRequest().getParameter("iptaddcolumnSize"),
					iptaddcolumnType = super.getRequest().getParameter("iptaddcolumnType");
			log.debug("iptaddcolumnName = {} ,iptaddcolumnSize = {} ,iptaddcolumnType = {}", iptaddcolumnName,
					iptaddcolumnSize, iptaddcolumnType);

			int addcolumnSize = Integer.valueOf(iptaddcolumnSize);

			Date now = new Date();
			LCekColumn LCekColumn = new LCekColumn(null, iptaddcolumnName, null, "N", iptaddcolumnType, addcolumnSize,
					"Y", "createUserId", now, "modifyUserId", now);
			boolean IsaddColumn = columnService.addCekColumn(LCekColumn);
			String result = "";
			if (IsaddColumn) {
				result = JsonUtil.ajaxResultSuccess("新增成功").toString();
			} else {
				result = JsonUtil.ajaxResultSuccess("新增失敗").toString();
			}
			log.debug("addCekform end {}", result);
			printToResponse(result);

		} catch (Exception e) {
			log.error("add Column error msg=>", e);
		}
		return NONE;
	}

	public String deleteColumn() {
		try {
			log.debug("deleteColumn start");

			log.debug("===== column info =====");

			String deletecolumnId = super.getRequest().getParameter("deletecolumnId"),
					deletecolumnName = super.getRequest().getParameter("deletecolumnName"),
					deletecolumnAlert = super.getRequest().getParameter("deletecolumnAlert"),
					deletecolumnIsdefault = super.getRequest().getParameter("deletecolumnIsdefault"),
					deletecolumnType = super.getRequest().getParameter("deletecolumnType"),
					deletecolumnSize = super.getRequest().getParameter("deletecolumnSize"),
					deletecolumnStatus = super.getRequest().getParameter("deletecolumnStatus"),
					deletecolumnCreateUserId = super.getRequest().getParameter("deletecolumnCreateUserId"),
					deletecolumnCreateDatetime = super.getRequest().getParameter("deletecolumnCreateDatetime"),
					deletecolumnModifyUserId = super.getRequest().getParameter("deletecolumnModifyUserId"),
					deletecolumnModifyDatetime = super.getRequest().getParameter("deletecolumnModifyDatetime");
			log.debug(
					"deletecolumnId = {} , deletecolumnName = {} , deletecolumnAlert = {} , deletecolumnIsdefault = {} , deletecolumnType = {} , "
							+ "deletecolumnSize = {} , deletecolumnStatus = {} , deletecolumnCreateUserId = {} , "
							+ "deletecolumnCreateDatetime = {} , deletecolumnModifyUserId = {} , deletecolumnModifyDatetime = {}",
					deletecolumnId, deletecolumnName, deletecolumnAlert, deletecolumnIsdefault, deletecolumnType,
					deletecolumnSize, deletecolumnStatus, deletecolumnCreateUserId,
					deletecolumnCreateDatetime, deletecolumnModifyUserId, deletecolumnModifyDatetime);

			int addcolumnSize = Integer.valueOf(deletecolumnSize);
			Date columnCreatedatetime = DateTimeFormat.getTime(deletecolumnCreateDatetime);
			Date columnModifydatetime = DateTimeFormat.getTime(deletecolumnModifyDatetime);

			LCekColumn LCekColumn = new LCekColumn(deletecolumnId, deletecolumnName, deletecolumnAlert, deletecolumnIsdefault, deletecolumnType, addcolumnSize,
					deletecolumnStatus, deletecolumnCreateUserId, columnCreatedatetime, deletecolumnModifyUserId, columnModifydatetime);

			boolean Isdelete = columnService.deleteCekColumn(LCekColumn);
			String result = "";
			if (Isdelete) {
				result = JsonUtil.ajaxResultSuccess("刪除成功").toString();
			} else {
				result = JsonUtil.ajaxResultFalse("刪除失敗").toString();
			}

			log.debug("deleteColumn end {}", result);
			printToResponse(result);

		} catch (Exception e) {
			String result = JsonUtil.ajaxResultFalse("刪除失敗:" + e).toString();
			try {
				printToResponse(result);
			} catch (IOException e1) {
				e1.printStackTrace();
				log.error("deleteColumn IOException ms=>", e1);
			}
			log.error("deleteColumn error ms=>", e);
		}
		return NONE;
	}
}
