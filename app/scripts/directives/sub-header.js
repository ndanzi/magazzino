'use strict';

/**
 * @ngdoc directive
 * @name magazzinoApp.directive:subHeader
 * @description
 * # subHeader
 */
angular.module('magazzinoApp')
  .directive('subHeader', function () {
    return {
      templateUrl: 'views/sub-header.html',
      restrict: 'E',
      replace: true,
      scope: {
        testo: '=',
        frutto: '=',
        colore: '=',
      },
      link: function postLink(scope, element, attrs) {

      }
    };
  });
