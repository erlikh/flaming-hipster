'use strict';

/**
 * @ngdoc function
 * @name flamingHipsterApp.controller:PostsCtrl
 * @description
 * # PostsCtrl
 * Controller of the flamingHipsterApp
 */
angular.module('flamingHipsterApp')
  .controller('PostsCtrl', function($scope, $stateParams) {
    $scope.$watch('feed.posts', function() {
      $scope.post = _.find($scope.feed.posts, {id: +$stateParams.postId});
    });
  });
