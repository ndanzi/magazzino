'use strict';

/**
 * @ngdoc function
 * @name magazzinoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the magazzinoApp
 */
angular.module('magazzinoApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
