(function () {
"use strict";

angular.module('public')
.component('signForm',{
  templateUrl: 'src/public/signup/signup-component.html',
  controller: SignUpComponentController
});

SignUpComponentController.$inject = ['MenuService','UserService'];
function SignUpComponentController(MenuService,UserService) {
  var $ctrl = this;
  var menuItems = [];
  $ctrl.saveMsg = false;
  $ctrl.errFavDish = false;

  $ctrl.$onInit = function () {
    MenuService.getAllMenuItems()
    .then(function (result) {
      menuItems = result.menu_items;
    });
  };

  $ctrl.submit = function () {
    $ctrl.saveMsg = false;
    $ctrl.errFavDish = false;
    var favDish = $ctrl.user.favdish;
    if(favDish != undefined){
      for(var i = 0; i < menuItems.length; i++){
        if(favDish.toLowerCase() === menuItems[i].short_name.toLowerCase()){
          $ctrl.errFavDish = false;
          $ctrl.user.favMenu = menuItems[i];
          UserService.addUserDetails($ctrl.user);
          $ctrl.saveMsg = true;
          return;
        }
      }
      $ctrl.errFavDish = true;
    }else{
      $ctrl.errFavDish = true;
    }
  };
}

})();
