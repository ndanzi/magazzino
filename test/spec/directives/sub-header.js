'use strict';

describe('Directive: subHeader', function () {

  // load the directive's module
  beforeEach(module('magazzinoApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<sub-header></sub-header>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the subHeader directive');
  }));
});
