'use strict';

describe('Directive: myAutocomplete', function () {

  // load the directive's module
  beforeEach(module('magazzinoApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<my-autocomplete></my-autocomplete>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the myAutocomplete directive');
  }));
});
