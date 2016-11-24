(function () {
  'use strict';

  angular.module('LunchCheck', [])
  .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];

  function LunchCheckController($scope) {
    $scope.message = "";
    $scope.inputValue = "";
    $scope.emptyMessage = "";


    $scope.displayMessage = function () {
      if ($scope.inputValue == "") {
        $scope.message = "Please enter data first";
        $scope.emptyMessage = "";
        changeColor(0);
      } else {
        var intCount = 0;
        var newList = cleanArray($scope.inputValue.split(','));

        if (newList.length > 3) {
          $scope.message = "Too much!";
        } else {
          $scope.message = "Enjoy!";
        };
        changeColor(1);
        if (intCount > 0){
          $scope.emptyMessage = "empty item, i.e., , is not considered as an item"
        }else{
          $scope.emptyMessage = "";
        }
      };

      function cleanArray(actualArray) {
        var newArray = new Array();
        for(var i = 0; i < actualArray.length; i++ ){
          if(actualArray[i]){
            newArray.push(actualArray[i]);
          }else {
            intCount += 1;
          }
        }
        return newArray;
      }

      function changeColor(forWhichMsg) {
        if (forWhichMsg == 0) {
          $scope.myMsgObj = {
            "color" : "red"
          };
          $scope.myTextObj = {
            "border-color" : "red"
          };
        } else {
          $scope.myMsgObj = {
            "color" : "green"
          };
          $scope.myTextObj = {
            "border-color" : "green"
          };
        }
      }
    };
  };

})();
