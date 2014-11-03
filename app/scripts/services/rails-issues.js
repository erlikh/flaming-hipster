'use strict';

/**
 * @ngdoc service
 * @name flamingHipsterApp.railsIssues
 * @description
 * # railsIssues
 * Factory in the flamingHipsterApp.
 */
angular.module('flamingHipsterApp')
  .factory('railsIssues', function(Restangular) {
    return {
      load: function(params) {
        params = params || {state: 'closed', per_page: 10};

        var issues = Restangular
            .withConfig(function(RestangularConfigurer) {
              RestangularConfigurer.setBaseUrl('https://api.github.com/repos/rails/rails');
            })
            .all('issues')
            .getList(params)
          ;

        return issues;
      }
    }
  });
