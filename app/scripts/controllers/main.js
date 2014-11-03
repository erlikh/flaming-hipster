'use strict';

/**
 * @ngdoc function
 * @name flamingHipsterApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the flamingHipsterApp
 */
angular.module('flamingHipsterApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
