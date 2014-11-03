'use strict';

/**
 * @ngdoc function
 * @name flamingHipsterApp.controller:FeedsShowCtrl
 * @description
 * # FeedsShowCtrl
 * Controller of the flamingHipsterApp
 */
angular.module('flamingHipsterApp')
  .controller('FeedsShowCtrl', function($scope, $stateParams) {
    $scope.feed = _.find($scope.feeds, {id: +$stateParams.feedId});
  })
;
