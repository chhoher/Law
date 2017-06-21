package test;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

import com.myjs.sys.variable.model.LSysVariable;

public class SaveParameter {
	
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public static void main(String[] args){
		LSysVariable LSysVariable = new LSysVariable("Id1", "Type1", "Name1", new Date(),
				"createUserId", new Date(), "modifyUserId", "N", "Value1");
		ArrayList<LSysVariable> listVariable = new ArrayList<LSysVariable>();
		listVariable.add(LSysVariable);
		LSysVariable = new LSysVariable("Id2", "Type2", "Name2", new Date(),
				"createUserId", new Date(), "modifyUserId", "N", "Value2");
		listVariable.add(LSysVariable);
		
		System.out.println(listVariable.get(0).getVariableId());
		System.out.println(listVariable.get(1).getVariableId());

		System.out.println("=====");
		System.out.println(listVariable.indexOf("Id1"));
		
		ArrayList<Map> all  = new ArrayList<Map>();
		Map allMap = new HashMap();
		Map<String, Serializable> varList = new HashMap<String, Serializable>();
		varList.put("id", "list1");
		varList.put("list", listVariable);
		allMap.put("variableId1", varList);

		LSysVariable = new LSysVariable("Id3", "Type3", "Name3", new Date(),
				"createUserId", new Date(), "modifyUserId", "N", "Value3");
		ArrayList<LSysVariable> listVariable2 = new ArrayList<LSysVariable>();
		listVariable2.add(LSysVariable);
		LSysVariable = new LSysVariable("Id4", "Type4", "Name4", new Date(),
				"createUserId", new Date(), "modifyUserId", "N", "Value4");
		listVariable2.add(LSysVariable);
		
		Map varList2 = new HashMap();
		varList2.put("id", "list2");
		varList2.put("list", listVariable2);
		
		all.add(varList2);
		allMap.put("variableId2", varList2);
		System.out.println(varList.get("list"));
		System.out.println(varList2.get("list"));
		Map R = (Map) allMap.get("variableId1");
		System.out.println(R.get("list"));
	}
}
