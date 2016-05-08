(function(){

  angular
    .module('app')
    .controller('DashboardController', [
      'tableService',
      DashboardController
    ]);

  function DashboardController(tableService) {
    var vm = this;

    vm.tableData = [];

    tableService
      .loadAllItems()
      .then(function(tableData) {
        vm.tableData = [].concat(tableData);
      });
  }

})();
