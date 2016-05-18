(function () {
  'use strict'

angular
  .module('shoppingApp', ['ngRoute'])
  .config(config);

  function config ($routeProvider, $locationProvider) {
    $routeProvider
    .when('/', {
      templateUrl: 'store/store.html',
      controller: 'StoreController',
      controllerAs: 'store'
    })
    .when('/cart', {
      templateUrl: 'cart/cart.html',
      controller: 'CartController',
      controllerAs: 'cart'
    })
    .otherwise({
      redirectTo: '/'
    })
    $locationProvider.html5Mode(true);
  }
})();
