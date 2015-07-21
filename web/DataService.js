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
    
 function refreshMessages(){
    var clear = document.getElementById('emailContainer');
    while(clear.firstChild) {
        clear.removeChild(clear.firstChild);    
    }
    //document.getElementById('output').innerHTML="";
    var getPageOfMessages = function(request, result) {
    request.execute(function(resp) {
    result = result.concat(resp.messages);

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
    
refreshMessages();    
setInterval(refreshMessages,100000);
}


function outputMessages(messageId) {
var request = gapi.client.gmail.users.messages.get({
                'userId': 'me',
                'id': messageId
                });
request.execute(function(resp) {
        for(i = 0; i < resp.payload.headers.length; i++){
            if(resp.payload.headers[i].name == "Subject"){
                appendPre(resp.payload.headers[i].value);
            }
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
    $el = $('#emailContainer');
    $el.append('<div class="email">' + message + '</div>');
//var textContent = document.createTextNode(message + '\n');

}


