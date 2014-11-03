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
        slug: 'github',
        loader: railsIssues
      },
      {
        id: 1,
        title: 'Feedzilla',
        description: 'Top News',
        slug: 'feedzilla',
        loader: feedzillaPosts
      }
    ];

    $scope.providerTemplate = function(slug, action) {
      return '/views/posts/providers/' + slug + '/' + action + '.html';
    };

    angular.forEach($scope.feeds, function(feed) {
      feed.loader.load().then(function(data) {
        feed.posts = data;
      });
    });
  })
;
