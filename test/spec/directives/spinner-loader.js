'use strict';

describe('Directive: spinnerLoader', function () {

  // load the directive's module
  beforeEach(module('magazzinoApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<spinner-loader></spinner-loader>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the spinnerLoader directive');
  }));
});
