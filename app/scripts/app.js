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
    'ui.router'
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
        templateUrl: 'views/feeds/layout.html'
      })

      .state('feeds.show', {
        url: '/:feedId',
        templateUrl: 'views/feeds/show.html',
      })

      .state('feeds.show.post', {
        url: '/posts/:postId',
        templateUrl: 'views/feeds/post-details.html'
      })
  })
;
