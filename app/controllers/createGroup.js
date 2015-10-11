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
           borderRadius: "28dp"
       });
       userImage.addEventListener('load', function() {
           Ti.API.info('Image loaded!');
       });
       
  
       // Create a Label.
       var UserName = Ti.UI.createLabel({
           text : names[i],
           color : '#textColor',
           font : {fontSize:myFontSize},
           height : myHeight,
           width : myWidth,
           top : myTop,
           left : myLeft,
           textAlign : 'center'
       });
       
      
       
       
       // Add to the parent view.
       tableViewRow.add(userImage);
       
        // Add to the parent view.
       tableViewRow.add(UserName);
       
   }
    
}

createUserTable();
