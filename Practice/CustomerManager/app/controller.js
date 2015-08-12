angular.module('customerManagerCtrl',[])
	.controller('listCtrl',function($scope,customerManageAPI){
		$scope.customers = [];
		customerManageAPI.getCustomers().then(function(response){
			$scope.customers = response.data;
		})
	}).controller('editCtrl',function($scope,$rootScope,$location,$routeParams,customerManageAPI,customer){
		$scope.customer = customer.data;
	})