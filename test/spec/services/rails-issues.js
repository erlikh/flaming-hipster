'use strict';

describe('Service: railsIssues', function () {

  // load the service's module
  beforeEach(module('flamingHipsterApp'));

  // instantiate service
  var railsIssues;
  beforeEach(inject(function (_railsIssues_) {
    railsIssues = _railsIssues_;
  }));

  it('should do something', function () {
    expect(!!railsIssues).toBe(true);
  });

});
