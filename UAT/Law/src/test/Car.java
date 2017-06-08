package test;

import java.util.ArrayList;
import java.util.List;
 
public class Car {
    private String name;
    private int model;
    private double cost;
     
    private List<String> colors = new ArrayList<String>();
 
    public String getName() {
        return name;
    }
 
    public void setName(String name) {
        this.name = name;
    }
 
    public int getModel() {
        return model;
    }
 
    public void setModel(int model) {
        this.model = model;
    }
 
    public double getCost() {
        return cost;
    }
 
    public void setCost(double cost) {
        this.cost = cost;
    }
 
    public List<String> getColors() {
        return colors;
    }
 
    public void setColors(List<String> colors) {
        this.colors = colors;
    }
     
}
