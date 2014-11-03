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
        controller: 'FeedsShowCtrl'
      })

      .state('feeds.show.posts', {
        url: '/posts/:postId',
        abstract: true,
        template: '<ui-view/>',
        controller: 'PostsCtrl'
      })

      .state('feeds.show.posts.show', {
        url: '/',
        templateUrl: 'views/posts/show.html'
      })

      .state('feeds.show.posts.edit', {
        url: '/edit',
        templateUrl: 'views/posts/edit.html',
        controller: 'PostsEditCtrl'
      })
  })
;
