(function () {
'use strict';

angular.module('data')
.service('MenuDataService', MenuDataService)
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");


MenuDataService.$inject = ['$http', 'ApiBasePath','$filter'];
function MenuDataService($http, ApiBasePath, $filter) {
  var service = this;

  // List of shopping items
  // var categories = [];
  // var items = [];

  service.getAllCategories = function () {
    return $http({
      method: "GET",
      url: (ApiBasePath + "/categories.json")
    }).then(function (result) {
      return result.data;
    })
    .catch(function (error) {
      return error;
    });
  };

  service.getItemsForCategory = function (categoryShortName) {
    return $http({
      method: "GET",
      url: (ApiBasePath + "/menu_items.json?category=" + categoryShortName)
    }).then(function (result) {
      return result.data.menu_items;
    })
    .catch(function (error) {
      return error;
    });
  };
}

})();
