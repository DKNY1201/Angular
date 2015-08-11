angular.module('customerManagerCtrl',[])
	.controller('listCtrl',function($scope,customerManageAPI){
		$scope.customers = [];
		customerManageAPI.getCustomers().then(function(response){
			$scope.customers = response.data;
		})
	})