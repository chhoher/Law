package com.myjs.sys.file.Action;

import java.io.File;
import java.io.IOException;
import java.util.Date;
import java.util.List;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

import com.myjs.sys.file.model.LSysFile;
import com.myjs.sys.file.service.fileService;
import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.google.gson.JsonObject;
import com.myjs.commons.AbstractAction;
import com.myjs.commons.DateTimeFormat;
import com.myjs.commons.JsonUtil;

/**
 * 2017-04-06 文件管理
 * 
 * @author JiaJia
 *
 */
public class fileAction extends AbstractAction {

	private static final long serialVersionUID = 112637059810183764L;

	/**
	 * 上傳文件格式 File 文件名稱
	 */
	// 上傳文件的類型
	private String uploadContentType;
	// 上傳文件的名稱
	private String uploadFileName;

	private File upload[];

	public String getUploadContentType() {
		return uploadContentType;
	}

	public void setUploadContentType(String uploadContentType) {
		this.uploadContentType = uploadContentType;
	}

	public String getUploadFileName() {
		return uploadFileName;
	}

	public void setUploadFileName(String uploadFileName) {
		this.uploadFileName = uploadFileName;
	}

	public File[] getUpload() {
		return upload;
	}

	public void setUpload(File[] upload) {
		this.upload = upload;
	}

	private static final Logger log = LogManager.getLogger(fileAction.class);
	private fileService fileService;

	public fileService getFileService() {
		return fileService;
	}

	public void setFileService(fileService fileService) {
		this.fileService = fileService;
	}

	/**
	 * 查詢文件
	 * 
	 * @return
	 */
	public String findFile() {
		try {
			log.debug("findFile start");
			log.debug("===== file info =====");
			String iptsearchfileName = super.getRequest().getParameter("iptsearchfileName");
			log.debug("iptsearchfileName = {}", iptsearchfileName);

			LSysFile inputSysFile = new LSysFile();
			inputSysFile.setFileName(iptsearchfileName);

			List<LSysFile> LSysFileList = fileService.findByProperty(inputSysFile);
			Gson gson = new GsonBuilder().setDateFormat("yyyy-MM-dd HH:mm:ss").create();
			JsonObject jsonResponse = new JsonObject();
			jsonResponse.add("data", gson.toJsonTree(LSysFileList));
			String responseLSysFileList = jsonResponse.toString();

			log.debug("responsedata = {}", responseLSysFileList);
			printToResponse(responseLSysFileList);
		} catch (Exception e) {
			log.error("findFile error msg=>", e);
		}
		log.debug("findFile end");
		return NONE;
	}

	/**
	 * 新增文件
	 * 
	 * @return
	 */
	public String addFile() {
		try {
			log.debug("addFile start");
			log.debug("=====add file info=====");
			String iptaddfileName = super.getRequest().getParameter("iptaddfileName"),
					iptaddfileupload = super.getRequest().getParameter("iptaddfileupload"),
					iptaddfileuploaddatetime = super.getRequest().getParameter("iptaddfileuploaddatetime");
			log.debug("iptaddfileName = {} , iptaddfileupload = {} , iptaddfileuploaddatetime = {}", iptaddfileName,
					iptaddfileupload, iptaddfileuploaddatetime);
			
			
			log.debug(super.getRequest().getParameter("file"));
//			log.debug(upload.getName());
//			log.debug(upload.getPath());

			Date now = new Date();
			//TODO 這裡也是記得把路徑改為properties
			LSysFile LSysFile = new LSysFile(null, iptaddfileupload, iptaddfileName, "fileType",
					getpath() + "\\" + iptaddfileuploaddatetime, now, "createUserId", now, "modifyUserId",
					"N", "fileOwner", "fileSigned");
			boolean IsaddFile = fileService.addFile(LSysFile);
			String result = "";
			if (IsaddFile) {
				result = JsonUtil.ajaxResultSuccess("新增成功").toString();
			} else {
				result = JsonUtil.ajaxResultSuccess("新增失敗").toString();
			}
			log.debug("addFile end {}", result);
			printToResponse(result);

		} catch (Exception e) {
			log.error("addFile error msg=>", e);
		}
		return NONE;
	}

