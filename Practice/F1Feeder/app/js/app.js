var F1FeederApp = angular.module('F1FeederApp',['ngRoute','F1FeederApp.controllers','F1FeederApp.services']);
F1FeederApp.config(function($routeProvider){
	$routeProvider
		.when("/drivers",{ templateUrl : 'partials/drivers.html', controller : 'driversController'})
		.when("/drivers/:id",{ templateUrl : 'partials/driver.html', controller : 'driverController'})
		.otherwise({redirectTo : "/drivers"});
})