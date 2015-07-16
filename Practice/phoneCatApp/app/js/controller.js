'use strict';

angular.module("phoneCatController",[])
	.controller("phoneListController", function($scope,$http,phoneCatAPI){
		phoneCatAPI.getPhones().success(function(data){
			$scope.phones = data;
		})

		$scope.order = "name";

		$scope.searchFilter = function(phone){
			var keyword = new RegExp($scope.query,'i');
			return !$scope.query || keyword.test(phone.name);
		}
	}).controller('phoneDetailController',function($scope,$routeParams,$http,phoneCatAPI){
		phoneCatAPI.getPhone($routeParams.phoneId).success(function(data){
			$scope.phone = data;

			$scope.mainImg = $scope.phone.images[0];
			
		})

		$scope.setImage = function(imageUrl) {
	      $scope.mainImageUrl = imageUrl;
	    };

	})