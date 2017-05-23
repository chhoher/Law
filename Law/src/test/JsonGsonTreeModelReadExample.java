package test;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileReader;
 
import com.google.gson.JsonArray;
import com.google.gson.JsonElement;
import com.google.gson.JsonObject;
import com.google.gson.JsonParser;
 
public class JsonGsonTreeModelReadExample {
 
    public static void main(String[] args) throws FileNotFoundException {
 
        FileReader reader = new FileReader(new File("C:\\Users\\2354\\git\\Law\\Law\\src\\test\\input.json"));
 
        JsonParser parser = new JsonParser();
        JsonElement element = parser.parse(reader);// Returns Root element(
                                                    // which is a JsonElement,
                                                    // can be object,array, null
                                                    // or primitive)
 
        if (element.isJsonObject()) {
            JsonObject car = element.getAsJsonObject();
            System.out.println(car.get("name").getAsString());//read as string
            System.out.println(car.get("model").getAsInt());  //read as integer
            System.out.println(car.get("price").getAsDouble());//read as double
 
            JsonArray arr = car.getAsJsonArray("colors");//read as array
            for (int i = 0; i < arr.size(); i++) {
                System.out.println(arr.get(i).getAsString());
            }
        }
 
    }
}