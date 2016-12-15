(function () {
'use strict';

angular.module('AstrologyApp')
.service('CalculationService', CalculationService)
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");

CalculationService.$inject = ['$http', 'ApiBasePath','$filter'];
function CalculationService($http, ApiBasePath, $filter) {
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


}

})();
