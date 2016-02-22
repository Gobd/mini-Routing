angular.module('miniRouting', ['ui.router'])

.config(function($stateProvider, $urlRouterProvider){

$stateProvider
  .state('home', {
    url: '/',
    template: 'js/home/homeTmpl.html',
    controller: 'homeCtrl'
  })
  .state('settings', {
    url: '/settings',
    template: 'js/settings/settingsTmpl.html',
    controller: 'settingsCtrl'
  })
  .state('products', {
    url: '/products/:id',
    template: 'js/home/productTmpl.html',
    controller: 'productsCtrl'
  });

  $urlRouterProvider
    .otherwise('/');

});
