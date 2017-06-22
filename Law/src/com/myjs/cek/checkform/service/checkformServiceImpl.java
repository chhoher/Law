package com.myjs.cek.checkform.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

import com.myjs.cek.checkform.Dao.checkformDao;
import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.google.gson.JsonObject;
import com.myjs.cek.checkform.Dao.checkformColumnDao;
import com.myjs.cek.checkform.Dao.checkformFileDao;
import com.myjs.cek.checkform.model.LCekCheckform;
import com.myjs.cek.checkform.model.LCekCheckformColumn;
import com.myjs.cek.checkform.model.LCekCheckformFile;
import com.myjs.cek.checkform.model.LCekColumn;
import com.myjs.commons.JsonUtil;
import com.myjs.sys.file.model.LSysFile;

public class checkformServiceImpl implements checkformService {

	private static final Logger log = LogManager.getLogger(checkformServiceImpl.class);

	private checkformDao checkformDao;
	private checkformColumnDao checkformColumnDao;
	private checkformFileDao checkformFileDao;

	public checkformDao getCheckformDao() {
		return checkformDao;
	}

	public void setCheckformDao(checkformDao checkformDao) {
		this.checkformDao = checkformDao;
	}

	public checkformColumnDao getCheckformColumnDao() {
		return checkformColumnDao;
	}

	public void setCheckformColumnDao(checkformColumnDao checkformColumnDao) {
		this.checkformColumnDao = checkformColumnDao;
	}

	public checkformFileDao getCheckformFileDao() {
		return checkformFileDao;
	}

	public void setCheckformFileDao(checkformFileDao checkformFileDao) {
		this.checkformFileDao = checkformFileDao;
	}

	public List<LCekCheckform> findByProperty(LCekCheckform queryLCekCheckform) throws Exception {
		if (queryLCekCheckform == null) {
			return checkformDao.findAll();
		} else {
			// return checkformDao.findByExample(queryLCekCheckform);
			return checkformDao.findbyproperties(queryLCekCheckform.getCheckformCode(),
					queryLCekCheckform.getCheckformType(), queryLCekCheckform.getCheckformName());
		}
	}

	public String addCheckform(LCekCheckform addCheckform) throws Exception {
		checkformDao.save(addCheckform);
		return "";
	}

	public boolean deleteCheckform(LCekCheckform addCheckform) throws Exception {
		return checkformDao.delete(addCheckform);
	}

	/**
	 * 將查詢回來的List切成兩個Json丟回來
	 */
	public JsonObject findAllColumn(String checkformId) throws Exception {

		Gson gson = new GsonBuilder().setDateFormat("yyyy-MM-dd HH:mm:ss").create();
		JsonObject jsonResponse = new JsonObject();

		List<Map<String, Object>> columnList = checkformColumnDao.findThisCheckformColumn(checkformId);
		List<LCekColumn> MapColumnListLeft = new ArrayList<LCekColumn>();
		List<LCekColumn> MapColumnListRight = new ArrayList<LCekColumn>();

		for (Map<?, ?> map : columnList) {

			LCekColumn lcekcolumn = new LCekColumn();
			lcekcolumn.setColumnId((String) map.get("column_id"));
			lcekcolumn.setColumnName((String) map.get("column_name"));
			lcekcolumn.setVocheckformcolumnId((String) map.get("checkform_column_id"));
			lcekcolumn.setVoisdelete((String) map.get("is_delete"));

			// 如果不是Null表示該表單有選此欄位，表示在右
			if (lcekcolumn.getVocheckformcolumnId() != null && !lcekcolumn.getVocheckformcolumnId().equals("")
					&& lcekcolumn.getVoisdelete() != null && lcekcolumn.getVoisdelete().equals("N")) {
				MapColumnListRight.add(lcekcolumn);
			} else {
				// 如果是Null表示該表單沒有選此欄位，表示在左
				MapColumnListLeft.add(lcekcolumn);
			}

			jsonResponse.add("leftdata", gson.toJsonTree(MapColumnListLeft));
			jsonResponse.add("rightdata", gson.toJsonTree(MapColumnListRight));
		}
		return jsonResponse;
	}

