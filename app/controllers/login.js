var args = arguments[0] || {};

var parent = args.parent;
var parseClient = require('parseService');


$.loginButton.addEventListener("click", function(e){
	login();
});

var login = function(){
    $.activityIndicator.show();
	
	var username = $.username.value;
	var password = $.password.value;
	
	parseClient.login(username, password).then(function(user){
	    
	    console.log("login from inside .then");
	    
	        alert(user);
            console.log("use the app");
            console.log(user.sessionToken);
            //Ti.App.Properties.setString('session_id', result.sessionToken);
            var mainScreen = Alloy.createController('index', {loginController: $}).getView();
            mainScreen.open();
	    
	},function(error){
	    alert("Error: "+JSON.stringify(error));
	});
	
	
	/*
	var url = Alloy.Globals.baseUrl + "/users/login/"+ username + "/" +password;

	var client = Ti.Network.createHTTPClient({
		onload : function(e) {
		    $.activityIndicator.hide();

			Ti.API.info("Received text: " + this.responseText);
			var result = JSON.parse(this.responseText);
            Alloy.Globals.currentUser = result;
			alert(result);
			console.log("use the app");
			console.log(result.sessionToken);
		    Ti.App.Properties.setString('session-token', result.sessionToken);
			var mainScreen = Alloy.createController('index', {loginController: $}).getView();
			mainScreen.open();
			
			//$.loginWindow.close();

		},
		onerror : function(e) {
			Ti.API.debug(e.error);
			$.activityIndicator.hide();
			alert('error');
			
			///var signup = Alloy.createController('login').getView();
			//signup.open();
		},
		timeout : 5000
	});

	client.open("GET", url);
	client.send();

    */
	
};
