package com.myjs.sys.file.Dao;

import java.util.List;
import java.util.Map;

import com.myjs.sys.file.model.LSysFile;

public interface fileDao {
	public List<LSysFile> findAll();
	public List<LSysFile> findbyproperties(String fileName);
	public boolean save(LSysFile transientInstance) ;
	public boolean delete(LSysFile transientInstance);
	public List<Map<String, Object>> findfilePathByTypes(String fileTypeOne, String fileTypeTwo);
	public List<Map<String, Object>> findfilePathBySignedId(String signedId);
}
