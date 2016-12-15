(function () {
"use strict";

angular.module('common')
.service('UserService', UserService);


UserService.$inject = [];
function UserService() {
  var service = this;
  var userDetails = [];

  service.addUserDetails = function (objUser) {
    userDetails = objUser;
  };

  service.getUserDetails = function () {
    return userDetails;
  };

}

})();
