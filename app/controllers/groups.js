var args = arguments[0] || {};
 
function createGroup(e){
    var createGroupController = Alloy.createController("createGroup").getView();
    $.groupsTab.open(createGroupController);
}
