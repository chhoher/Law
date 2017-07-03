package com.myjs.doc.documents.Dao;

import com.myjs.doc.documents.model.LDocCashiercheck;
import com.myjs.doc.documents.model.LDocCashiercheckRela;
import com.myjs.doc.documents.model.LDocClaimsdocs;
import com.myjs.doc.documents.model.LDocClaimsdocsRela;
import com.myjs.doc.documents.model.LDocDebts;
import com.myjs.doc.documents.model.LDocDebtsRela;
import com.myjs.doc.documents.model.LDocFiledocs;
import com.myjs.doc.documents.model.LDocInfo;
import com.myjs.doc.documents.model.LDocOtherdocs;

/**
 * add By Jia 2017-06-30 文管新增相關DAO
 * @author JiaJia
 *
 */
public interface docDao {
	/**
	 * 文管新增主要Info儲存
	 * @param transientInstance
	 * @return
	 * @throws Exception
	 */
	public boolean save(LDocInfo transientInstance) throws Exception;

	/**
	 * 文管新增本票儲存
	 * @param transientInstance
	 * @return
	 * @throws Exception
	 */
	public boolean save(LDocCashiercheck transientInstance) throws Exception;

	/**
	 * 文管新增本票相關人儲存
	 * @param transientInstance
	 * @return
	 * @throws Exception
	 */
	public boolean save(LDocCashiercheckRela transientInstance) throws Exception;
	
	/**
	 * 文管新增債讓儲存
	 * @param transientInstance
	 * @return
	 * @throws Exception
	 */
	public boolean save(LDocDebts transientInstance) throws Exception;
	
	/**
	 * 文管新增債讓相關人儲存
	 * @param transientInstance
	 * @return
	 * @throws Exception
	 */
	public boolean save(LDocDebtsRela transientInstance) throws Exception;
	
	/**
	 * 文管新增債權文件儲存
	 * @param transientInstance
	 * @return
	 * @throws Exception
	 */
	public boolean save(LDocClaimsdocs transientInstance) throws Exception;
	
	/**
	 * 文管新增債權文件相對人儲存
	 * @param transientInstance
	 * @return
	 * @throws Exception
	 */
	public boolean save(LDocClaimsdocsRela transientInstance) throws Exception;
	
	/**
	 * 文管新增卷宗儲存
	 * @param transientInstance
	 * @return
	 * @throws Exception
	 */
	public boolean save(LDocFiledocs transientInstance) throws Exception;
	
	/**
	 * 文管新增其他儲存
	 * @param transientInstance
	 * @return
	 * @throws Exception
	 */
	public boolean save(LDocOtherdocs transientInstance) throws Exception;
}
