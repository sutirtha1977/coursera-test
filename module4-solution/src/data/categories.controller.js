(function () {
'use strict';

angular.module('data')
.controller('CategoryListController', CategoryListController);

CategoryListController.$inject = ['categories'];
function CategoryListController(categories) {
  var catList = this;
  catList.items = categories;

}

})();
