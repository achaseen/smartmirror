  /* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var ViewModule = (function() {
    
    var WeatherView = function(DataService){
        
        this.DataService = DataService;
        this.init();

    }
    
   _.extend(WeatherView.prototype, {
      init: function() {
          
          var cloud = document.getElementById("clouds");
          var temp = document.getElementById("temp");
          var location = document.getElementById('location');
          
          var promise = this.DataService.queryWeather();
          promise.then(function(result) {
	     //debugger;
             location.innerHTML = result.name;
             temp.innerHTML = result.main.temp + " degrees";
             cloud.innerHTML = result.weather[0].description;
             $("#image").attr("src", "http://openweathermap.org/img/w/" +result.weather[0].icon +".png");
          });
          
      },
      
      update: function(event) {
          
      },
       
        
   });
   
   return {
       WeatherView: WeatherView,
   };
    
})();

