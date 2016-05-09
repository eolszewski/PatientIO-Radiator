(function(){

  angular
    .module('app')
    .controller('PlatformController', [
      '$scope', '$firebaseArray',
      PlatformController
    ]);

  function PlatformController($scope, $firebaseArray) {
    var vm = this;
    console.log('hey');
    console.log(this);
    var platformRef = new Firebase("https://jebs-a-mess.firebaseio.com/platform");
    // download the data from a Firebase reference into a (pseudo read-only) array
    // all server changes are applied in realtime
    $scope.environments = $firebaseArray(platformRef);
  }

})();
