package test;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.google.gson.JsonElement;
import com.google.gson.JsonObject;
import com.google.gson.JsonPrimitive;
 
public class JsonGsonTreeModelWriteExample {
 
    public static void main(String args[]) {
        JsonGsonTreeModelWriteExample ex = new JsonGsonTreeModelWriteExample();
        Car car = ex.getCar();
 
        Gson gson = new GsonBuilder().create();
        JsonElement jsonElement = gson.toJsonTree(car);                 
        System.out.println("Original JSON : " + jsonElement);           // Root element
 
        JsonObject jsonObject = jsonElement.getAsJsonObject();
        jsonObject.addProperty("power", "300BHP");                      // add a new property
 
        jsonObject.remove("cost");                                      // remove an existing property
         
        jsonObject.getAsJsonArray("colors").set(0, new JsonPrimitive("RED"));// update an existing property
 
        System.out.println("Updated JSON : " + jsonObject);
    }
 
    private Car getCar() {
        Car car = new Car();
        car.setName("AUDI");
        car.setModel(2014);
        car.setCost(45000);
        car.getColors().add("GREY");
        car.getColors().add("BLACK");
        car.getColors().add("WHITE");
        return car;
    }
 
}