	/**
	 * 將查詢回來的List切成兩個Json丟回來
	 */
	public JsonObject findAllFile(String checkformId) throws Exception {

		Gson gson = new GsonBuilder().setDateFormat("yyyy-MM-dd HH:mm:ss").create();
		JsonObject jsonResponse = new JsonObject();

		List<Map<String, Object>> fileList = checkformFileDao.findThisCheckformFile(checkformId);
		List<LSysFile> MapFileListLeft = new ArrayList<LSysFile>();
		List<LSysFile> MapFileListRight = new ArrayList<LSysFile>();

		for (Map<?, ?> map : fileList) {

			LSysFile lcekfile = new LSysFile();
			lcekfile.setFileId((String) map.get("file_id"));
			lcekfile.setFileName((String) map.get("file_name"));
			lcekfile.setVocheckformfileId((String) map.get("checkform_file_id"));
			lcekfile.setVoisdelete((String) map.get("is_delete"));

			// 如果不是Null表示該表單有選此附件，表示在右
			if (lcekfile.getVocheckformfileId() != null && !lcekfile.getVocheckformfileId().equals("")
					&& lcekfile.getVoisdelete() != null && lcekfile.getVoisdelete().equals("N")) {
				MapFileListRight.add(lcekfile);
			} else {
				// 如果是Null表示該表單沒有選此附件，表示在左
				MapFileListLeft.add(lcekfile);
			}

			jsonResponse.add("leftdata", gson.toJsonTree(MapFileListLeft));
			jsonResponse.add("rightdata", gson.toJsonTree(MapFileListRight));
		}
		return jsonResponse;
	}
	
	public JsonObject saveSelectedColumns(String saveColumns, String saveCheckform, String removeColumns) throws Exception {
		log.debug("saveSelectedColumns start");
		if (saveColumns != null && !saveColumns.equals("")) {
			// 處理抓到的columns
			String[] saveColumnsList = saveColumns.split(",");
			log.debug("saveColumnsList.length = {}", saveColumnsList.length);
			for (int i = 0; i < saveColumnsList.length; i++) {
				String columnId = saveColumnsList[i].substring(0, saveColumnsList[i].indexOf("-"));
				String checkformColumnId = saveColumnsList[i].substring(saveColumnsList[i].indexOf("-") + 1);
				log.debug("columnId = {} , checkformColumnId = {}", columnId, checkformColumnId);
				if (checkformColumnId.equals("undefined")) {
					checkformColumnId = null;
				}
				LCekCheckformColumn lcekcheckformcolumn = new LCekCheckformColumn(checkformColumnId, saveCheckform,
						columnId, "N");
				checkformColumnDao.saveOrUpdate(lcekcheckformcolumn);
			}
		}

		if (removeColumns != null && !removeColumns.equals("")) {
			// 處理需要移除的columns
			String[] removeColumnsList = removeColumns.split(",");
			String removeColumnsIds = "";
			for (int i = 0; i < removeColumnsList.length; i++) {
				removeColumnsIds += "'" + removeColumnsList[i].substring(0, removeColumnsList[i].indexOf("-"))
						+ "'";
				if (i < removeColumnsList.length - 1) {
					removeColumnsIds += ",";
				}
			}
			log.debug("removeColumnsIds = {}", removeColumnsIds);
			checkformColumnDao.updateRemoveColumns(removeColumnsIds, saveCheckform);// 將is_delete改為Y表示刪除
		}
		return JsonUtil.ajaxResultSuccess("儲存成功");
	}
	
	public JsonObject saveSelectedFiles(String saveFiles, String saveCheckform, String removeFiles) throws Exception {
		log.debug("saveSelectedFiles start");
		if (saveFiles != null && !saveFiles.equals("")) {
			// 處理抓到的columns
			String[] saveFilesList = saveFiles.split(",");
			log.debug("saveFilesList.length = {}", saveFilesList.length);
			for (int i = 0; i < saveFilesList.length; i++) {
				String fileId = saveFilesList[i].substring(0, saveFilesList[i].indexOf("-"));
				String checkformFileId = saveFilesList[i].substring(saveFilesList[i].indexOf("-") + 1);
				log.debug("fileId = {} , checkformFileId = {}", fileId, checkformFileId);
				if (checkformFileId.equals("undefined")) {
					checkformFileId = null;
				}
				LCekCheckformFile lcekcheckformfile = new LCekCheckformFile(checkformFileId, saveCheckform,
						fileId, "N");
				checkformFileDao.saveOrUpdate(lcekcheckformfile);
			}
		}

		if (removeFiles != null && !removeFiles.equals("")) {
			// 處理需要移除的附件
			String[] removeFilesList = removeFiles.split(",");
			String removeFilesIds = "";
			for (int i = 0; i < removeFilesList.length; i++) {
				removeFilesIds += "'" + removeFilesList[i].substring(0, removeFilesList[i].indexOf("-"))
						+ "'";
				if (i < removeFilesList.length - 1) {
					removeFilesIds += ",";
				}
			}
			log.debug("removeFilesIds = {}", removeFilesIds);
			checkformFileDao.updateRemoveFiles(removeFilesIds, saveCheckform);// 將is_delete改為Y表示刪除
		}
		return JsonUtil.ajaxResultSuccess("儲存成功");
	}
	
}
