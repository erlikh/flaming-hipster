'use strict';

describe('Service: feedzillaPosts', function () {

  // load the service's module
  beforeEach(module('flamingHipsterApp'));

  // instantiate service
  var feedzillaPosts;
  beforeEach(inject(function (_feedzillaPosts_) {
    feedzillaPosts = _feedzillaPosts_;
  }));

  it('should do something', function () {
    expect(!!feedzillaPosts).toBe(true);
  });

});
