(function(){

  angular
    .module('app')
    .controller('MobileController', [
      'tableService',
      MobileController
    ]);

  function MobileController(tableService) {
    var vm = this;

    vm.tableData = [];

    tableService
      .loadAllItems()
      .then(function(tableData) {
        vm.tableData = [].concat(tableData);
      });
  }

})();
