'use strict';

/**
 * @ngdoc function
 * @name magazzinoApp.controller:FruttoCtrl
 * @description
 * # FruttoCtrl
 * Controller of the magazzinoApp
 */
angular.module('magazzinoApp')
  .controller('FruttoCtrl', ['$scope', '$routeParams', '$firebaseArray', 'Ref', function ($scope, $routeParams, $firebaseArray, Ref) {
    $scope.frutto = $routeParams.tipo;

    switch ($scope.frutto) {
      case 'Ciliegio':
        $scope.colore = 'red accent-4';
        $scope.testo = 'grey-text text-lighten-4';
        break;
      case 'Albicocco':
        $scope.colore = 'orange darken-2';
        $scope.testo = 'grey-text text-lighten-4';
        break;
      case 'Vite':
        $scope.colore = 'light-green darken-4';
        $scope.testo = 'grey-text text-lighten-4';
        break;
      case 'Seminativo':
        $scope.colore = 'yellow';
        $scope.testo = 'grey-text text-darken-4';
        break;
      case 'Extra':
        $scope.colore = 'green accent-4';
        $scope.testo = 'grey-text text-lighten-4';
        break;
    }

    $scope.trattamento = {};
    $scope.modificando = {};
    $scope.m = false;
    $scope.loading = true;

    $scope.trattamenti = new $firebaseArray(Ref.child('trattamenti').child($scope.frutto).orderByChild('data'));
    $scope.carichi = new $firebaseArray(Ref.child('carichi'));

    $scope.trattamenti.$loaded().then(function() {
      $scope.loading = false;
    })

    $scope.modifica = function(trattamento) {
      $scope.modificando = trattamento;
      $scope.m = true;
    }

    $scope.aggiungiTrattamento = function(valido, trattamento) {
      if(valido) {
        $scope.trattamenti.$add(trattamento);
        $scope.trattamento = {};
      }
    }

    $scope.salva = function(trattamento) {
      var index = $scope.trattamenti.$indexFor(trattamento.$id);
      $scope.trattamenti.$save(index);
      $scope.modificando = {};
      $scope.m = false;
    }


  }]);
