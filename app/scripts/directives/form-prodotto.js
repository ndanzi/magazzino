'use strict';

/**
 * @ngdoc directive
 * @name magazzinoApp.directive:formProdotto
 * @description
 * # formProdotto
 */
angular.module('magazzinoApp')
  .directive('formProdotto', function () {
    return {
      templateUrl: 'views/form-prodotto.html',
      restrict: 'E',
      scope: {
        prodotto: '=',
        prodotti: '=',
        submitText: '@',
        onSubmit: '&',
        onDiscard: '&'
      },
      link: function postLink(scope, element, attrs) {

      }
    };
  });
