'use strict';

/**
 * @ngdoc directive
 * @name magazzinoApp.directive:inserisciCarico
 * @description
 * # inserisciCarico
 */
angular.module('magazzinoApp')
  .directive('inserisciCarico', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the inserisciCarico directive');
      }
    };
  });