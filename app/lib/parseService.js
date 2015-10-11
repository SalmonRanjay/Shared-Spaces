
var baseUrl = Alloy.Globals.baseUrl; //"https://web-server-interface-app.herokuapp.com/api/v1";

var Q = require('q');



module.exports.isLoggedIn = function(sessionToken){
	
	var data = {
		url : baseUrl +"/users/isLoggedIn/"+sessionToken,
		method: "GET"
	};
	
	return makeRequest('isLoggedIn', data);
};

module.exports.logout = function(sessionToken){
	
	var data = {
		url : baseUrl +"/users/logout/"+sessionToken,
		method: "GET"
	};
	
	return makeRequest('logout', data);
	
};

module.exports.login = function(username, password){
    var data = {
        url : baseUrl + "/users/login/"+ username + "/" +password,
        method: "GET"
    };
    
    return makeRequest('login', data);
};


module.exports.getMessages = function(){
	
	var data = {
		
		url: baseUrl + '/messages',
		method: "GET"
	};
	
	return makeRequest('getMessages', data);
	
};

module.exports.createPost = function(post){
    
    var data = {
        url:  baseUrl + "/content/createpost",
        method: "POST",
        params : post
    };
    
    return makeRequest('createPost', data);
    
};

module.exports.getPosts = function(){
    var data = {
      url : baseUrl + "/content/getPosts" ,
       method: "GET"
    };
    
    return makeRequest('getPosts', data);
};

function makeRequest(_action, _data){
	
	var deferred = Q.defer();
	var url = _data.url;
	var method = _data.method;
	
	var client = Ti.Network.createHTTPClient({
		// function called when the response data is available
		onload : function(e) {
			switch(_action){
				
				case 'signUp':
				    console.log("signup in request lib");
					var response = JSON.parse(this.responseText);
					Ti.App.Properties.setString('session-token', response.sessionToken);
					//Alloy.Globals.currentUser = response;
					return deferred.resolve(response);
					break;
				case 'login':
				    console.log("login in request lib");
					var response = JSON.parse(this.responseText);
					Ti.App.Properties.setString('session-token', response.sessionToken);
					//Alloy.Globals.currentUser = response;
					return deferred.resolve(response);
					
					break;
				case 'getMessages':
					var response = JSON.parse(this.responseText);
					return deferred.resolve(response);
					break;
				case 'logout': 
				    console.log("log out in request lib");
				    var response = JSON.parse(this.responseText);
				    Ti.App.Properties.removeProperty('session-token');
				    Alloy.Globals.currentUser = null;
				    return deferred.resolve(response);
				    break;
				case 'isLoggedIn' :
				    console.log("is logged in from request lib");
				    var response = JSON.parse(this.responseText);
                  
                    return deferred.resolve(response);
                    break;
                case 'createPost' :
                    Ti.API.info("Received text inside httpcall createPost: " + this.responseText);
                    var response = JSON.parse(this.responseText);
                    return deferred.resolve(response);
                    break;
                 case 'getPosts': 
                    Ti.API.info("Received Posts inside httpcall getpost: " + this.responseText);
                    var response = JSON.parse(this.responseText);
                    return deferred.resolve(response);
                    break;
				default: 
					Ti.API.info("Received text inside httpcall defualt: " + this.responseText);
					var response = JSON.parse(this.responseText);
					return deferred.resolve(response);
					break;
			}
			//Ti.API.info("Received text: " + this.responseText);
			//alert('success');
		},
		// function called when an error occurs, including a timeout
		onerror : function(e) {
			Ti.API.debug(e.error);
			//alert('error');
			deferred.reject(e);
		},
		timeout : 5000 // in milliseconds
	});
	// Prepare the connection.
	client.open(method, url);
	// Send the request.
	var params = _data.params;
	 if (!params)
	 {
	 	client.send();
	 }
	 else
	 {
	 	client.send(params);
	 }
	 
	 return deferred.promise;
	
	
}
