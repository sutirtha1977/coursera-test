(function () {
'use strict';

angular.module('data')
.controller('CategoryDetailController', CategoryDetailController);

CategoryDetailController.$inject = ['item'];
function CategoryDetailController(item) {
  var catDetail = this;
  catDetail.items = item;
}

})();
