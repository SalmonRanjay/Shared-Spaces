var args = arguments[0] || {};

var acceptedItems = [];
var pendingItems = [];
var declinedItems = [];

var indexItemCLicked = {};

function getPurchases(){
    
};



$.purchaseseTab.addEventListener("focus", function(e){
    //console.log(e);
    console.log("im active");
});

var pendingItems = [{

    pic : {
        image : "jerseymike.jpg"
    },
    totalPrice : {
        text : "55"
    },
    myShare : {
        text : "20"
    },
     groupName:{
        text: "Kemetic"
    }
}, {
    pic : {
        image : "jetspizza.png"
    },
    totalPrice : {
        text : "55"
    },
    myShare : {
        text : "20"
    },
     groupName:{
        text: "Fulani"
    }
}];
$.pendingSection.setItems(pendingItems);
//sections.push($.pendingSection);

var acceptedItems = [{

    pic : {
        image : "moes-burrito.jpg"
    },
    totalPrice : {
        text : "55"
    },
    myShare : {
        text : "20"
    },
    groupName:{
        text: "Dogon"
    },
    items: {
        "image": "moes-burrito.jpg",
        "cost" : "55",
        "myCost": "20",
        "groupName": "Dogon"
    }
},{

    pic : {
        image : "sprint-logo.jpg"
    },
    totalPrice : {
        text : "55"
    },
    myShare : {
        text : "20"
    },
     groupName:{
        text: "keesi"
    },
    items: {
        "image": "sprint-logo.jpg",
        "cost" : "55",
        "myCost": "20",
        "groupName": "Keesi"
    }
}];
$.acceptedSection.setItems(acceptedItems);

var refreshCount = 0;


/*
 * List View Click event listener
 * Allow users to optin or optout 
 */

$.listView.addEventListener("itemclick",function(e){
    
    if(e.section.id === "pendingSection"){
        indexItemCLicked = e;
       console.log("Row "+ JSON.stringify(e));
        $.dialog.show();
    }else if(e.section.id === "cancelledSection") {
        alert("This purchase has been cancelled");
    }else{
        // show to the user the details of the purchase
        
        
    }
   
});

/*
 * Opt User into purchase
 * 
 */

function optUserIn(e){
    console.log(JSON.stringify(e));
    console.log(indexItemCLicked.itemIndex);
    if(e.index == 1){
        // user opted in
        // perform logic to transition to detail controller
       
        //
        console.log(indexItemCLicked);
        var detailsController = Alloy.createController("purchaseDetail", {
           "items": indexItemCLicked.items,
           
        }).getView();
        $.purchaseseTab.open(detailsController);
        
    }else{
        // user opted out
        // perform server call to indicate user opted out
        /*
         * Functionality to remove an object from an array
         */
        acceptedItems.splice(0, 0, pendingItems[indexItemCLicked.itemIndex]);
         pendingItems.splice(indexItemCLicked.itemIndex, 1);
         
         
         $.acceptedSection.setItems(acceptedItems);
         $.pendingSection.setItems(pendingItems);
    }
}
