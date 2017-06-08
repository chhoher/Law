package com.myjs.commons;

import java.sql.ResultSet;
import java.sql.ResultSetMetaData;
import java.sql.SQLException;

import com.google.gson.JsonArray;
import com.google.gson.JsonObject;

public class JsonUtil {

	public static final JsonArray ResultSetToJsonArray(ResultSet rs) {
        JsonObject element = null;
        JsonArray ja = new JsonArray();
        ResultSetMetaData rsmd = null;
        String columnName, columnValue = null;
        try {
            rsmd = rs.getMetaData();
            while (rs.next()) {
                element = new JsonObject();
                for (int i = 0; i < rsmd.getColumnCount(); i++) {
                    columnName = rsmd.getColumnName(i + 1);
                    columnValue = rs.getString(columnName);
                    element.addProperty(columnName, columnValue);
                }
                ja.add(element);
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return ja;
    }
	
	
	public static final JsonObject ResultSetToJsonObject(ResultSet rs) {
        JsonObject element = null;
        JsonArray ja = new JsonArray();
        JsonObject jo = new JsonObject();
        ResultSetMetaData rsmd = null;
        String columnName, columnValue = null;
        try {
            rsmd = rs.getMetaData();
            while (rs.next()) {
                element = new JsonObject();
                for (int i = 0; i < rsmd.getColumnCount(); i++) {
                    columnName = rsmd.getColumnName(i + 1);
                    columnValue = rs.getString(columnName);
                    element.addProperty(columnName, columnValue);
                }
                ja.add(element);
            }
            jo.add("data", ja);
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return jo;
    }
	
	public static final String ResultSetToJsonString(ResultSet rs) {
        return ResultSetToJsonObject(rs).toString();
    }
	
	public static final JsonObject ajaxResultFalse(String errorMsg){
		JsonObject json = new JsonObject();
		json.addProperty("success", "false");
		json.addProperty("msg", errorMsg);
		return json;
	}
	
	public static final JsonObject ajaxResultSuccess(String successMsg){
		JsonObject json = new JsonObject();
		json.addProperty("success", "success");
		json.addProperty("msg", successMsg);
		return json;
	}
}
