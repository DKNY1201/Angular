'use strict';

var STMApp = angular.module("STMApp",['ngRoute','STMCtrl','STMService']);

STMApp.config(function($routeProvider){
	$routeProvider.when('/tasks',{
		templateUrl : 'partials/tasks.html',
		controller : 'STMMainCtrl'
	}).otherwise({
		redirectTo : '/tasks'
	})
})