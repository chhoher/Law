package com.myjs.cek.flow.Dao;

import java.util.List;

import com.myjs.cek.checkform.model.LCekFlow;
import com.myjs.cek.checkform.model.LCekFlowsub;

public interface flowDao {
	public List<LCekFlow> findAll();
	public List<LCekFlow> findbyproperties(String flowCode, String flowType, String flowName);
	public boolean save(LCekFlow transientInstance) ;
	public boolean delete(LCekFlow transientInstance);
	public List<LCekFlowsub> findAllFlowsub();
	public List<LCekFlowsub> findFlowsubbyproperties(String flowId);
}
