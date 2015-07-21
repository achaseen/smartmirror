/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

    $(document).ready(function() {
        //document.getElementById('testid').innerHTML = "im working"; 
        var weatherView = new ViewModule.WeatherView(new ServiceModule.WeatherService());
        date_time('date_time');
        setInterval(function(){
            debugger;
            
        },5000);
        
    });
    