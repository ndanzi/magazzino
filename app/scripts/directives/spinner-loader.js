'use strict';

/**
 * @ngdoc directive
 * @name magazzinoApp.directive:spinnerLoader
 * @description
 * # spinnerLoader
 */
angular.module('magazzinoApp')
  .directive('spinnerLoader', function () {
    return {
      templateUrl: 'views/spinner-loader.html',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {

      }
    };
  });
