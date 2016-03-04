/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$(document).ready(function() {
    //document.getElementById('testid').innerHTML = "im working"; 
    var weatherView = new ViewModule.WeatherView(new ServiceModule.WeatherService());
    date_time('date_time');
    //.setInterval(updateConfig,5000);
});

 function updateConfig(){
    
    //how to set up Python simple server: http://stackoverflow.com/a/21608670
    //abhitha@ubuntu:~/fydp-smartmirror/SmartMirror/SmartMIrror/web/javascript$ python -m SimpleHTTPServer
    //sets up simple server at port 8000
    
    console.log("I'm running");
    var test = "";
    $.ajax({
    type: 'GET',
    url: "http://localhost:8000/Config2.jsonp",
    async: false,
    jsonpCallback: 'jsonCallback',
    contentType: "application/json",
    dataType: 'jsonp',
    success: function(json) {
       console.log(json.config);
       test = json.config;
    },
    error: function(e) {
       console.log(e.message);
    }
    });
    
//    $.ajax({
//    dataType: "json",
//    url: "file:///home/abhitha/fydp-smartmirror/SmartMirror/SmartMIrror/build/web/javascript/Config2.jsonp",
//    headers: { "cache-control": "no-cache" },
//    cache: false,  //do not cache
//    success: function(data){
//        console.log(data); 
//    }
//    });
   
//    var input = jsonstr;
//    
//    for(var i = 0; i < jsonstr.length; i++){
//        console.log(input[i].date);
//        console.log(input[i].event);
//    }
  }