'use strict';

/**
 * @ngdoc directive
 * @name magazzinoApp.directive:modificaData
 * @description
 * # modificaData
 */
angular.module('magazzinoApp')
  .directive('modificaData', function () {
    return {
      templateUrl: 'views/modifica-data.html',
      restrict: 'AE',
      //replace: true,
      scope: {
        modifica: '=',
        label: '@',
        valid: '=',
      },
      require: ['ngModel', '^form'],
      controller: ['$scope', function($scope) {
        $scope.today = 'oggi';
        $scope.clear = 'cancella';
        $scope.close = 'ok';
        $scope.month = ['Gennaio', 'Febbraio', 'Marzo', 'Aprile', 'Maggio', 'Giugno', 'Luglio', 'Agosto', 'Settembre', 'Ottobre', 'Novembre', 'Dicembre'];
        $scope.monthShort = ['Gen', 'Feb', 'Mar', 'Apr', 'Mag', 'Giu', 'Lug', 'Ago', 'Set', 'Ott', 'Nov', 'Dic'];
        $scope.weekdaysFull = ['Domenica', 'Lunedì', 'Martedì', 'Mercoledì', 'Giovedì', 'Venerdì', 'Sabato'];
        $scope.weekdaysLetter = ['D', 'L', 'M', 'M', 'G', 'V', 'S'];
        $scope.maxDate = new Date().toISOString();
      }],
      link: function postLink(scope, element, attrs, ctrls) {
        ctrls[0].$formatters.push(function(modelValue) {
          if(modelValue) {
            var date = new Date(modelValue);
            return date;
          }
          return null;
        });

        ctrls[0].$render = function() {
          scope.data = ctrls[0].$viewValue;
        };

        scope.valid = false;
        element.find('input').addClass('invalid');
        scope.$watch('data', function(value) {
          ctrls[0].$setViewValue(scope.data);
          if(value) {
            scope.valid = true;
            element.find('input').removeClass('invalid');
            element.find('input').addClass('valid');
          } else {
            scope.valid = false;
            element.find('input').addClass('invalid');
          }
        });

        ctrls[0].$parsers.push(function(viewValue) {
          console.log(viewValue);
          var stringa = viewValue.split('-');
          console.log(stringa);
          var data = new Date(stringa[1]+'-'+stringa[0]+'-'+stringa[2]);
          return data.getTime();
        })




      }
    };
  });
