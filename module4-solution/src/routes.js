(function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/');

  // *** Set up UI states ***
  $stateProvider

  // Home page
  .state('home', {
    url: '/',
    templateUrl: 'src/data/templates/home.template.html'
  })

  .state('categories', {
    url: '/categories',
    templateUrl: 'src/data/templates/category.template.html',
    controller: 'CategoryListController as catList',
    resolve: {
      categories: ['MenuDataService', function (MenuDataService) {
        return MenuDataService.getAllCategories();
      }]
    }
  })

  .state('items', {
    url: '/items/{shortName}',
    templateUrl: 'src/data/templates/items.template.html',
    controller: 'CategoryDetailController as catDetail',
    resolve: {
      item: ['$stateParams', 'MenuDataService',
        function ($stateParams, MenuDataService) {
          return MenuDataService.getItemsForCategory($stateParams.shortName);
        }]
    }
  });

}

})();
