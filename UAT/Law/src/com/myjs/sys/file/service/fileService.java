package com.myjs.sys.file.service;

import java.io.File;
import java.util.List;

import com.myjs.sys.file.model.LSysFile;

public interface fileService {
	public List<LSysFile> findByProperty(LSysFile queryLSysFile);
	public boolean addFile(LSysFile addLSysFile);
	public boolean deleteFile(LSysFile deleteLSysFile);
	public String uploadFile(File[] uploadFile, String path, String fileName, String signedpath);
}
