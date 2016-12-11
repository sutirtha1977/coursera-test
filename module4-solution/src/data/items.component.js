(function () {
'use strict';

angular.module('data')
.component('items', {
  templateUrl: 'src/data/templates/itemdetail.template.html',
  bindings: {
  item: '<'
  }
});

})();
