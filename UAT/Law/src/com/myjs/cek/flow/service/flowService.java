package com.myjs.cek.flow.service;

import java.util.List;

import com.myjs.cek.checkform.model.LCekFlow;
import com.myjs.cek.checkform.model.LCekFlowsub;

public interface flowService {
	public List<LCekFlow> findByProperty(LCekFlow queryLCekFlow) throws Exception;
	public boolean addCekFlow(LCekFlow addlcekflow) throws Exception;
	public boolean deleteCekFlow(LCekFlow deleteCekFlow) throws Exception;
	public List<LCekFlowsub> findFlowsubByProperty(LCekFlowsub queryLCekFlowsub) throws Exception;
}
