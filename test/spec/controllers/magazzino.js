'use strict';

describe('Controller: MagazzinoCtrl', function () {

  // load the controller's module
  beforeEach(module('magazzinoApp'));

  var MagazzinoCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MagazzinoCtrl = $controller('MagazzinoCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
