(function () {

    angular
        .module('app')
        .controller('ControlPanelController', [
            '$scope', '$firebaseObject',
            ControlPanelController
        ]);

    function ControlPanelController($scope, $firebaseObject) {
        console.log($scope.platform);
        var ref = new Firebase("https://jebs-a-mess.firebaseio.com");
        $scope.data = $firebaseObject(ref.child("platform").child("production"));
        var syncObject = $firebaseObject(ref.child("platform").child("production"));
        syncObject.$bindTo($scope, "data");
    }

})();
