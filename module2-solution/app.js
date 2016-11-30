(function functionName() {
  'use strict';


  angular.module('ShoppingListCheckOff', [])
  .controller('ToBuyController', ToBuyController)
  .controller('AlreadyBoughtController', AlreadyBoughtController)
  .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

  ToBuyController.$inject = ['ShoppingListCheckOffService'];
  function ToBuyController(ShoppingListCheckOffService){
    var itemToBuy = this;


    itemToBuy.listToBuy = ShoppingListCheckOffService.getItem(true);

    // itemToBuy.removeItem = function (itemIndex,name,quantity){
    itemToBuy.removeItem = function (itemIndex){
      ShoppingListCheckOffService.addItem(itemToBuy.listToBuy[itemIndex].name,itemToBuy.listToBuy[itemIndex].quantity);
      ShoppingListCheckOffService.removeItem(itemIndex);
    };
  }

  AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
  function AlreadyBoughtController(ShoppingListCheckOffService){
    var itemsBought = this;
    itemsBought.listBought = ShoppingListCheckOffService.getItem(false);
  }

  function ShoppingListCheckOffService(){
    var service = this;
    var listToBuy = [{name: "Milk",quantity: "2"},
                    {name: "Donuts",quantity: "200"},
                    {name: "Cookies",quantity: "300"},
                    {name: "Chocolate",quantity: "5"},
                    {name: "Pepsi",quantity: "10"}];

    var listBought = [];

    service.addItem = function(itemName, quantity){
      var item = {
        name: itemName,
        quantity: quantity
      };
      listBought.push(item);
    };

    service.getItem = function (whichList){
      if(whichList){
        return listToBuy;
      }else{
        return listBought;
      };
    };

    service.removeItem = function (itemIndex){
      listToBuy.splice(itemIndex,1);
    };

  }


})();
