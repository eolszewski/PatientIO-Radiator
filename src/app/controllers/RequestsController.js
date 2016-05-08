(function(){

  angular
    .module('app')
    .controller('RequestsController', [
      'requestsService',
      RequestsController
    ]);

  function RequestsController(requestsService) {
    var vm = this;

    vm.requests = [];

    requestsService
      .loadAllItems()
      .then(function(requests) {
        vm.requests = [].concat(requests);
      });
  }

})();
