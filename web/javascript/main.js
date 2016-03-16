/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$(document).ready(function() {
    //document.getElementById('testid').innerHTML = "im working"; 
    var weatherView = new ViewModule.WeatherView(new ServiceModule.WeatherService());
    date_time('date_time');
    setInterval(updateConfig,1000);
});

var test = "";

function updateConfig(){
  
  //how to set up Python simple server: http://stackoverflow.com/a/21608670
  //abhitha@ubuntu:~/fydp-smartmirror/SmartMirror/SmartMIrror/web/javascript$ python -m SimpleHTTPServer
  //sets up simple server at port 8000
  
  //console.log("I'm running");
  
  var request = $.ajax({
  type: 'GET',
  url: "/web/javascript/Config.jsonp",
  async: false,
  jsonpCallback: 'jsonCallback',
  contentType: "application/json",
  dataType: 'jsonp'
  });
  request.done(function(json) {
     //console.log(json);
     if(JSON.stringify(json) !== JSON.stringify(test)) {
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
  				$("#"+DisplayOrders[j]+"Container").remove();
  			}
  			console.log(Elements);
  			for(a = 0; a < Elements.length; a++) {
  				result += Elements[a] + "\n";
  			}
  			$("#authorize-div").before(result);
          	test = json;
      }
  });
  request.fail(function(e) {
     console.log(e.message);
  });
}
