var args = arguments[0] || {};

var data = [{
    balance : {
        text : 40
    },
    accountNickName : {
        text : "Something"
    }
}, {
    balance : {
        text : 35
    },
    accountNickName : {
        text : "Hello world"
    }
}, {
    balance : {
        text : 56
    },
    accountNickName : {
        text : "You loer"
    }
}, {
    balance : {
        text : 90
    },
    accountNickName : {
        text : "testing"
    }
}];

$.accountsSection.setItems(data); 

$.accountsLIst.addEventListener("itemclick", function(e){
    var details = Alloy.createController("accountsManage").getView();
    $.invitationTab.open(details);
});
