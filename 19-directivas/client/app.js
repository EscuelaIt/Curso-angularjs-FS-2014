// Incluimos referencia al módulo de directivas
angular.module('controlCajaApp', ['ui.router','ngCookies', 'ngResource', 'abFiltros','abDirectivas']);

angular.module('controlCajaApp').config(function ($stateProvider,$locationProvider) {
	$stateProvider
        .state('total', {
			url: '/',
            controller: 'CajaCtrl as caja',
            templateUrl: 'total.html'
        })
        .state('nuevo', {
			url: '/nuevo',
			controller: 'CajaCtrl as caja',
            templateUrl: 'nuevo.html'
        })
        .state('lista', {
        	url: '/lista',    
			controller: 'CajaCtrl as caja',
            templateUrl: 'lista.html'
        })
		.state('movimiento', {
        	url: '/movimiento/:id', // declaracion de parametros en rutas    
			controller: 'MovimientoCtrl as vm',
            templateUrl: 'movimiento.html'
        })
        .state('registro', {
        	url: '/registro',    
			controller: 'RegistroCtrl as registro',
            templateUrl: 'registro.html'
        })
        .state('not-found', {
        	url: '*path',    
            controller: 'CajaCtrl as caja',
            templateUrl: 'total.html'
        });
});