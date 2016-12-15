(function () {
'use strict';

angular.module('data')
.controller('CategoryListController', CategoryListController);

CategoryListController.$inject = ['categories','$filter'];
function CategoryListController(categories, $filter) {
  var catList = this;
  catList.items = categories;
  catList.searchCategory = function () {
    // console.log(categories[0].name);
    // var searchCategories = [];
    // for (var item in categories){
    //   console.log($filter('filter')(categories[item].name, catList.searchTerm));
    //   if($filter('filter')(categories[item].name, catList.searchTerm)){
    //     console.log(categories[item]);
    //       searchCategories.push(categories[item]);
    //   };
    // };
    // console.log(searchCategories);
    // catList.items = searchCategories;
    catList.items = $filter('filter')(categories, catList.searchTerm);
  }

}

})();
