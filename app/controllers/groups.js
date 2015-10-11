var args = arguments[0] || {};
 
 var parseClient = require('parseService');
 var users = [];
 
 parseClient.getAllUsers().then(function(response){
    
     
     
     users = response.results;
     console.log("success "+ JSON.stringify(users));
     //createUserTable(users);
    
},function(error){
    console.log("Error "+ JSON.stringify(error));
    });
 
function createGroup(e){
    //var createGroupController = Alloy.createController("createGroup",{"users":users}).getView();
    //$.groupsTab.open(createGroupController);
}