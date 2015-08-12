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
		resolve : {
			customer : function(customerManageAPI,$route){
				var customerID = $route.current.params.customerID;
				return customerManageAPI.getCustomer(customerID);
			}
		}
	}).otherwise({
		redirectTo : '/customers'
	})
}])