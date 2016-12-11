(function () {
'use strict';

angular.module('data')
.component('categories', {
  templateUrl: 'src/data/templates/categorylist.template.html',
  bindings: {
  items: '<'
  }
});

})();
