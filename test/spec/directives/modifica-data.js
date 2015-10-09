'use strict';

describe('Directive: modificaData', function () {

  // load the directive's module
  beforeEach(module('magazzinoApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<modifica-data></modifica-data>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the modificaData directive');
  }));
});
