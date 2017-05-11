package com.myjs.cek.flow.service;

import java.util.List;

import com.myjs.cek.checkform.model.LCekFlow;
import com.myjs.cek.checkform.model.LCekFlowsub;

public interface flowService {
	public List<LCekFlow> findByProperty(LCekFlow queryLCekFlow);
	public boolean addCekFlow(LCekFlow addlcekflow);
	public boolean deleteCekFlow(LCekFlow deleteCekFlow);
	public List<LCekFlowsub> findFlowsubByProperty(LCekFlowsub queryLCekFlowsub);
}
