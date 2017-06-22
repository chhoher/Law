package com.myjs.sys.file.service;

import java.io.File;
import java.util.List;

import com.myjs.sys.file.model.LSysFile;

public interface fileService {
	public List<LSysFile> findByProperty(LSysFile queryLSysFile) throws Exception;
	public boolean addFile(LSysFile addLSysFile) throws Exception;
	public boolean deleteFile(LSysFile deleteLSysFile) throws Exception;
	public String uploadFile(File[] uploadFile, String path, String fileName, String signedpath) throws Exception;
}
