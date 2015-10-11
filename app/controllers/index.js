var args = arguments[0] || {};
var parseClient = require('parseService');

var sessionId = Ti.App.Properties.getString('session-token');
console.log("Session Token: "+sessionId);

var parent = $;

var logincontroller = args.loginController || {close: function(){console.log("close");}};

Alloy.Globals.tabGroup = $.tabGroup;

//isLoggedIn();
$.activityIndicator.show();

parseClient.isLoggedIn(sessionId).then(function(response){
	
	Ti.API.info("Received text inside promise: " + response);

			alert('success');
			console.log("use the app");
			$.activityIndicator.hide();
			$.tabGroup.open();
	
	
},function(error){
	
			Ti.API.info("error text inside promise: " + error);
			Ti.API.debug(error);
			$.activityIndicator.hide();
			//alert('error');
			
			var login = Alloy.createController('login', {parent: parent}).getView();
			login.open();
});



function isLoggedIn() {
    $.activityIndicator.show();
	var url = Alloy.Globals.baseUrl + "/users/isLoggedIn/" + sessionId;

	var client = Ti.Network.createHTTPClient({
		onload : function(e) {

			Ti.API.info("Received text: " + this.responseText);

			alert('success');
			console.log("use the app");
			$.activityIndicator.hide();
			$.tabGroup.open();

		},
		onerror : function(e) {
		    $.activityIndicator.hide();
			Ti.API.debug(e.error);
			alert('error');
			
			var signup = Alloy.createController('login', {parent: parent}).getView();
			signup.open();
		},
		timeout : 5000
	});

	client.open("GET", url);
	client.send();
	
};










