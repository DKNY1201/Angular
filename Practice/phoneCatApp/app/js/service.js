angular.module('phoneCatService',[])
	.factory('phoneCatAPI',function($http){
		var phoneCatAPI = {};

		phoneCatAPI.getPhones = function(){
			return $http({
				url : 'phones/phones.json',
				cache : 'true',
			})
		}

		phoneCatAPI.getPhone = function(phoneId){
			return $http({
				url : 'phones/' + phoneId + '.json',
				cache : 'true',
			})
		}

		return phoneCatAPI;
	})