var args = arguments[0] || {};

var settingsData = [

{pic: {image: "/images/temp-icon.png"}, title : {text: "Line 1"}, 'controller': 'Audio'},
{pic: {image: "/images/temp-icon.png"}, title : {text: "Line 2"},'controller': 'Video'},
{pic: {image: "/images/temp-icon.png"}, title : {text: "Line 3"},'controller': 'Push Notifications'},
{pic: {image: "/images/temp-icon.png"}, title : {text: "Line 4"}, 'controller': 'Images'},
{pic: {image: "/images/Logout-icon.png"}, title : {text: "Logout"} , 'controller':'logout'}

];

$.section.setItems(settingsData);

$.listView.addEventListener('itemclick', function(e){
	
	console.log("list item click");
	
	
	var item = $.section.getItemAt(e.itemIndex);
	
	console.log(JSON.stringify(item));
	
	if(item.controller === 'logout'){
		var logout = Alloy.createController('logout').getView();
		$.settingsTab.open(logout);
	}
});
