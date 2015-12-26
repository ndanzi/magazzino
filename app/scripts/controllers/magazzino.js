'use strict';

/**
 * @ngdoc function
 * @name magazzinoApp.controller:MagazzinoCtrl
 * @description
 * # MagazzinoCtrl
 * Controller of the magazzinoApp
 */
angular.module('magazzinoApp')
  .controller('MagazzinoCtrl', ['$scope', '$firebaseArray', 'Ref', function ($scope, $firebaseArray, Ref) {

    $scope.colore = 'brown lighten-2';
    $scope.frutto = 'Magazzino';

    $scope.carico = {};
    $scope.m = false;
    $scope.loading = true;
    $scope.mode = 'view';
    $scope.operazioni = 'Operazioni';
    $scope.selezionato = false;

    $scope.prodotti = new $firebaseArray(Ref.child('prodotti').orderByChild('data'));

    $scope.prodotti.$loaded().then(function() {
      $scope.loading = false;
    })

    $scope.viewMode = function() {
      $scope.carico = {};
      $scope.m = false;
      $scope.mode = 'view';
      $scope.operazioni = 'Operazioni';
      $scope.selezionato = false;
    }

    $scope.prodottoView = function() {
      $scope.mode = 'prodottiView';
    }

    $scope.insertMode = function() {
      $scope.operazioni = 'Inserisci Carico';
      $scope.mode = 'insert';
    }

    $scope.editMode = function() {
      $scope.operazioni = 'Modifica Carico';
      $scope.mode = 'edit';
    }

    $scope.deleteMode = function() {
      $scope.operazioni = 'Elimina Carico';
      $scope.mode = 'delete';
    }

    $scope.selected = function(item) {
      console.log(item);
      if($scope.mode !== 'insert') {
        $scope.carico = item;
        $scope.selezionato = true;
      }

    }

    console.log($scope.carichi);

    $scope.aggiungiCarico = function(valido) {
      console.log('valido', valido);
      if(valido) {
        $scope.carichi.$add($scope.carico);
        $scope.carico = {};
        $scope.viewMode();
      }
    }

    $scope.salva = function(valido) {
      if(valido) {
        console.log($scope.carico);
        $scope.prodotti.$save($scope.carico);
        $scope.carico = {};
        $scope.m = false;
        $scope.viewMode();
      }
      console.log(valido);
    }

    $scope.elimina = function() {
      $scope.carichi.$remove($scope.carico);
      $scope.viewMode();
    }
  }])
