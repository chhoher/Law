package com.myjs.sys.file.Dao;

import java.util.List;
import java.util.Map;

import com.myjs.sys.file.model.LSysFile;

public interface fileDao {
	public List<LSysFile> findAll() throws Exception;
	public List<LSysFile> findbyproperties(String fileName) throws Exception;
	public boolean save(LSysFile transientInstance) throws Exception ;
	public boolean delete(LSysFile transientInstance) throws Exception;
	public List<Map<String, Object>> findfilePathByTypes(String fileTypeOne, String fileTypeTwo) throws Exception;
	public List<Map<String, Object>> findfilePathBySignedId(String signedId) throws Exception;
	public List<Map<String, Object>> findSelectOtherFileBySignedId(String signedId) throws Exception;
}
