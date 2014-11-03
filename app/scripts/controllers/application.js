'use strict';

/**
 * @ngdoc function
 * @name flamingHipsterApp.controller:ApplicationCtrl
 * @description
 * # ApplicationCtrl
 * Controller of the flamingHipsterApp
 */
angular.module('flamingHipsterApp')
  .controller('ApplicationCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
