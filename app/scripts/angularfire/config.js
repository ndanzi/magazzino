angular.module('firebase.config', [])
  .constant('FBURL', 'https://magazzino.firebaseio.com')
  .constant('SIMPLE_LOGIN_PROVIDERS', ['password','anonymous'])

  .constant('loginRedirectPath', '/login');
