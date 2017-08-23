package com.myjs.doc.documents.Dao;

import java.util.List;

import com.myjs.cek.recordcheckform.model.LCekSignedCaseInfo;
import com.myjs.doc.documents.model.LDocCashiercheck;
import com.myjs.doc.documents.model.LDocCashiercheckRela;
import com.myjs.doc.documents.model.LDocCentitlement;
import com.myjs.doc.documents.model.LDocCentitlementRela;
import com.myjs.doc.documents.model.LDocCentitlementSourceDoc;
import com.myjs.doc.documents.model.LDocClaimsdocs;
import com.myjs.doc.documents.model.LDocClaimsdocsRela;
import com.myjs.doc.documents.model.LDocCourtDoc;
import com.myjs.doc.documents.model.LDocCourtDocBuiltTranscriptsRela;
import com.myjs.doc.documents.model.LDocCourtDocCashierCheckRela;
import com.myjs.doc.documents.model.LDocCourtDocCoOwnedRela;
import com.myjs.doc.documents.model.LDocCourtDocCoOwnedTranscriptsRela;
import com.myjs.doc.documents.model.LDocCourtDocDebtContinueRela;
import com.myjs.doc.documents.model.LDocCourtDocDebtDocRela;
import com.myjs.doc.documents.model.LDocCourtDocDetailRela;
import com.myjs.doc.documents.model.LDocCourtDocDirtTranscriptsRela;
import com.myjs.doc.documents.model.LDocCourtDocDistributionRela;
import com.myjs.doc.documents.model.LDocCourtDocFileRela;
import com.myjs.doc.documents.model.LDocCourtDocHeirTranscriptsRela;
import com.myjs.doc.documents.model.LDocCourtDocLawTranscriptsRela;
import com.myjs.doc.documents.model.LDocCourtDocMortgageeTranscriptsRela;
import com.myjs.doc.documents.model.LDocCourtDocOtherRela;
import com.myjs.doc.documents.model.LDocCourtDocRecoveryRela;
import com.myjs.doc.documents.model.LDocCourtDocRela;
import com.myjs.doc.documents.model.LDocCourtDocThingDebtRela;
import com.myjs.doc.documents.model.LDocCourtDocThingThirdRela;
import com.myjs.doc.documents.model.LDocCourtDocTranscriptsRela;
import com.myjs.doc.documents.model.LDocDebts;
import com.myjs.doc.documents.model.LDocDebtsRela;
import com.myjs.doc.documents.model.LDocFiledocs;
import com.myjs.doc.documents.model.LDocImgfileTemp;
import com.myjs.doc.documents.model.LDocInfo;
import com.myjs.doc.documents.model.LDocOtherdocs;
import com.myjs.sys.variable.model.LSysVariable;

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
	 * 文管新增執行名義儲存
	 * @param transientInstance
	 * @return
	 * @throws Exception
	 */
	public boolean save(LDocCentitlement transientInstance) throws Exception;

	/**
	 * 文管新增執行名義相關人儲存
	 * @param transientInstance
	 * @return
	 * @throws Exception
	 */
	public boolean save(LDocCentitlementRela transientInstance) throws Exception;
	
	/**
	 * 文管新增執行名義原始憑證
	 * @param transientInstance
	 * @return
	 * @throws Exception
	 */
	public boolean save(LDocCentitlementSourceDoc transientInstance) throws Exception;
	
	/**
	 * 文管新增法院文儲存
	 * @param transientInstance
	 * @return
	 * @throws Exception
	 */
	public boolean save(LDocCourtDoc transientInstance) throws Exception;

	/**
	 * 文管新增法院文相關人儲存
	 * @param transientInstance
	 * @return
	 * @throws Exception
	 */
	public boolean save(LDocCourtDocRela transientInstance) throws Exception;
	
	/**
	 * 文管新增法院文戶謄相關人儲存
	 * @param transientInstance
	 * @return
	 * @throws Exception
	 */
	public boolean save(LDocCourtDocTranscriptsRela transientInstance) throws Exception;

	/**
	 * 文管新增法院文共有人戶謄相關人儲存
	 * @param transientInstance
	 * @return
	 * @throws Exception
	 */
	public boolean save(LDocCourtDocCoOwnedTranscriptsRela transientInstance) throws Exception;

	/**
	 * 文管新增法院文抵押權人戶謄相關人儲存
	 * @param transientInstance
	 * @return
	 * @throws Exception
	 */
	public boolean save(LDocCourtDocMortgageeTranscriptsRela transientInstance) throws Exception;

	/**
	 * 文管新增法院文法代戶謄相關人儲存
	 * @param transientInstance
	 * @return
	 * @throws Exception
	 */
	public boolean save(LDocCourtDocLawTranscriptsRela transientInstance) throws Exception;

	/**
	 * 文管新增法院文繼承人戶謄相關人儲存
	 * @param transientInstance
	 * @return
	 * @throws Exception
	 */
	public boolean save(LDocCourtDocHeirTranscriptsRela transientInstance) throws Exception;

	/**
	 * 文管新增法院文土謄相關人儲存
	 * @param transientInstance
	 * @return
	 * @throws Exception
	 */
	public boolean save(LDocCourtDocDirtTranscriptsRela transientInstance) throws Exception;

	/**
	 * 文管新增法院文建謄相關人儲存
	 * @param transientInstance
	 * @return
	 * @throws Exception
	 */
	public boolean save(LDocCourtDocBuiltTranscriptsRela transientInstance) throws Exception;

	/**
	 * 文管新增法院文分配表相關人儲存
	 * @param transientInstance
	 * @return
	 * @throws Exception
	 */
	public boolean save(LDocCourtDocDistributionRela transientInstance) throws Exception;

	/**
	 * 文管新增法院文事項表(第三人)相關人儲存
	 * @param transientInstance
	 * @return
	 * @throws Exception
	 */
	public boolean save(LDocCourtDocThingThirdRela transientInstance) throws Exception;

	/**
	 * 文管新增法院文事項表(債權人)相關人儲存
	 * @param transientInstance
	 * @return
	 * @throws Exception
	 */
	public boolean save(LDocCourtDocThingDebtRela transientInstance) throws Exception;

	/**
	 * 文管新增法院文共有人名冊相關人儲存
	 * @param transientInstance
	 * @return
	 * @throws Exception
	 */
	public boolean save(LDocCourtDocCoOwnedRela transientInstance) throws Exception;

	/**
	 * 文管新增法院文債權文件相關人儲存
	 * @param transientInstance
	 * @return
	 * @throws Exception
	 */
	public boolean save(LDocCourtDocDebtDocRela transientInstance) throws Exception;

	/**
	 * 文管新增法院文帳務明細相關人儲存
	 * @param transientInstance
	 * @return
	 * @throws Exception
	 */
	public boolean save(LDocCourtDocDetailRela transientInstance) throws Exception;

	/**
	 * 文管新增法院文執行名義相關人儲存
	 * @param transientInstance
	 * @return
	 * @throws Exception
	 */
	public boolean save(LDocCourtDocFileRela transientInstance) throws Exception;

	/**
	 * 文管新增法院文債證續行表相關人儲存
	 * @param transientInstance
	 * @return
	 * @throws Exception
	 */
	public boolean save(LDocCourtDocDebtContinueRela transientInstance) throws Exception;

	/**
	 * 文管新增法院文本票相關人儲存
	 * @param transientInstance
	 * @return
	 * @throws Exception
	 */
	public boolean save(LDocCourtDocCashierCheckRela transientInstance) throws Exception;

	/**
	 * 文管新增法院文回復所有權登記相關人儲存
	 * @param transientInstance
	 * @return
	 * @throws Exception
	 */
	public boolean save(LDocCourtDocRecoveryRela transientInstance) throws Exception;
	
	/**
	 * 文管新增法院文其他相關人儲存
	 * @param transientInstance
	 * @return
	 * @throws Exception
	 */
	public boolean save(LDocCourtDocOtherRela transientInstance) throws Exception;
	
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
	
	/**
	 * 文管系統影像檔暫存table
	 * @param transientInstance
	 * @return
	 * @throws Exception
	 */
	public boolean save(LDocImgfileTemp transientInstance) throws Exception;
	
	/**
	 * 刪除文管系統影像檔暫存table
	 * @param transientInstance
	 * @return
	 * @throws Exception
	 */
	public boolean deleteById(String uuid) throws Exception;
	
	/**
	 * 用案號查詢該案件文件
	 * @param caseId
	 * @return
	 * @throws Exception
	 */
	public List<LDocInfo> findDocByCaseId(String caseId) throws Exception;
	
	public List<LDocInfo> findSumDoc() throws Exception;
	
	/**
	 * 查詢SMART DB內所有的債權人
	 * @return
	 * @throws Exception
	 */
	public List<LSysVariable> findAllBankName() throws Exception;
	
	/**
	 * add By Jia 2017-08-07 更改DOC狀態
	 * @param DocTableName
	 * @param updateStatus
	 * @param doc_id
	 * @return
	 * @throws Exception
	 */
	public boolean saveToUpdateDocStatus(String DocTableName, String updateStatus, String doc_id) throws Exception;
	
	/**
	 * add By Jia 2017-08-15 查詢案件資訊by 文管條件
	 * @param caseId
	 * @param debtorName
	 * @param debtorId
	 * @param docNo
	 * @param legalCaseId
	 * @param isCheck
	 * @return
	 * @throws Exception
	 */
	public List<LCekSignedCaseInfo> findCaseByDocInfo(String caseId, String debtorName, 
			String debtorId, String docNo, String legalCaseId, boolean isCheck) throws Exception;

	/**
	 * add By Jia 2017-08-17 用id查詢文件
	 * @param docId
	 * @return
	 * @throws Exception
	 */
	public LDocCentitlement findCenById(String docId) throws Exception;

	/**
	 * add By Jia 2017-08-20 用id抓出相對人list
	 * @param docId
	 * @return
	 * @throws Exception
	 */
	public List<LDocCentitlementRela> findCenRelaById(String docId) throws Exception;
	
	/**
	 * add By Jia 2017-08-20 用id抓出原始憑證list
	 * @param docId
	 * @return
	 * @throws Exception
	 */
	public List<LDocCentitlementSourceDoc> findCenSourceDocById(String docId) throws Exception;
	
	/**
	 * add By Jia 2017-08-17 用id查詢文件
	 * @param docId
	 * @return
	 * @throws Exception
	 */
	public LDocCourtDoc findCourtDocById(String docId) throws Exception;

	/**
	 * add By Jia 2017-08-20 用id抓出相對人list
	 * @param docId
	 * @return
	 * @throws Exception
	 */
	public List<LDocCourtDocRela> findCourtDocRelaById(String docId) throws Exception;
	
	/**
	 * add By Jia 2017-08-20 用id抓出相對人list
	 * @param docId
	 * @return
	 * @throws Exception
	 */
	public List<LDocCourtDocTranscriptsRela> findCourtDocTransciptsRelaById(String docId) throws Exception;
	
	/**
	 * add By Jia 2017-08-20 用id抓出相對人list
	 * @param docId
	 * @return
	 * @throws Exception
	 */
	public List<LDocCourtDocCoOwnedTranscriptsRela> findCourtDocCoOwnedTransciptsRelaById(String docId) throws Exception;
	
	/**
	 * add By Jia 2017-08-20 用id抓出相對人list
	 * @param docId
	 * @return
	 * @throws Exception
	 */
	public List<LDocCourtDocMortgageeTranscriptsRela> findCourtDocMortgageeTranscriptsRelaById(String docId) throws Exception;
	
	/**
	 * add By Jia 2017-08-20 用id抓出相對人list
	 * @param docId
	 * @return
	 * @throws Exception
	 */
	public List<LDocCourtDocLawTranscriptsRela> findCourtDocLawTranscriptsRelaById(String docId) throws Exception;
	
	/**
	 * add By Jia 2017-08-20 用id抓出相對人list
	 * @param docId
	 * @return
	 * @throws Exception
	 */
	public List<LDocCourtDocHeirTranscriptsRela> findCourtDocHeirTranscriptsRelaById(String docId) throws Exception;

	/**
	 * add By Jia 2017-08-20 用id抓出相對人list
	 * @param docId
	 * @return
	 * @throws Exception
	 */
	public List<LDocCourtDocDirtTranscriptsRela> findCourtDocDirtTranscriptsRelaById(String docId) throws Exception;
	

	/**
	 * add By Jia 2017-08-20 用id抓出相對人list
	 * @param docId
	 * @return
	 * @throws Exception
	 */
	public List<LDocCourtDocBuiltTranscriptsRela> findCourtDocBuiltTranscriptsRelaById(String docId) throws Exception;

	/**
	 * add By Jia 2017-08-20 用id抓出相對人list
	 * @param docId
	 * @return
	 * @throws Exception
	 */
	public List<LDocCourtDocDistributionRela> findCourtDocDistributionRelaById(String docId) throws Exception;

	/**
	 * add By Jia 2017-08-20 用id抓出相對人list
	 * @param docId
	 * @return
	 * @throws Exception
	 */
	public List<LDocCourtDocThingThirdRela> findCourtDocThingThirdRelaById(String docId) throws Exception;

	/**
	 * add By Jia 2017-08-20 用id抓出相對人list
	 * @param docId
	 * @return
	 * @throws Exception
	 */
	public List<LDocCourtDocThingDebtRela> findCourtDocThingDebtRelaById(String docId) throws Exception;

	/**
	 * add By Jia 2017-08-20 用id抓出相對人list
	 * @param docId
	 * @return
	 * @throws Exception
	 */
	public List<LDocCourtDocCoOwnedRela> findCourtDocCoOwnedRelaById(String docId) throws Exception;

	/**
	 * add By Jia 2017-08-20 用id抓出相對人list
	 * @param docId
	 * @return
	 * @throws Exception
	 */
	public List<LDocCourtDocDebtDocRela> findCourtDocDebtDocRelaById(String docId) throws Exception;

	/**
	 * add By Jia 2017-08-20 用id抓出相對人list
	 * @param docId
	 * @return
	 * @throws Exception
	 */
	public List<LDocCourtDocDetailRela> findCourtDocDetailRelaById(String docId) throws Exception;

	/**
	 * add By Jia 2017-08-20 用id抓出相對人list
	 * @param docId
	 * @return
	 * @throws Exception
	 */
	public List<LDocCourtDocFileRela> findCourtDocFileRelaById(String docId) throws Exception;

	/**
	 * add By Jia 2017-08-20 用id抓出相對人list
	 * @param docId
	 * @return
	 * @throws Exception
	 */
	public List<LDocCourtDocDebtContinueRela> findCourtDocDebtContinueRelaById(String docId) throws Exception;

	/**
	 * add By Jia 2017-08-20 用id抓出相對人list
	 * @param docId
	 * @return
	 * @throws Exception
	 */
	public List<LDocCourtDocCashierCheckRela> findCourtDocCashierCheckRelaById(String docId) throws Exception;

	/**
	 * add By Jia 2017-08-20 用id抓出相對人list
	 * @param docId
	 * @return
	 * @throws Exception
	 */
	public List<LDocCourtDocRecoveryRela> findCourtDocRecoveryRelaById(String docId) throws Exception;

	/**
	 * add By Jia 2017-08-20 用id抓出相對人list
	 * @param docId
	 * @return
	 * @throws Exception
	 */
	public List<LDocCourtDocOtherRela> findCourtDocOtherRelaById(String docId) throws Exception;
	
	/**
	 * add By Jia 2017-08-17 用id查詢文件
	 * @param docId
	 * @return
	 * @throws Exception
	 */
	public LDocCashiercheck findCashierCheckById(String docId) throws Exception;
	
	/**
	 * add By Jia 2017-08-18 用id抓出相對人list
	 * @param docId
	 * @return
	 * @throws Exception
	 */
	public List<LDocCashiercheckRela> findCashierCheckRelaById(String docId) throws Exception;
	
	/**
	 * add By Jia 2017-08-17 用id查詢文件
	 * @param docId
	 * @return
	 * @throws Exception
	 */
	public LDocDebts findDebtsById(String docId) throws Exception;

	/**
	 * add By Jia 2017-08-18 用id抓出相對人list
	 * @param docId
	 * @return
	 * @throws Exception
	 */
	public List<LDocDebtsRela> findDebtsRelaById(String docId) throws Exception;
	
	/**
	 * add By Jia 2017-08-17 用id查詢文件
	 * @param docId
	 * @return
	 * @throws Exception
	 */
	public LDocClaimsdocs findClaimDocsById(String docId) throws Exception;
	
	/**
	 * add By Jia 2017-08-18 用id抓出相對人list
	 * @param docId
	 * @return
	 * @throws Exception
	 */
	public List<LDocClaimsdocsRela> findClaimDocsRelaById(String docId) throws Exception;
	
	/**
	 * add By Jia 2017-08-17 用id查詢文件
	 * @param docId
	 * @return
	 * @throws Exception
	 */
	public LDocFiledocs findFileById(String docId) throws Exception;
	
	/**
	 * add By Jia 2017-08-16 用id查詢文件
	 * @param docId
	 * @return
	 * @throws Exception
	 */
	public LDocOtherdocs findOtherById(String docId) throws Exception;
}
