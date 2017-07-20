package com.myjs.sys.file.service;

import java.io.File;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

import com.myjs.cek.recordcheckform.model.LCekRecordFile;
import com.google.gson.Gson;
import com.google.gson.JsonObject;
import com.myjs.cek.recordcheckform.Dao.recordcheckformDao;
import com.myjs.commons.DateTimeFormat;
import com.myjs.commons.FilesUploads;
import com.myjs.sys.file.Dao.fileDao;
import com.myjs.sys.file.model.LSysFile;
import com.myjs.sys.user.model.VEIPMemdb;

public class fileServiceImpl implements fileService{
	private static final Logger log = LogManager.getLogger(fileServiceImpl.class);

	private fileDao fileDao;
	private recordcheckformDao recordcheckformDao;
	
	public fileDao getFileDao() {
		return fileDao;
	}

	public void setFileDao(fileDao fileDao) {
		this.fileDao = fileDao;
	}

	public recordcheckformDao getRecordcheckformDao() {
		return recordcheckformDao;
	}

	public void setRecordcheckformDao(recordcheckformDao recordcheckformDao) {
		this.recordcheckformDao = recordcheckformDao;
	}

	public List<LSysFile> findByProperty(LSysFile queryLSysFile) throws Exception{
		if(queryLSysFile == null){
			return fileDao.findAll();
		}else{
			return fileDao.findbyproperties(queryLSysFile.getFileName());
		}
	}
	
	public boolean addFile(LSysFile addLSysFile) throws Exception{
		return fileDao.save(addLSysFile);
	}
	
	public boolean deleteFile(LSysFile deleteLSysFile) throws Exception{
		return fileDao.delete(deleteLSysFile);
	}

	public String uploadFile(File[] uploadFile, String path, String fileName, String signedpath) throws Exception{
		String uploadDatetime = DateTimeFormat.getNowDateNum();
		if(signedpath != null && !signedpath.equals("")){
			path += signedpath + "/" + uploadDatetime;
		}else{
			path += "/" + uploadDatetime;
		}
		FilesUploads filesupload = new FilesUploads();
		filesupload.fileUpload(uploadFile, path, fileName);
		return uploadDatetime;
	}
	
	/**
	 * add By jia 2017-07-10
	 * 新增簽呈的檔案上傳
	 */
	public String uploadFileForSigned(File[] uploadFile, String path, String fileName, String signedpath, 
			VEIPMemdb loginUser) throws Exception{
		String uploadDatetime = DateTimeFormat.getNowDateNum();
		if(signedpath != null && !signedpath.equals("")){
			path += signedpath + "/" + uploadDatetime;
		}else{
			path += "/" + uploadDatetime;
		}
		FilesUploads filesupload = new FilesUploads();
		
		ArrayList<LCekRecordFile> LCekRecordFile = new ArrayList<LCekRecordFile>();
		
		if(fileName != null){
			String[] signedfileuploadNames = fileName.split(",");
			for(int i = 0; i < signedfileuploadNames.length ;i++){
				LCekRecordFile addLCekRecordFile = new LCekRecordFile(null, "", signedfileuploadNames[i].trim(), 
						path, new Date(), loginUser.getMemno(), null, "N");
				addLCekRecordFile.setVoPathName(path + "/" + signedfileuploadNames[i].trim());
				LCekRecordFile.add(addLCekRecordFile);
				recordcheckformDao.saveRecordFile(addLCekRecordFile);
			}
		}
		
		filesupload.fileUpload(uploadFile, path, fileName);
		
		Gson gson = new Gson();
		JsonObject json = new JsonObject();
		json.addProperty("success", "success");
		json.addProperty("fileuploadDatetime", uploadDatetime);
		json.addProperty("fileuploadName", fileName);
		json.add("recordFile", gson.toJsonTree(LCekRecordFile));
		
		return json.toString();
	}
}
