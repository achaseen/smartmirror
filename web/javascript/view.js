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
          var weatherImage = document.getElementById('weatherImage')
          
          var promise = this.DataService.queryWeather();
          promise.then(function(result) {
            var prefix = 'wi wi-owm-';
            var code = result.weather[0].id;
            var iconD;
            var dorn;

            var today = new Date();
            var hour = today.getHours();

            if (hour > 6 && hour < 20) {
                //Day time
               dorn = "day-";

            } else {
                //Night time
               dorn ="night-";
            }

             iconD = prefix +dorn+ code;

             weatherImage.innerHTML = "<i class='" + iconD + "'></i>"
             location.innerHTML = result.name;
             temp.innerHTML = result.main.temp + " degrees";
             cloud.innerHTML = result.weather[0].description;
             // $("#image").attr("src", "http://openweathermap.org/img/w/" +result.weather[0].icon +".png");
          });
          
      },
      
      update: function(event) {
          
      },
       
        
   });
   
   return {
       WeatherView: WeatherView,
   };
    
})();

