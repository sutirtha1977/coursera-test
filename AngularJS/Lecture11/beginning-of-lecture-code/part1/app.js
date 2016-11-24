(function () {
'use strict';

angular.module('MsgApp', [])
.controller('MsgController', MsgController);

MsgController.$inject = ['$scope'];
function MsgController($scope) {
  $scope.name = "Sutirtha";

  $scope.sayMessage = function () {
    return "Sutirtha likes to eat healthy snacks at night!";
  };

}

})();
