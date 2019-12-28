'use strict';

angular.module('myApp.pg', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/preservationGroups', {
    templateUrl: 'preservationGroups/view3.html',
    controller: 'pgCtrl'
  });
}])

.controller('pgCtrl', [function() {

}]);