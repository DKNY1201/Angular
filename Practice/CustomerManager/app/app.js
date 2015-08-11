var myApp = angular.module("customerManager",['ngRoute','customerManageService','customerManagerCtrl']);

myApp.config(['$routeProvider',function($routeProvider){
	$routeProvider.when('/customers',{
		title : 'Customers',
		templateUrl : 'partials/customers.html',
		controller : 'listCtrl',
	}).when('/edit-customer/:customerID',{
		title : 'Edit Customer',
		templateUrl : 'partials/edit-customer.html',
		controller : 'editCtrl',
		resolve : function(){

		}
	}).otherwise({
		redirectTo : '/customers'
	})
}])