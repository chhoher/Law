package com.myjs.commons;

import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

import com.myjs.sys.variable.model.LSysVariable;

public class SaveParameter {
	private static String SYSVariable = "";  
	private static ArrayList<LSysVariable> parameters;
	
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
		Map varList = new HashMap();
		varList.put("id", "1");
		varList.put("list", listVariable);

		LSysVariable = new LSysVariable("Id3", "Type3", "Name3", new Date(),
				"createUserId", new Date(), "modifyUserId", "N", "Value3");
		ArrayList<LSysVariable> listVariable2 = new ArrayList<LSysVariable>();
		listVariable2.add(LSysVariable);
		LSysVariable = new LSysVariable("Id4", "Type4", "Name4", new Date(),
				"createUserId", new Date(), "modifyUserId", "N", "Value4");
		listVariable2.add(LSysVariable);
		
		Map varList2 = new HashMap();
		varList2.put("id", "2");
		varList2.put("list", listVariable2);
		
		System.out.println(varList.get("list"));
		System.out.println(varList2.get("list"));
		
		
	}
}
