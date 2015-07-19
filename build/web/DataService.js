/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var ServiceModule = (function() {
    
    var WeatherService = function() {

        this.url = "http://api.openweathermap.org/data/2.5/weather?q=Waterloo&units=metric&mode=json";
    }
    
    _.extend(WeatherService.prototype, {
        
        queryWeather: function() {
 
            return new Q($.get(this.url));     
        }
    });
    return {
        WeatherService: WeatherService,
    };
})();

