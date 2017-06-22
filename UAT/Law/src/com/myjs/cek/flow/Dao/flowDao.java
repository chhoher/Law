package com.myjs.cek.flow.Dao;

import java.util.List;

import com.myjs.cek.checkform.model.LCekFlow;
import com.myjs.cek.checkform.model.LCekFlowsub;

public interface flowDao {
	public List<LCekFlow> findAll() throws Exception;
	public List<LCekFlow> findbyproperties(String flowCode, String flowType, String flowName) throws Exception;
	public boolean save(LCekFlow transientInstance) throws Exception ;
	public boolean delete(LCekFlow transientInstance) throws Exception;
	public List<LCekFlowsub> findAllFlowsub() throws Exception;
	public List<LCekFlowsub> findFlowsubbyproperties(String flowId) throws Exception;
}
