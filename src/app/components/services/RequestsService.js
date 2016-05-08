(function(){
  'use strict';

  angular.module('app')
        .service('requestsService', [
        '$q',
        requestsService
  ]);

  function requestsService($q){
    var requests = [
      {
        timeStamp: '6:28pm Saturday, May 7, 2016 (CDT)',
        url : '/api/12345qweio-234frv-y13q/sponsors/m82914fn-vw5eh54g-fq34f-qgw4/patients/qger-wergqq34-gq3v45-vafevfe',
        detail: 'Failed to fetch patient'
      }
    ];

    return {
      loadAllItems : function() {
        return $q.when(requests);
      }
    };
  }

})();
