'use strict';

describe('Controller: Magazzino2Ctrl', function () {

  // load the controller's module
  beforeEach(module('magazzinoApp'));

  var Magazzino2Ctrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    Magazzino2Ctrl = $controller('Magazzino2Ctrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
