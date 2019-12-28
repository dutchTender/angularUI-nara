'use strict';

angular.module('myApp.bu', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/businessUnits', {
    templateUrl: 'businessUnits/view2.html',
    controller: 'buCtrl'
  });
}])

.controller('buCtrl', [function() {

}]);