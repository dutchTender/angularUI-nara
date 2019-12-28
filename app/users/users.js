'use strict';

angular.module('myApp.user', ['ngRoute','datatables'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/users', {
    templateUrl: 'users/users.html',
    controller: 'userCtrl'
  });
}])

.controller('userCtrl', ['$scope','$http', function( $scope, $http) {

  // this is where we call our api and use returning data to
  // create the model for the view
  var request_headers = {
    "Accept":"application/json"
  };

  $http.get("http://localhost:8082/um/users", { headers: request_headers }).then( function (response) {
       ////alert("11111111111");
       //alert (JSON.stringify(response.data));
       //alert("222222222222222222222");
       $scope.users = response.data;

  })




}]);