package com.myjs.doc.documents.Dao;

import com.myjs.doc.documents.model.LDocClaimsdocs;
import com.myjs.doc.documents.model.LDocFiledocs;
import com.myjs.doc.documents.model.LDocInfo;
import com.myjs.doc.documents.model.LDocOtherdocs;

public interface docDao {
	public boolean save(LDocOtherdocs transientInstance) throws Exception;
	public boolean save(LDocInfo transientInstance) throws Exception;
	public boolean save(LDocFiledocs transientInstance) throws Exception;
	public boolean save(LDocClaimsdocs transientInstance) throws Exception;
}
