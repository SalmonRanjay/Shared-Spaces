var args = arguments[0] || {};

var parseClient = require('parseService');
var sessionId = Ti.App.Properties.getString('session-token');

$.logoutButton.addEventListener('click', function(e){
	
	$.activityIndicator.show();
	
	parseClient.logout(sessionId).then(function(response){
		console.log(" logout response inside promise: " + response);
		console.log("logout inside .then");
		$.activityIndicator.hide();
		Ti.App.Properties.removeProperty("session-token");
		
		var loginController = Alloy.createController('login').getView();
		loginController.open();
		
	},function(error){
	    $.activityIndicator.hide();
		console.log(error);
	});
	
});
