package com.myjs.cek.flow.service;

import java.util.List;

import com.myjs.cek.checkform.model.LCekFlow;
import com.myjs.cek.checkform.model.LCekFlowsub;
import com.myjs.cek.flow.Dao.flowDao;

public class flowServiceImpl implements flowService{
	private flowDao flowDao;

	public flowDao getFlowDao() {
		return flowDao;
	}

	public void setFlowDao(flowDao flowDao) {
		this.flowDao = flowDao;
	}
	
	public List<LCekFlow> findByProperty(LCekFlow queryLCekFlow){
		if(queryLCekFlow == null){
			return flowDao.findAll();
		}else{
			return flowDao.findbyproperties(queryLCekFlow.getFlowCode(), queryLCekFlow.getFlowType(), queryLCekFlow.getFlowName());
		}
	}
	
	public boolean addCekFlow(LCekFlow addlcekflow){
		return flowDao.save(addlcekflow);
	}
	
	public boolean deleteCekFlow(LCekFlow deleteCekFlow){
		return flowDao.delete(deleteCekFlow);
	}
	
	public List<LCekFlowsub> findFlowsubByProperty(LCekFlowsub queryLCekFlowsub){
		if(queryLCekFlowsub == null){
			return flowDao.findAllFlowsub();
		}else{
			return flowDao.findFlowsubbyproperties(queryLCekFlowsub.getFlowId());
		}
	}
}
