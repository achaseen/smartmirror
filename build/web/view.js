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
             console.log(result.data); 
             location.innerHTML = "Your Location:" + result.name;
             temp.innerHTML = "It is " + result.main.temp + " Degrees Outside";
             cloud.innerHTML = "Look outside " + result.weather[0].description;
             
             
          });
          
      },
      
      update: function(event) {
          
      },
       
        
   });
   
   return {
       WeatherView: WeatherView,
   };
    
})();

