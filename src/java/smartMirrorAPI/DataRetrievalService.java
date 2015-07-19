/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package smartMirrorAPI;
import java.io.IOException;
import java.net.HttpURLConnection;
import java.net.URL;

/**
 *
 * @author abhitha
 */
public class DataRetrievalService {
    public void DataRetrievalService(){
        
    }
    public String Testing(){
        String output = "";
        try{
        URL url  = new URL("http://api.openweathermap.org/data/2.5/weather?q=Waterloo&units=metric");
        HttpURLConnection http = (HttpURLConnection)url.openConnection();
        
        }
        catch(Exception ex)
        {
            return ex.getMessage();
        }      
        return output;
    }
}
