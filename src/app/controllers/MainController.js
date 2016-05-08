(function(){

  angular
       .module('app')
       .controller('MainController', [
          'navService', '$mdSidenav', '$log', '$q', '$state', '$mdToast',
          MainController
       ]);

  function MainController(navService, $mdSidenav, $log, $q, $state, $mdToast) {
    var vm = this;

    vm.menuItems = [ ];
    vm.selectItem = selectItem;
    vm.toggleItemsList = toggleItemsList;
    vm.title = $state.current.data.title;
    vm.showSimpleToast = showSimpleToast;
    vm.toggleRightSidebar = toggleRightSidebar;

    navService
      .loadAllItems()
      .then(function(menuItems) {
        vm.menuItems = [].concat(menuItems);
      });

    function toggleRightSidebar() {
        $mdSidenav('right').toggle();
    }

    function toggleItemsList() {
      var pending = $q.when(true);

      pending.then(function(){
        $mdSidenav('left').toggle();
      });
    }

    function selectItem (item) {
      vm.title = item.name;
      vm.toggleItemsList();
      if (vm.title.toString() !== "Platform") {
        vm.showSimpleToast("The screen for " + vm.title + " has not yet been completed.");
      };
    }

    function showSimpleToast(title) {
      $mdToast.show(
        $mdToast.simple()
          .content(title)
          .hideDelay(2000)
          .position('bottom right')
      );
    }
  }

})();
