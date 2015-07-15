'use strict';

angular.module("phoneCatController",[])
	.controller("phoneListController", function($scope,$http){
		$http.get("phones/phones.json").success(function(data){
			$scope.phones = data;
		})

		$scope.order = "name";

		$scope.searchFilter = function(phone){
			var keyword = new RegExp($scope.query,'i');
			return !$scope.query || keyword.test($scope.name);
		}
	})