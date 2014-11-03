'use strict';

/**
 * @ngdoc service
 * @name flamingHipsterApp.feedzillaPosts
 * @description
 * # feedzillaPosts
 * Factory in the flamingHipsterApp.
 */
angular.module('flamingHipsterApp')
  .factory('feedzillaPosts', function(Restangular) {

    return {
      load: function(){
        var posts = Restangular
            .withConfig(function(RestangularConfigurer) {
              RestangularConfigurer.setBaseUrl('http://api.feedzilla.com/v1/categories/25/');
            })

            // 'cause response list is wrapped into { articles: [] }
            .addResponseInterceptor(function(data, operation) {
              var extractedData;
              if(operation === 'getList') {
                extractedData = data.articles;
              }
              return extractedData;
            })
            .all('articles')
            .getList()
          ;

        return posts;
      }
    }
  });
