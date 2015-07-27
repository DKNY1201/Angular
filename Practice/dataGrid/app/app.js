'use strict';

var gridApp = angular.module("gridApp",['ngRoute','ui.bootstrap','gridCtrl','gridService']);

gridApp.config(function($routeProvider){
	$routeProvider.when('/customers',{
		templateUrl : 'partials/customers.html',
		controller : 'gridMainCtrl'
	}).otherwise({
		redirectTo : '/customers'
	})
})
