'use strict';

/**
 * @ngdoc function
 * @name flamingHipsterApp.controller:PostsEditCtrl
 * @description
 * # PostsEditCtrl
 * Controller of the flamingHipsterApp
 */
angular.module('flamingHipsterApp')
  .controller('PostsEditCtrl', function($scope, $state, $stateParams) {
    $scope.cancel = function() {
      $state.go('^.show', $stateParams);
    };

    $scope.submit = function() {
      alert('Post saved');
      $state.go('^.show', $stateParams);
    }
  });