	public String deleteFile() {
		try {
			log.debug("deleteFile start");

			log.debug("===== file info =====");
			String deletefileId = super.getRequest().getParameter("deletefileId"),
					deletefileName = super.getRequest().getParameter("deletefileName"),
					deletefileDisplayName = super.getRequest().getParameter("deletefileDisplayName"),
					deletefileType = super.getRequest().getParameter("deletefileType"),
					deletefilePath = super.getRequest().getParameter("deletefilePath"),
					deletefilecreateDatetime = super.getRequest().getParameter("deletefilecreateDatetime"),
					deletefilecreateUserId = super.getRequest().getParameter("deletefilecreateUserId"),
					deletefilemodifyDatetime = super.getRequest().getParameter("deletefilemodifyDatetime"),
					deletefilemodifyUserId = super.getRequest().getParameter("deletefilemodifyUserId"),
					deletefileisDelete = super.getRequest().getParameter("deletefileisDelete"),
					deletefileOwner = super.getRequest().getParameter("deletefileOwner"),
					deletefileSigned = super.getRequest().getParameter("deletefileSigned");
			log.debug(
					"deletefileId = {} , deletefileName = {} , deletefileDisplayName = {} , deletefileType = {} , deletefilePath = {} , "
							+ "deletefilecreateDatetime = {} , deletefilecreateUserId = {} , deletefilemodifyDatetime = {} , "
							+ "deletefilemodifyUserId = {} , deletefileisDelete = {} , deletefileOwner = {} , deletefileSigned = {}",
					deletefileId, deletefileName, deletefileDisplayName, deletefileType, deletefilePath,
					deletefilecreateDatetime, deletefilecreateUserId, deletefilemodifyDatetime, deletefilemodifyUserId,
					deletefileisDelete, deletefileOwner, deletefileSigned);

			Date fileCreatedatetime = DateTimeFormat.getTime(deletefilecreateDatetime);
			Date fileModifydatetime = DateTimeFormat.getTime(deletefilemodifyDatetime);

			LSysFile LSysFile = new LSysFile(deletefileId, deletefileName, deletefileDisplayName, deletefileType,
					deletefilePath, fileCreatedatetime, deletefilecreateUserId, fileModifydatetime,
					deletefilemodifyUserId, deletefileisDelete, deletefileOwner, deletefileSigned);

			boolean Isdelete = fileService.deleteFile(LSysFile);
			String result = "";
			if (Isdelete) {
				result = JsonUtil.ajaxResultSuccess("刪除成功").toString();
			} else {
				result = JsonUtil.ajaxResultFalse("刪除失敗").toString();
			}

			log.debug("deleteFile end {}", result);
			printToResponse(result);

		} catch (Exception e) {
			String result = JsonUtil.ajaxResultFalse("刪除失敗:" + e).toString();
			try {
				printToResponse(result);
			} catch (IOException e1) {
				e1.printStackTrace();
				log.error("deleteFile IOException ms=>", e1);
			}
			log.error("deleteFile error ms=>", e);
		}
		return NONE;
	}

	public String fileUpload() {
		// TODO 記得把路徑切出來 properties設定 BY JiaJia
		// 聲明文件上傳的路徑
//		String path = "C:/LegalFiles/UploadFiles/" + super.getRequest().getParameter("datetimeDis");
//		String path = "C:/LegalFiles/UploadFiles";
		String path = getpath();
		String iptaddfileName = super.getRequest().getParameter("iptaddfileName");
		String signedpath = super.getRequest().getParameter("signedpath");
		log.debug("path = {} , iptaddfileName = {} , signedpath = {}", path, iptaddfileName, signedpath);
		String uploadpath = fileService.uploadFile(upload, path, uploadFileName, signedpath);

		try {
			JsonObject json = new JsonObject();
			json.addProperty("success", "success");
			json.addProperty("fileuploadDatetime", uploadpath);
			printToResponse(json.toString());
			log.debug("fileUpload end {}", json);

		} catch (Exception e) {
			log.error("fileUpload error", e);
		}
		return NONE;

	}
	
	public String signedfileUpload() {
		// TODO 記得把路徑切出來 properties設定 BY JiaJia
		// 聲明文件上傳的路徑
//		String path = "C:/LegalFiles/UploadFiles/" + super.getRequest().getParameter("datetimeDis");
//		String path = "C:/LegalFiles/UploadFiles";
		String path = getpath();
		String iptaddfileName = uploadFileName;
		String signedpath = "/modify";
		log.debug("path = {} , iptaddfileName = {} , signedpath = {}", path, iptaddfileName, signedpath);
		String uploadpath = fileService.uploadFile(upload, path, iptaddfileName, signedpath);

		try {
			JsonObject json = new JsonObject();
			json.addProperty("success", "success");
			json.addProperty("fileuploadDatetime", uploadpath);
			json.addProperty("fileuploadName", iptaddfileName);
			printToResponse(json.toString());
			log.debug("fileUpload end {}", json);

		} catch (Exception e) {
			log.error("fileUpload error", e);
		}
		return NONE;

	}
}
