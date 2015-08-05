'use strict';

angular.module('gridCtrl',[])
	.controller('gridMainCtrl',function($scope,gridAPI,$timeout){
		function getCustomers(){
			gridAPI.getCustomers().success(function(response){
				$scope.list = response;
				$scope.currentPage = 1;
				$scope.entryLimit = 5;
				$scope.filteredItems = $scope.list.length;
				$scope.totalItems = $scope.list.length;
			})
		}

		getCustomers();

		$scope.sort_by = function(predicate){
			$scope.predicate = predicate;
			$scope.reverse = ! $scope.reverse
		}

		$scope.filter = function(){
			$timeout(function(){
				$scope.filteredItems = $scope.filtered.length;
			},10);
		}

	}).filter('startFrom',function(){
		return function(input,start){
			if (input) {
				start = +start;
				return input.slice(start);
			}

			return [];
		}
	})