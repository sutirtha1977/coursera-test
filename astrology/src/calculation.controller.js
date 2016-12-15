(function () {
'use strict';

angular.module('AstrologyApp')
.controller('CalculationController', CalculationController);

CalculationController.$inject = ['CalculationService'];
function CalculationController(CalculationService) {
  var menu = this;
  menu.searchValue = "";
  menu.errorMessage = "";

  menu.getMatchedMenuItems = function () {
    if(menu.searchValue){
      var promise = CalculationService.getMatchedMenuItems(menu.searchValue);
      promise.then(function (response) {
          if(response.length){
            menu.found = response;
            menu.errorMessage = "";
          }else{
            menu.found = CalculationService.getItems();
            menu.errorMessage = "Nothing found";
          }
      })
      .catch(function (error) {
          menu.errorMessage = error.message;
      });
    }else{
      menu.found = [];
      menu.errorMessage = "Nothing found";
    }
  }

}

})();
