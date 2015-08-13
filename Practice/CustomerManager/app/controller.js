angular.module('customerManagerCtrl',[])
	.controller('listCtrl',function($scope,customerManageAPI){
		$scope.customers = [];
		customerManageAPI.getCustomers().then(function(response){
			$scope.customers = response.data;
		})
	}).controller('editCtrl',function($scope,$rootScope,$location,$routeParams,customerManageAPI,customer){
		var customerID = ($routeParams.customerID) ? parseInt($routeParams.customerID) : 0;
		$rootScope.title = (customerID) ? "Edit customer" : "Add customer";
		$scope.buttonText = (customerID) ? "Update customer" : "Add customer";
		
		var original = customer.data;
		original._id = customerID;
		$scope.customer = angular.copy(original);
		$scope.customer._id = customerID;

		$scope.isClean = function(){
			return angular.equals(original, $scope.customer);
		}

		$scope.saveCustomer = function(customer){
			if(customerID){
				customerManageAPI.updateCustomer(customerID,customer);
			}else{
				customerManageAPI.insertCustomer(customer);
			}
			$location.path('/');
			customerManageAPI.getCustomers().then(function(response){
				$scope.customers = response.data;
			})
		}

		$scope.deleteCustomer = function(customer){
			if (confirm("Are you sure to delete customer number : " + customer.customerNumber)){
				customerManageAPI.deleteCustomer(customer.customerNumber);
			}
			$location.path('/');
			
		}
	})