'use strict';

angular.module('gridCtrl',[])
	.controller('gridMainCtrl',function($scope,gridAPI){
		function getCustomers(){
			gridAPI.getCustomers().success(function(response){
				$scope.customerLists = response;
			})
		}

		getCustomers();
	})