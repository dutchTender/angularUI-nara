'use strict';

// Declare app level module which depends on views, and core components
angular.module('myApp', [
  'ngRoute',
  'datatables',
  'myApp.user',
  'myApp.bu',
  'myApp.pg',
  'myApp.version'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/user'});


}]);




function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}
