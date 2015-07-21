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
        
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>Smart Mirror</title>
    
        <script type="text/javascript">
      // Your Client ID can be retrieved from your project in the Google
      // Developer Console, https://console.developers.google.com
      var CLIENT_ID = '790846769013-17vdsh4u1j1ne5bonorg0mjuscgg3dg2.apps.googleusercontent.com';

      var SCOPES = ['https://www.googleapis.com/auth/gmail.readonly'];

      /**
       * Check if current user has authorized this application.
       */
      function checkAuth() {
        gapi.auth.authorize(
          {
            'client_id': CLIENT_ID,
            'scope': SCOPES,
            'immediate': true
          }, handleAuthResult);
      }

      /**
       * Handle response from authorization server.
       *
       * @param {Object} authResult Authorization result.
       */
      function handleAuthResult(authResult) {
        var authorizeDiv = document.getElementById('authorize-div');
        if (authResult && !authResult.error) {
          // Hide auth UI, then load client library.
          authorizeDiv.style.display = 'none';
          loadGmailApi();
        } else {
          // Show auth UI, allowing the user to initiate authorization by
          // clicking authorize button.
          authorizeDiv.style.display = 'inline';
        }
      }

      /**
       * Initiate auth flow in response to user clicking authorize button.
       *
       * @param {Event} event Button click event.
       */
      function handleAuthClick(event) {
        gapi.auth.authorize(
          {client_id: CLIENT_ID, scope: SCOPES, immediate: false},
          handleAuthResult);
        return false;
      }

      /**
       * Load Gmail API client library. List labels once client library
       * is loaded.
       */
      function loadGmailApi() {
        gapi.client.load('gmail', 'v1', listMessages);
      }


      
      
        function listMessages() {
        var getPageOfMessages = function(request, result) {
          request.execute(function(resp) {
            result = result.concat(resp.messages);
            
            debugger;
            if(result.length > 0)
            {
                appendPre('Gmail inbox:');
                for(x = 0; x < result.length; x++){
                    outputMessages(result[x].id);
                        
                }

            }
          });
        };
        
        var initialRequest = gapi.client.gmail.users.messages.list({
          'userId': 'me',
          'maxResults': '10',
          'q': 'label:inbox'
        });
        getPageOfMessages(initialRequest, []);
      }
      
      
      function outputMessages(messageId) {
        var request = gapi.client.gmail.users.messages.get({
                        'userId': 'me',
                        'id': messageId
                        });
        request.execute(function(resp) {
            debugger;
                for(i = 0; i < resp.payload.headers.length; i++){
                    debugger;
                    if(resp.payload.headers[i].name == "Subject"){
                        appendPre(resp.payload.headers[i].value);
                    }
                }

        });
      }
      
      
      
      /**
       * Print all Labels in the authorized user's inbox. If no labels
       * are found an appropriate message is printed.
       */  
      function listLabels() {
        var request = gapi.client.gmail.users.labels.list({
          'userId': 'me'
        });

        request.execute(function(resp) {
          var labels = resp.labels;
          appendPre('Labels:');

          if (labels && labels.length > 0) {
            for (i = 0; i < labels.length; i++) {
              var label = labels[i];
              appendPre(label.name)
            }
          } else {
            appendPre('No Labels found.');
          }
        });
      }

      /**
       * Append a pre element to the body containing the given message
       * as its text node.
       *
       * @param {string} message Text to be placed in pre element.
       */
      function appendPre(message) {
        var pre = document.getElementById('output');
        var textContent = document.createTextNode(message + '\n');
        pre.appendChild(textContent);
      }

    </script>
    <script src="https://apis.google.com/js/client.js?onload=checkAuth">
    </script>
        
    </head>
    <body>
<!--        <div id="testid"> 123</div>-->
        <div class="right" id="clouds"> </div>
        <div class="right" id="location"> </div>
        <div class="right" id="temp"> </div>
        
        <div id="authorize-div" style="display: none">
      <span>Authorize access to Gmail API</span>
      <!--Button for the user to click to initiate auth sequence -->
      <button id="authorize-button" onclick="handleAuthClick(event)">
        Authorize
      </button>
    </div>
    <pre class="rightEmail" id="output"></pre>
        
    </body>
</html>
