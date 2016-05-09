(function(){
  'use strict';

  angular.module('app')
        .service('tableService', [
        '$q',
      tableService
  ]);

  function tableService($q){
    var tableData = [
      {
        issue: 'Patient IO Skin',
        progress: 100,
        status: 'Done',
        class: 'md-accent'
      },
      {
        issue: 'Side Navigation',
        progress: 100,
        status: 'Done',
        class: 'md-accent'
      },
      {
        issue: 'Firebase Integration',
        progress: 40,
        status: 'In Progress',
        class: 'md-accent'
      },
      {
        issue: 'Platform Screen',
        progress: 40,
        status: 'In Progress',
        class: 'md-accent'
      },
      {
        issue: 'Dashboard Screen',
        progress: 0,
        status: 'To do',
        class: 'md-accent'
      },
      {
        issue: 'Mobile Screen',
        progress: 0,
        status: 'To do',
        class: 'md-accent'
      }
    ];

    return {
      loadAllItems : function() {
        return $q.when(tableData);
      }
    };
  }
})();
