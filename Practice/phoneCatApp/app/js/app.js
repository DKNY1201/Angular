'use strict';

var phoneCatApp = angular.module('phoneCatApp',['ngRoute','phoneCatController','phoneAppFilter','phoneCatService','phoneCatAnimation']);

phoneCatApp.config(function($routeProvider){
	$routeProvider.when('/phones',{
		templateUrl : 'partials/phone-list.html',
		controller : 'phoneListController'
	}).when('/phones/:phoneId',{
		templateUrl : 'partials/phone-detail.html',
		controller : 'phoneDetailController'
	}).otherwise({
		redirectTo : '/phones'
	})
})