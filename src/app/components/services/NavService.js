(function(){
  'use strict';

  angular.module('app')
          .service('navService', [
          '$q',
          navService
  ]);

  function navService($q){
    var menuItems = [
      {
        name: 'Platform',
        icon: 'whatshot',
        sref: '.platform'
      },
      {
        name: 'Dashboard',
        icon: 'desktop_windows',
        sref: '.dashboard'
      },
      {
        name: 'Mobile',
        icon: 'phone_android',
        sref: '.mobile'
      }
    ];

    return {
      loadAllItems : function() {
        return $q.when(menuItems);
      }
    };
  }

})();
