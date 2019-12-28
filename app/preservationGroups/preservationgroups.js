'use strict';

angular.module('myApp.pg', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/preservationGroups', {
    templateUrl: 'preservationGroups/preservationgroups.html',
    controller: 'pgCtrl'
  });
}])

.controller('pgCtrl', ['$scope','$http',function($scope, $http) {
  var request_headers = {
    "Accept":"application/json"
  };

  $http.get("http://localhost:8082/um/preservation-groups", { headers: request_headers }).then( function (response) {

    $scope.preservationgroups = response.data;

  })

}]);