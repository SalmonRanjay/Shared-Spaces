var args = arguments[0] || {};

function createUserTable(){
   var names = ["hotep", "kemet", "Egypt", "ethiopia", "mali", "songhay"];
   for(var i = 0; i<= 5; i++){
       var tableViewRow = Ti.UI.createTableViewRow({
           height: "56dp",
           width: Ti.UI.FILL,
           layout: 'horizontal'
       });
       
      
       // Create an ImageView.
       var userImage = Ti.UI.createImageView({
           image : 'jerseymike.jpg',
           width : "56dp",
           height : "56dp",
           borderRadius: "28dp",
           left: "10dp"
       });
       userImage.addEventListener('load', function() {
           Ti.API.info('Image loaded!');
       });
       
  
       // Create a Label.
       var UserName = Ti.UI.createLabel({
           text : names[i],
           color : '#textColor',
           left: "20dp",
           height : Ti.UI.SIZE,
           width : Ti.UI.SIZE,
          
           textAlign : 'center'
       });
       
      
       
       
       // Add to the parent view.
       tableViewRow.add(userImage);
       
        // Add to the parent view.
       tableViewRow.add(UserName);
       
        $.membersTable.appendRow(tableViewRow);
       
   }
   
  
    
}

createUserTable();

$.membersTable.addEventListener('click', function(e){
    console.log(JSON.stringify(e));
});
