'use strict';

/**
 * @ngdoc overview
 * @name flamingHipsterApp
 * @description
 * # flamingHipsterApp
 *
 * Main module of the application.
 */
angular
  .module('flamingHipsterApp', [
    'ui.router',
    'restangular'
  ])

  .config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/dash');

    $stateProvider
      .state('dashboard', {
        url: '/dash',
        templateUrl: 'views/dashboard.html'
      })

      .state('feeds', {
        url: '/feeds',
        abstract: true,
        template: '<ui-view/>'
      })

      .state('feeds.show', {
        url: '/:feedId',
        templateUrl: 'views/feeds/show.html',
        controller: function($scope, $stateParams) {
          $scope.feed = _.find($scope.feeds, {id: +$stateParams.feedId});
        }
      })

      .state('feeds.show.post', {
        url: '/posts/:postId',
        templateUrl: 'views/posts/show.html',
        controller: function($scope, $state, $stateParams) {
          $scope.$watch('feed.posts', function() {
            $scope.post = _.find($scope.feed.posts, {id: +$stateParams.postId});
          });
        }
      })

      .state('feeds.show.post.edit', {
        url: '/edit',
        templateUrl: 'views/posts/edit.html',
        controller: function($scope, $state, $stateParams) {
          $scope.$watch('feed.posts', function() {
            $scope.post = _.find($scope.feed.posts, {id: +$stateParams.postId});
          });
        }
      })
  })
;
