'use strict';

/**
 * @ngdoc function
 * @name flamingHipsterApp.controller:ApplicationCtrl
 * @description
 * # ApplicationCtrl
 * Controller of the flamingHipsterApp
 */
angular.module('flamingHipsterApp')
  .controller('ApplicationCtrl', function($scope, railsIssues, feedzillaPosts) {
    $scope.feeds = [
      {
        id: 0,
        title: 'Github',
        description: 'Rails Issues',
        loader: railsIssues,
        postTemplate: 'views/feeds/providers/_github.html'
      },
      {
        id: 1,
        title: 'Feedzilla',
        description: 'Top News',
        loader: feedzillaPosts,
        postTemplate: 'views/feeds/providers/_feedzilla.html'
      }
    ];

    angular.forEach($scope.feeds, function(feed) {
      feed.loader.load().then(function(data) {
        feed.posts = data;
      });
    });
  })
;
