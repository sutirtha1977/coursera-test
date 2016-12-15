(function () {
"use strict";

angular.module('public')
.controller('SignUpController', SignUpController);

SignUpController.$inject = ['MenuService']
function SignUpController(MenuService) {
  var $ctrl = this;
  $ctrl.errFavDish = false;

  $ctrl.submit = function () {
    MenuService.getMenuItems($ctrl.user.favdish)
    .then(function (result) {
      if(result.menu_items.length === 0){
        $ctrl.errFavDish = true;
      }
    });

  };
}

})();
