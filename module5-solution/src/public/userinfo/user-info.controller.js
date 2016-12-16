(function () {
"use strict";

angular.module('public')
.controller('UserInfoController', UserInfoController);

UserInfoController.$inject = ['UserService','ApiPath']
function UserInfoController(UserService, ApiPath) {
  var $ctrl = this;
  var userDetails;

  $ctrl.basePath = ApiPath;

  userDetails = UserService.getUserDetails();
  if(userDetails.length === 0){
    $ctrl.showLink = true;
  }else{
    $ctrl.showLink = false;
    $ctrl.userDetails = userDetails;
    console.log(userDetails);
  }
}

})();
