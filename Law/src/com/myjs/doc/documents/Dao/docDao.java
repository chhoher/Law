package com.myjs.doc.documents.Dao;

import com.myjs.doc.documents.model.LDocCashiercheck;
import com.myjs.doc.documents.model.LDocCashiercheckRela;
import com.myjs.doc.documents.model.LDocCentitlement;
import com.myjs.doc.documents.model.LDocCentitlementBuiltTranscriptsRela;
import com.myjs.doc.documents.model.LDocCentitlementCashierCheckRela;
import com.myjs.doc.documents.model.LDocCentitlementCoOwnedRela;
import com.myjs.doc.documents.model.LDocCentitlementCoOwnedTranscriptsRela;
import com.myjs.doc.documents.model.LDocCentitlementDebtContinueRela;
import com.myjs.doc.documents.model.LDocCentitlementDebtDocRela;
import com.myjs.doc.documents.model.LDocCentitlementDetailRela;
import com.myjs.doc.documents.model.LDocCentitlementDirtTranscriptsRela;
import com.myjs.doc.documents.model.LDocCentitlementDistributionRela;
import com.myjs.doc.documents.model.LDocCentitlementFileRela;
import com.myjs.doc.documents.model.LDocCentitlementHeirTranscriptsRela;
import com.myjs.doc.documents.model.LDocCentitlementLawTranscriptsRela;
import com.myjs.doc.documents.model.LDocCentitlementMortgageeTranscriptsRela;
import com.myjs.doc.documents.model.LDocCentitlementOtherRela;
import com.myjs.doc.documents.model.LDocCentitlementRela;
import com.myjs.doc.documents.model.LDocCentitlementSourceDoc;
import com.myjs.doc.documents.model.LDocCentitlementThingDebtRela;
import com.myjs.doc.documents.model.LDocCentitlementThingThirdRela;
import com.myjs.doc.documents.model.LDocCentitlementTranscriptsRela;
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
	 * 文管新增執行名義戶謄相關人儲存
	 * @param transientInstance
	 * @return
	 * @throws Exception
	 */
	public boolean save(LDocCentitlementTranscriptsRela transientInstance) throws Exception;

	/**
	 * 文管新增執行名義共有人戶謄相關人儲存
	 * @param transientInstance
	 * @return
	 * @throws Exception
	 */
	public boolean save(LDocCentitlementCoOwnedTranscriptsRela transientInstance) throws Exception;

	/**
	 * 文管新增執行名義抵押權人戶謄相關人儲存
	 * @param transientInstance
	 * @return
	 * @throws Exception
	 */
	public boolean save(LDocCentitlementMortgageeTranscriptsRela transientInstance) throws Exception;

	/**
	 * 文管新增執行名義法代戶謄相關人儲存
	 * @param transientInstance
	 * @return
	 * @throws Exception
	 */
	public boolean save(LDocCentitlementLawTranscriptsRela transientInstance) throws Exception;

	/**
	 * 文管新增執行名義繼承人戶謄相關人儲存
	 * @param transientInstance
	 * @return
	 * @throws Exception
	 */
	public boolean save(LDocCentitlementHeirTranscriptsRela transientInstance) throws Exception;

	/**
	 * 文管新增執行名義土謄相關人儲存
	 * @param transientInstance
	 * @return
	 * @throws Exception
	 */
	public boolean save(LDocCentitlementDirtTranscriptsRela transientInstance) throws Exception;

	/**
	 * 文管新增執行名義建謄相關人儲存
	 * @param transientInstance
	 * @return
	 * @throws Exception
	 */
	public boolean save(LDocCentitlementBuiltTranscriptsRela transientInstance) throws Exception;

	/**
	 * 文管新增執行名義分配表相關人儲存
	 * @param transientInstance
	 * @return
	 * @throws Exception
	 */
	public boolean save(LDocCentitlementDistributionRela transientInstance) throws Exception;

	/**
	 * 文管新增執行名義事項表(第三人)相關人儲存
	 * @param transientInstance
	 * @return
	 * @throws Exception
	 */
	public boolean save(LDocCentitlementThingThirdRela transientInstance) throws Exception;

	/**
	 * 文管新增執行名義事項表(債權人)相關人儲存
	 * @param transientInstance
	 * @return
	 * @throws Exception
	 */
	public boolean save(LDocCentitlementThingDebtRela transientInstance) throws Exception;

	/**
	 * 文管新增執行名義共有人名冊相關人儲存
	 * @param transientInstance
	 * @return
	 * @throws Exception
	 */
	public boolean save(LDocCentitlementCoOwnedRela transientInstance) throws Exception;

	/**
	 * 文管新增執行名義債權文件相關人儲存
	 * @param transientInstance
	 * @return
	 * @throws Exception
	 */
	public boolean save(LDocCentitlementDebtDocRela transientInstance) throws Exception;

	/**
	 * 文管新增執行名義帳務明細相關人儲存
	 * @param transientInstance
	 * @return
	 * @throws Exception
	 */
	public boolean save(LDocCentitlementDetailRela transientInstance) throws Exception;

	/**
	 * 文管新增執行名義執行名義相關人儲存
	 * @param transientInstance
	 * @return
	 * @throws Exception
	 */
	public boolean save(LDocCentitlementFileRela transientInstance) throws Exception;

	/**
	 * 文管新增執行名義債證續行表相關人儲存
	 * @param transientInstance
	 * @return
	 * @throws Exception
	 */
	public boolean save(LDocCentitlementDebtContinueRela transientInstance) throws Exception;

	/**
	 * 文管新增執行名義本票相關人儲存
	 * @param transientInstance
	 * @return
	 * @throws Exception
	 */
	public boolean save(LDocCentitlementCashierCheckRela transientInstance) throws Exception;

	/**
	 * 文管新增執行名義其他相關人儲存
	 * @param transientInstance
	 * @return
	 * @throws Exception
	 */
	public boolean save(LDocCentitlementOtherRela transientInstance) throws Exception;
	
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
}
