'use strict';

describe('Controller: FruttoCtrl', function () {

  // load the controller's module
  beforeEach(module('magazzinoApp'));

  var FruttoCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    FruttoCtrl = $controller('FruttoCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
