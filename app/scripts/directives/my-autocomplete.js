'use strict';

/**
 * @ngdoc directive
 * @name magazzinoApp.directive:myAutocomplete
 * @description
 * # myAutocomplete
 */
angular.module('magazzinoApp')
  .directive('myAutocomplete', function () {
    return {
      template: '<angucomplete-alt id="autocomplete" \
        placeholder="Nome Commerciale" \
        pause="100" \
        local-data="items" \
        search-fields="nomeCommerciale" \
        title-field="nomeCommerciale" \
        minlength="1" \
        input-changed="Changed" \
        selected-object="Selected" \
        text-searching="Cercando tra i prodotti" \
        text-no-results="Nessun corrispondente tra i prodotti già inseriti" \
        disable-input="disabled" \
        required \
        />',
      require: 'ngModel',
      scope:{items: '=', disabled: '='},
      restrict: 'EA',
      link: function postLink(scope, element, attrs, ngModel) {
        scope.$watch(function (){
          return ngModel.$modelValue;
        }, function (v) {
          if(v) {
            scope.$broadcast('angucomplete-alt:changeInput', 'autocomplete', ngModel.$modelValue);
          } else {
            scope.$broadcast('angucomplete-alt:clearInput', 'autocomplete', ngModel.$modelValue);
          }

        });

        scope.Changed = function(str) {
          ngModel.$setViewValue(str);
          ngModel.$render();
        }

        scope.Selected = function(str) {
          if(str) {
            ngModel.$setViewValue(str.title);
            ngModel.$render();
          }
        }
      }
    };
  });
