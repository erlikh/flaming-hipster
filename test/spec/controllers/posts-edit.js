'use strict';

describe('Controller: PostsEditCtrl', function () {

  // load the controller's module
  beforeEach(module('flamingHipsterApp'));

  var PostsEditCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PostsEditCtrl = $controller('PostsEditCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
