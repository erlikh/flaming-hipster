'use strict';

describe('Controller: FeedsShowCtrl', function () {

  // load the controller's module
  beforeEach(module('flamingHipsterApp'));

  var FeedsShowCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    FeedsShowCtrl = $controller('FeedsShowCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
