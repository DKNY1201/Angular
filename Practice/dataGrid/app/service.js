'use strict';

angular.module('gridService',[])
	.factory('gridAPI',function($http){
		var gridAPI = {};
		gridAPI.getCustomers = function(){
			return $http({
				url : 'ajax/getCustomer.php',
				cache : 'true'
			})
		}

		return gridAPI;
	})