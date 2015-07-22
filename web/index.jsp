<%-- 
    Document   : index
    Created on : Jul 19, 2015, 8:29:18 AM
    Author     : abhitha
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <script src="jquery-1.11.3.min.js"></script>
        <script src="main.js"></script>
        <script src="underscore-min.js"></script>
        <script src="q.js"></script>
        <script src="model.js"></script>
        <script src="view.js"></script>
        <script src="DataService.js"></script>
        <link rel="stylesheet" type="text/css" href="Styles.css">
        <script type="text/javascript" src="date_time.js"></script>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">            
        <script src="https://apis.google.com/js/client.js?onload=checkAuth">
        </script>
        <title>Smart Mirror</title>
    </head>
    <body>
        <div id="weatherContainer">
        <div id="date_time" class="weather"></div>        
        <div class="weather" id="clouds"> </div>
        <div class="weather" id="location"> </div>
        <div class="weather" id="temp"> </div>
        </div>
        
        <div id="authorize-div" style="display: none">
          <span>Authorize access to Gmail API</span>
          <!--Button for the user to click to initiate auth sequence -->
          <button id="authorize-button" onclick="handleAuthClick(event)">
            Authorize
          </button>
        </div>
        <div id="emailContainer" class="rightEmail"> 
        </div>
        <div id="calendarContainer" class="rightCalendar">
        </div>    
    </body>
</html>