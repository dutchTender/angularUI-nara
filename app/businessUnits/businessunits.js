'use strict';

angular.module('myApp.bu', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/businessUnits', {
    templateUrl: 'businessUnits/businessunits.html',
    controller: 'buCtrl'
  });
}])

.controller('buCtrl', ['$scope','$http',function($scope, $http) {

  var request_headers = {
    "Accept":"application/json"
  };

  $http.get("http://localhost:8082/um/business-units", { headers: request_headers }).then( function (response) {

    $scope.businessunits = response.data;

  })



}]);