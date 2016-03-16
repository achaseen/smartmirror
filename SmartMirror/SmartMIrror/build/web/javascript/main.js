/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$(document).ready(function() {
    //document.getElementById('testid').innerHTML = "im working"; 
    var weatherView = new ViewModule.WeatherView(new ServiceModule.WeatherService());
    date_time('date_time');
    setInterval(updateConfig,5000);
});

 function updateConfig(){
    
    //how to set up Python simple server: http://stackoverflow.com/a/21608670
    //abhitha@ubuntu:~/fydp-smartmirror/SmartMirror/SmartMIrror/web/javascript$ python -m SimpleHTTPServer
    //sets up simple server at port 8000
    
    console.log("I'm running");
    
    var test = "";
    $.ajax({
    type: 'GET',
    url: "http://localhost:8888/Practice/web/javascript/Config.jsonp",
    async: false,
    jsonpCallback: 'jsonCallback',
    contentType: "application/json",
    dataType: 'jsonp',
    success: function(json) {
       console.log(json);
       if(json != test) {
       		var result = "";
       		var Elements = [];
			var DisplayOrders = new Array(json.name.length);
			var isDisplayed = new Array(json.name.length);
			 
			for(i = 0; i < json.name.length; i++) {
		
				DisplayOrders[json.order[i] - 1] = json.name[i];
				isDisplayed[json.order[i] - 1] = json.check[i];
			}
	
   
			for(j = 0; j < json.name.length; j++) {
				if(isDisplayed[j] == 'true') {
					Elements.push("<div id=" + DisplayOrders[j]+"Container class=" + "right" + DisplayOrders[j].charAt(0).toUpperCase() + DisplayOrders[j].slice(1) + ">" + $("#"+DisplayOrders[j]+"Container").html() + "</div>");
				}
				else {
					Elements.push("<div id=" + DisplayOrders[j]+"Container class=" + "right" + DisplayOrders[j].charAt(0).toUpperCase() + DisplayOrders[j].slice(1) + " style=" + "display:none;" + ">" + $("#"+DisplayOrders[j]+"Container").html() + "</div>");
				}
			}
			console.log(Elements);
			for(a = 0; a < Elements.length; a++) {
				result += Elements[a] + "\n";
			}
			$("body").html(result);
        	test = json;
        	
        }
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