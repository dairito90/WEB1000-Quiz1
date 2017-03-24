angular.module('phoneAndName', [])
.controller('Controller', ['$scope', function($scope) {
  $scope.name = '';
  $scope.phone ='';

  $scope.answer = function() {
    $scope.say = '' + $scope.name + $scope.phone;
  };
}]);
