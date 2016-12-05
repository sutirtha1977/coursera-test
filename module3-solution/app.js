(function () {
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.directive('foundItems', FoundItems)
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");

function FoundItems() {
  var ddo = {
    templateUrl: 'foundList.html',
    scope: {
      items: '<foundItem',
      onRemove: '&'
    },
    controller: FoundListDirectiveController,
    controllerAs: 'foundList',
    bindToController: true
  };
  return ddo;
}
function FoundListDirectiveController() {
  var foundList = this;
}

NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService) {
  var menu = this;

  menu.getMatchedMenuItems = function () {
    if(menu.searchValue){
      var promise = MenuSearchService.getMatchedMenuItems(menu.searchValue);
      promise.then(function (response) {
          if(response.length){
            menu.found = response;
            menu.errorMessage = "";
          }else{
            menu.found = MenuSearchService.getItems();
            menu.errorMessage = "Nothing found";
          }
      })
      .catch(function (error) {
          menu.errorMessage = error.message;
      });
    }else{
      menu.errorMessage = "Nothing found";
    }
  }

  menu.removeItem = function (itemIndex) {
    MenuSearchService.removeItem(itemIndex);
  }
}

MenuSearchService.$inject = ['$http', 'ApiBasePath','$filter'];
function MenuSearchService($http, ApiBasePath, $filter) {
  var service = this;
  var foundItems = [];

  service.getMatchedMenuItems = function (searchTerm) {
    return $http({
      method: "GET",
      url: (ApiBasePath + "/menu_items.json")
    }).then(function (result) {
      foundItems = $filter('filter')(result.data.menu_items, searchTerm);
      return foundItems;
    })
    .catch(function (error) {
      return error;
    });
  };

  service.getItems = function () {
    return foundItems;
  };

  service.removeItem = function (itemIndex) {
    foundItems.splice(itemIndex,1);
  }

}

})();
